import React from "react";

// Featured Products section laid out as a mosaic like the provided screenshot
// - Responsive grid: 1 col on mobile, 2 on small screens, 3 on large
// - Large hero tile spans 2 columns and 2 rows on large screens
// - Mix of image-only and promo tiles with text and buttons

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Trusted Heavy Duty Commercial vehicles for your business.
            </p>
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Big left promo (spans 2 cols and 2 rows on large screens) */}
          <article className="relative col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            {/* Background image */}
            <img
              src="https://cdn4.singleinterface.com/files/banner_images/314657/323_1712138083_BackhoeLoaders.jpg"
              alt="Hero furniture"
              className="w-full h-56 sm:h-64 lg:h-full object-cover object-center"
              loading="lazy"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/10 to-transparent flex items-center">
              <div className="p-6 sm:p-8">
                {/* <p className="text-[11px] uppercase tracking-wider text-slate-500">
                  Summer Trend
                </p> */}
                <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-900">
                  Backhoe Loaders
                </h3>
                <button
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                  aria-label="Shop now - Furniture made simple"
                >
                  View Brochure
                </button>
              </div>
            </div>
          </article>

          {/* Top-right tall image */}
          <article className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            <img
              src="https://cdn4.singleinterface.com/files/banner_images/314657/6245_1712138084_Excavators.jpg"
              alt="Stool"
              className="h-full w-full object-cover"
              loading="lazy"
            />
             
            
          </article>

          {/* Small promo card with text + button */}
          <article className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              <h4 className="mt-1 text-base font-semibold text-slate-900">
                Excavators
              </h4>
              <p className="text-[11px] uppercase tracking-wider text-slate-500">
                The best-in-class range of JCB Excavators comprises heavy-duty Excavators that exhibit maximum performance, strength, efficiency and productivity.
              </p>

             


            <button
              className="mt-4 inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white self-start"
              aria-label="Shop now - Get 50% offer"
              >
              View Brochure
            </button>
              </div>
          </article>

          {/* Wide card with chair image and text */}
          <article className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-6 flex items-center justify-between sm:col-span-2">
            <img
              src="https://cdn4.singleinterface.com/files/banner_images/314657/354_1712138218_Telehandlers.jpg"
              alt="Armchair"
              className="h-28 sm:h-32 object-cover rounded-md"
              loading="lazy"
            />
            
             <p className="text-[11px] uppercase tracking-wider text-slate-500 px-[1rem]">JCB has been pioneering the Telehandlers concept since 1977 and is today, the world leading manufacturer of Telehandlers, offering a range from 7 meter to 20 meter placing height.</p>
            <div className="ml-4">
              <h4 className="mt-1 text-base font-semibold text-slate-900">
              Telehandlers
              </h4>
              <button
                className="mt-3 inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                aria-label="Shop now - Cotton coated"
              >
                View Brochure
              </button>
            </div>
          </article>

          {/* Small card with header then image */}
          <article className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            <div className="p-6">
              {/* <p className="text-[11px] uppercase tracking-wider text-slate-500">
                Super Loaders
              </p> */}
              <h4 className="mt-1 text-base font-semibold text-slate-900">
                Super Loaders
              </h4>
            </div>
            <img
              src="https://cdn4.singleinterface.com/files/banner_images/314657/7729_1712138217_SuperLoaders.jpg"
              alt="Sofa"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </article>

          {/* Small card with header then image */}
          <article className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            <div className="p-6">
              {/* <p className="text-[11px] uppercase tracking-wider text-slate-500">
                Summer Trend
              </p> */}
              <h4 className="mt-1 text-base font-semibold text-slate-900">
                Wheeled Loaders
              </h4>
            </div>
            <img
              src="https://cdn4.singleinterface.com/files/banner_images/314657/1373_1712138102_WheeledLoaders.jpg"
              alt="Side table"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
