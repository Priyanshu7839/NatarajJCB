import dealersBanner from "../assets/Websitebanner1.jpg";

const DEALERS = [
  {
    name: "Natraj JCB – Jaipur",
    address: "Plot 12, Sitapura Industrial Area, Jaipur, Rajasthan 302022",
    phone: "+91 98450 12345",
    email: "jaipur@natraj-jcb.in",
  },
  {
    name: "Natraj JCB – Ajmer",
    address: "NH 48, Opp. Industrial Estate, Ajmer, Rajasthan 305001",
    phone: "+91 98450 45678",
    email: "ajmer@natraj-jcb.in",
  },
  {
    name: "Natraj JCB – Kota",
    address: "Gumanpura Road, Kota, Rajasthan 324007",
    phone: "+91 98450 78901",
    email: "kota@natraj-jcb.in",
  },
  {
    name: "Natraj JCB – Udaipur",
    address: "Pratap Nagar Industrial Area, Udaipur, Rajasthan 313001",
    phone: "+91 98450 23456",
    email: "udaipur@natraj-jcb.in",
  },
];

const JcbDealers = () => {
  return (
    <section
      id="dealers"
      className="relative mx-auto mt-16 max-w-7xl overflow-hidden rounded-3xl bg-white"
    >
      <div className="absolute inset-0">
        <img
          src={dealersBanner}
          alt="Dealers backdrop"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative space-y-10 px-6 py-14 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 self-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 lg:self-start">
            Nationwide Presence
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Trusted JCB Dealers Across India
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 lg:mx-0">
            Discover our network of expert teams delivering rapid support, genuine parts, and reliable machines wherever your projects take you.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2">
          {DEALERS.map((dealer) => (
            <li
              key={dealer.email}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-600">
                    {dealer.name}
                  </h3>
                  <p className="text-sm text-slate-600">{dealer.address}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${dealer.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 font-medium text-slate-800 transition hover:text-amber-600"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      📞
                    </span>
                    {dealer.phone}
                  </a>
                  <a
                    href={`mailto:${dealer.email}`}
                    className="flex items-center gap-2 font-medium text-slate-800 transition hover:text-amber-600"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      ✉️
                    </span>
                    {dealer.email}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-slate-900 px-6 py-6 text-center text-white sm:flex-row sm:text-left">
          <p className="text-sm font-medium text-white/80">
            Prefer a personal walkthrough? Book a showroom visit with our specialists.
          </p>
          <a
            href="tel:+919845099999"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600"
          >
            Book a visit
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JcbDealers;
