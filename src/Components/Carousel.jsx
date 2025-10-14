import { useEffect, useRef, useState } from "react";
import Banner from "../assets/Websitebanner.jpg";
import Banner1 from "../assets/Websitebanner1.jpg";

const slides = [
  { src: Banner1, alt: "Natraj JCB logo" },
  { src: Banner, alt: "JCB equipment banner" }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (direction) => {
    setIndex((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <section className="relative mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-3xl bg-black/5">
      <div
        className="flex h-[70vh] min-h-[320px] w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="relative w-full flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-fit"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(-1)}
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/70 p-3 text-slate-700 shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-amber-400 md:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(1)}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/70 p-3 text-slate-700 shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-amber-400 md:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-2.5 w-8 rounded-full transition-all duration-300 ${
              index === idx ? "bg-amber-400" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
