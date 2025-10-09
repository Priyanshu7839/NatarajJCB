import React, { useEffect, useState } from "react";
import Logo from '../assets/Logo.jpg'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Social Timeline", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close mobile menu if resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          {/* Simple brand mark */}
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-900 font-extrabold shadow-sm overflow-hidden">
            <img src={Logo} alt="" />
          </span>
          <span className="text-lg sm:text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            Nataraj Mobiles Pvt. Ltd.
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="group relative inline-block transition-colors hover:text-slate-900"
              >
                {l.name}
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-0.5 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
        
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 5.75A.75.75 0 014.5 5h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6A.75.75 0 014.5 11h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <ul className="space-y-1 rounded-xl border border-slate-200 bg-white/80 p-2 shadow-sm">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="flex items-center rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#contact"
                className="flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
