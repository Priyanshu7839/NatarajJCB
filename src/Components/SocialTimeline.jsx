import React, { useEffect, useRef, useState } from "react";
import Timeline from '../assets/timeline1.jpg'

// SocialTimeline (sticky line + scrolling cards)
// - Desktop: left sticky meta updates with the currently centered card
// - Center: sticky vertical line with a changing node (dot/star) for the current card
// - Right: post cards scroll
// - Mobile: simple stacked feed with a subtle left border

const DEMO_POSTS = [
  {
    id: "p1",
    date: "Oct 10, 2025",
    caption: "The JCB Stage 5 Backhoe Loader Range, built for outstanding performance and savings, setting new standards of success and profits in your business. Take full advantage of the auspicious festivals, book your JCB Stage 5 machine today",
    image:Timeline,
    people: [{ name: "Jack", age: "1 year and 2 months" }],
    badge: "dot", // dot | star
  },
  {
    id: "p2",
    date: "Oct 9, 2025",
    caption: "JCB key unlocks a journey of growth.Congratulations to our newest customer — welcome to the Nataraj JCB family! Call on +91 7081 208 300 or +91 8573 029 392 to become a part of the Nataraj JCB family. ",
    image:Timeline,
    people: [{ name: "Joe", age: "1 year and 2 months" }],
    badge: "dot",
  },
  {
    id: "p3",
    date: "Oct 7, 2025",
    caption: "This Diwali, give new light to your business. Make every heavy task easy with JCB, and get explosive offers. For more information call +91 7081 208 300 / +91 8573 029",
    image:Timeline,
    people: [{ name: "john", age: "1 year and 2 months" }],
    badge: "dot",
  
  },
];

const NodeIcon = ({ type = "dot" }) => {
  if (type === "star") {
    return (
      <span
        className="grid place-items-center h-6 w-6 rounded-full bg-white shadow ring-2 ring-green-400"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#f59e0b"
          className="h-4 w-4"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="h-3 w-3 rounded-full bg-green-500 border-2 border-white shadow"
      aria-hidden
    />
  );
};

const SocialTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsRefs = useRef([]); // refs to each article

  // Track which card is closest to viewport center
  useEffect(() => {
    const updateCurrent = () => {
      if (!postsRefs.current?.length) return;
      const viewportCenter = window.innerHeight / 2;
      let nearest = 0;
      let minDist = Infinity;
      postsRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });
      setCurrentIndex(nearest);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCurrent();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Initialize once on mount
    updateCurrent();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const currentPost = DEMO_POSTS[currentIndex] ?? DEMO_POSTS[0];

  return (
    <section id="timeline" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Social Timeline
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            A running history of posts and memories.
          </p>
        </div>

        {/* Desktop layout: sticky left meta + sticky center line + scrolling right cards */}
        <div className="relative md:grid md:grid-cols-[200px_28px_1fr] md:gap-6">
          {/* Left sticky meta (desktop) */}
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <div className="pr-2 text-right">
                {/* People for the currently centered post */}
                {/* {currentPost?.people?.map((p, i) => (
                  <div key={`current-person-${i}`} className="mb-2">
                    <div className="text-sm font-medium text-slate-800">
                      {p.name}
                    </div>
                    <div className="text-xs text-slate-500">{p.age}</div>
                  </div>
                ))} */}
                {/* Date for the currently centered post */}
                <div className="mt-4 text-xs text-slate-500">
                  {currentPost?.date}
                </div>
              </div>
            </div>
          </aside>

          {/* Center sticky vertical line (desktop) */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="relative h-[70vh]">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-400/70 h-full" />
                {/* Node for the current post at the middle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <NodeIcon type={currentPost?.badge} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: scrolling cards */}
          <div>
            {DEMO_POSTS.map((post, idx) => (
              <article
                key={post.id}
                ref={(el) => (postsRefs.current[idx] = el)}
                className="mb-10 md:mb-14 relative md:pl-0 pl-4 border-l-2 border-green-400/70 md:border-0"
              >
                <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full max-h-[600px] object-fit"
                      loading="lazy"
                    />
                  )}
                  <div className="p-4 sm:p-5">
                    <p className="text-slate-800 leading-relaxed">
                      {post.caption}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-slate-500 text-sm">
                      {/* <div className="flex items-center gap-4">
                        <button
                          className="hover:text-rose-600"
                          aria-label="Like"
                        >
                          <span role="img" aria-hidden>
                            ❤️
                          </span>
                        </button>
                        <button
                          className="hover:text-slate-700"
                          aria-label="Comment"
                        >
                          <span role="img" aria-hidden>
                            💬
                          </span>
                        </button>
                      </div> */}
                      {/* The card also shows its own date for clarity on mobile */}
                      <time className="text-xs">{post.date}</time>
                    </div>
                  </div>
                </div>

               
               
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialTimeline;
