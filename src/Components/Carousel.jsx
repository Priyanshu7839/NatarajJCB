import React, { useEffect, useRef, useState } from "react";
import Banner from '../assets/WebsiteBanner.jpg' 

// Polished default slides using existing assets
const defaultSlides = [
    { src: Banner, alt: "React logo", caption: "Festive Deals" }
];


const Carousel = ({
  slides = defaultSlides,
  autoPlay = true,
  autoPlayInterval = 4500,
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const count = slides?.length || 0;
  const canSlide = count > 1;

  const goTo = (idx) => setCurrent(((idx % count) + count) % count);
  const next = () => canSlide && setCurrent((prev) => (prev + 1) % count);
  const prev = () =>
    canSlide && setCurrent((prev) => (prev - 1 + count) % count);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || paused || isFocused || !canSlide) return;
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % count),
      autoPlayInterval
    );
    return () => clearInterval(id);
  }, [autoPlay, paused, isFocused, autoPlayInterval, count, canSlide]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Touch swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaX.current > threshold) prev();
    if (touchDeltaX.current < -threshold) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  if (!count) {
    return (
      <div
        className={`w-full rounded-xl bg-gray-100 p-6 text-center text-gray-500 ${className}`}
      >
        No slides to display
      </div>
    );
  }

  return (
  <div className="w-full flex items-center justify-center pt-[2rem]">
      <div
      className={`group relative w-full select-none max-w-7xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* Viewport */}
      <div
        className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-sm"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Track */}
        <div
          className="flex will-change-transform transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              {/* Slide content with hero-like responsive height */}
              <div className="relative bg-gray-100 aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9]">
                <img
                  src={slide.src}
                  alt={slide.alt ?? `Slide ${idx + 1}`}
                  className="absolute inset-0 h-full w-full object-fit"
                  draggable={false}
                  loading="lazy"
                />

                {/* Bottom gradient for better text contrast */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Caption card */}
                {slide.caption ? (
                  <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 max-w-[85%] sm:max-w-[60%]">
                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 sm:px-4 sm:py-3 text-white shadow-lg backdrop-blur-md">
                      <span className="text-xs font-medium tracking-wide sm:text-sm">
                        {slide.caption}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {canSlide && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white shadow-lg backdrop-blur-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:left-4 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white shadow-lg backdrop-blur-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 4.22a.75.75 0 011.06 0l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 11-1.06-1.06L14.94 12 8.22 5.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {canSlide && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 sm:bottom-4">
          {slides.map((_, i) => {
            const active = current === i;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 border border-white/30 shadow-sm ${
                  active
                    ? "w-6 bg-white/90"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  </div>
  );
};

export default Carousel;
