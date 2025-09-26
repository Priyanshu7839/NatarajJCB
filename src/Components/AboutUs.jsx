import React from "react";

// About Us page
// - Centered container (max-w-7xl)
// - Fully responsive with TailwindCSS
// - Clean layout: intro, story, stats, values, and a simple CTA

const AboutUs = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-wide text-green-600 uppercase">
            About Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Built for reliability. Driven by service.
          </h1>
          <p className="mt-3 text-slate-600">
            We’re a team committed to quality products, honest pricing, and fast
            support. Our mission is to help you get more done, with less effort.
          </p>
        </div>

        {/* Story + Image */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
               ABOUT NATARAJ JCB:
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
             Since 2014, Nataraj JCB has been a trusted name in the construction equipment industry, serving thousands of satisfied customers across Jhansi, Orai, Lalitpur, Hamirpur, Banda, and Mahoba. We specialize in providing top-quality JCB machines, including Backhoe Loaders, Excavators, Compactors, Telehandlers, and more.

            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
             Our commitment to excellence is reflected in our exceptional service and extensive range of JCB parts and accessories. We pride ourselves on delivering reliable solutions that enhance productivity and drive business growth. Whether you're looking to buy a new JCB machine, schedule a service, or explore the latest offers, Nataraj JCB is your one-stop destination.


            </p>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-500"
                  aria-hidden
                />
                <span>
                  <span className="font-medium text-slate-900">
                    Customer-first
                  </span>{" "}
                  support with fast responses and clear communication.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-500"
                  aria-hidden
                />
                <span>
                  <span className="font-medium text-slate-900">Durable</span>{" "}
                  components, rigorous testing, and trusted suppliers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-500"
                  aria-hidden
                />
                <span>
                  <span className="font-medium text-slate-900">
                    Fair pricing
                  </span>{" "}
                  with clear quotes and no surprise fees.
                </span>
              </li>
            </ul>

            {/* Stats */}
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="rounded-lg border border-slate-200 p-4 text-center">
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Years
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  10+
                </dd>
              </div>
              <div className="rounded-lg border border-slate-200 p-4 text-center">
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Consumers
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  10k+
                </dd>
              </div>
              {/* <div className="rounded-lg border border-slate-200 p-4 text-center">
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Projects
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  2k+
                </dd>
              </div> */}
              <div className="rounded-lg border border-slate-200 p-4 text-center">
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Cities
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  6+
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-xl shadow border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Team collaborating at the workshop"
                className="h-full w-full object-cover max-h-[520px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-lg font-semibold text-slate-900 text-center">
            What we value
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-slate-200 p-5">
              <h4 className="font-medium text-slate-900">Quality above all</h4>
              <p className="mt-1 text-slate-600 text-sm">
                We obsess over build-quality and reliability so you can focus on
                your work.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-5">
              <h4 className="font-medium text-slate-900">Honest service</h4>
              <p className="mt-1 text-slate-600 text-sm">
                Clear timelines, transparent estimates, and support that cares.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-5">
              <h4 className="font-medium text-slate-900">
                Continuous improvement
              </h4>
              <p className="mt-1 text-slate-600 text-sm">
                We keep learning from every install, repair, and customer
                conversation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-slate-900">
                Want to know more?
              </h4>
              <p className="mt-1 text-sm text-slate-600">
                Reach out—our team would love to help.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700 transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
