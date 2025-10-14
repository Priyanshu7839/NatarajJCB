import { useEffect, useState } from "react";

const FEATURED_CATEGORIES = [
  {
    title: "Backhoe Loaders",
    summary:
      "The legendary JCB 3DX lineage delivers unbeatable versatility for digging, loading, hauling, and lifting across every Indian job site.",
    products: [
      {
        name: "3DX PLUS CEV V 4WD 74HP",
        highlight: "74 HP • CEV Stage V • 4WD",
        description:
          "All-wheel traction with Stage V compliance keeps your crew productive even on the toughest terrain.",
      },
      {
        name: "3DX ECO EXPERT CEV V 49 HP",
        highlight: "49 HP • ECO Mode",
        description:
          "Fuel-saving ECO hydraulics deliver precision and economy for urban infrastructure jobs.",
      },
      {
        name: "3DX PLUS CEV 2WD 74HP",
        highlight: "74 HP • 2WD",
        description:
          "A dependable 2WD workhorse engineered for high breakout forces and faster cycle times.",
      },
      {
        name: "JCB 3DX PLUS 4WD 74HP HIGH DUMP 2YR WARRANTY",
        highlight: "74 HP • High Dump • 2-Year Warranty",
        description:
          "Extended reach and factory-backed protection let you load higher tippers with total confidence.",
      },
    ],
  },
  {
    title: "Mini Excavator",
    summary:
      "Compact, agile, and transport-friendly, mini excavators slip into tight spaces while still packing serious digging power.",
    products: [
      {
        name: "JS30 PLUS MINI EXC",
        highlight: "2.8 Tonne Class",
        description:
          "Perfect for urban worksites with zero-tail precision, intuitive controls, and low fuel burn.",
      },
    ],
  },
  {
    title: "Excavators",
    summary:
      "Purpose-built crawler excavators tuned for maximum output, superior fuel-efficiency, and rock-solid reliability.",
    products: [
      {
        name: "JCB 215 LC Fuel Master",
        highlight: "Heavy Duty • Fuel Master",
        description:
          "Low operating cost and best-in-class swing torque make it the contractor's favourite performer.",
      },
      {
        name: "JCB 225 LC M",
        highlight: "22.5 Tonne Class",
        description:
          "Balanced for bulk earthmoving with intelligent hydraulics that adapt to every task.",
      },
      {
        name: "JCB 205 Fuel Master",
        highlight: "20.5 Tonne Class",
        description:
          "Engineered to move more per litre with reinforced structures built to last for years.",
      },
    ],
  },
  {
    title: "Wheel Loaders",
    summary:
      "High-capacity loaders that combine massive breakout force with operator comfort and advanced telematics.",
    products: [
      {
        name: "JCB 440-5",
        highlight: "4.5 m³ Bucket",
        description:
          "Optimised for quarry and mining operations with next-gen driveline efficiency.",
      },
      {
        name: "JCB 455-5",
        highlight: "Heavy-Duty Axles",
        description:
          "Rugged structure, high lift, and smart hydraulics for continuous-duty loading.",
      },
      {
        name: "JCB 457-5",
        highlight: "Premium Operator Cabin",
        description:
          "Flagship productivity with premium cab ergonomics and cutting-edge telematics suite.",
      },
    ],
  },
  {
    title: "Tele Handlers",
    summary:
      "Telescopic handlers that lift, place, and load with precision—ideal for construction, industrial, and agro applications.",
    products: [
      {
        name: "JCB 530-70",
        highlight: "7 m Lift Height",
        description:
          "Compact footprint with generous lift height for stacking and material placement.",
      },
      {
        name: "JCB 540-70",
        highlight: "4.0 Tonne Lift Capacity",
        description:
          "High-capacity lift with SRS and adaptive load control for safe, confident operation.",
      },
      {
        name: "JCB 530-110",
        highlight: "11 m Reach",
        description:
          "Extended reach to conquer multi-storey projects without compromising stability.",
      },
    ],
  },
  {
    title: "Agrimax",
    summary:
      "Agricultural specialists that deliver multi-utility performance for harvesting, handling, and on-farm logistics.",
    products: [
      {
        name: "JCB Agri Max",
        highlight: "Agri-Optimised",
        description:
          "Purpose-built for farm productivity with torque-rich driveline and operator-first ergonomics.",
      },
    ],
  },
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [productIndices, setProductIndices] = useState(() =>
    Array.from({ length: FEATURED_CATEGORIES.length }, () => 0)
  );
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveCategory((prev) => (prev + 1) % FEATURED_CATEGORIES.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    setProductIndices((prev) => {
      const next = [...prev];
      next[activeCategory] = 0;
      return next;
    });
  }, [activeCategory]);

  const handleCategoryChange = (direction) => {
    setActiveCategory(
      (prev) =>
        (prev + direction + FEATURED_CATEGORIES.length) %
        FEATURED_CATEGORIES.length
    );
  };

  const handleProductChange = (direction) => {
    setProductIndices((prev) => {
      const next = [...prev];
      const count = FEATURED_CATEGORIES[activeCategory].products.length;
      const currentIndex = next[activeCategory] ?? 0;
      next[activeCategory] = (currentIndex + direction + count) % count;
      return next;
    });
  };

  const currentCategory = FEATURED_CATEGORIES[activeCategory];
  const currentProductIndex = productIndices[activeCategory] ?? 0;

  return (
    <section
      id="featured-products"
      className="bg-white py-16 text-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
              Featured Products
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {currentCategory.title}
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              {currentCategory.summary}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              aria-label="Previous product category"
              onClick={() => handleCategoryChange(-1)}
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next product category"
              onClick={() => handleCategoryChange(1)}
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="flex flex-wrap gap-2">
          {FEATURED_CATEGORIES.map((category, index) => {
            const isActive = index === activeCategory;
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring focus-visible:ring-amber-400 ${
                  isActive
                    ? "border-amber-500 bg-amber-50 text-amber-600"
                    : "border-slate-200 text-slate-500 hover:border-amber-400 hover:text-amber-500"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div className="relative mt-4">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_25px_50px_-12px_rgba(148,163,184,0.3)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentProductIndex * 100}%)`,
              }}
            >
              {currentCategory.products.map((product) => (
                <article
                  key={product.name}
                  className="w-full flex-shrink-0 px-6 py-8 sm:px-10 sm:py-12"
                  aria-live="polite"
                >
                  <div className="flex flex-col gap-8 rounded-2xl bg-white/80 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-3xl">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                        {currentCategory.title}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
                        {product.name}
                      </h3>
                      {product.description ? (
                        <p className="mt-4 text-base text-slate-600 sm:text-lg">
                          {product.description}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col items-start gap-4 rounded-2xl border border-amber-100 bg-amber-50/80 p-6 text-sm text-slate-700 sm:text-base">
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-500">
                        Key Highlight
                      </p>
                      <p className="text-lg font-semibold text-amber-600">
                        {product.highlight}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 transition hover:text-amber-700"
                      >
                        View details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {currentCategory.products.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous product"
                onClick={() => handleProductChange(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-lg transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next product"
                onClick={() => handleProductChange(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-lg transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-2">
          {currentCategory.products.map((_, index) => {
            const isActive = index === currentProductIndex;
            return (
              <span
                key={`${currentCategory.title}-${index}`}
                className={`h-2 w-6 rounded-full transition ${
                  isActive ? "bg-amber-400" : "bg-slate-200"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
