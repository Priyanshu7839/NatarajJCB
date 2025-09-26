import React from "react";

// Simple Footer
// - Social media icons
// - Copyright notice
// - Google Maps location icon linking to maps
// Uses TailwindCSS and inline SVG icons to avoid extra deps

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          {/* Left: Copyright */}
          <p className="text-sm text-slate-600 text-center md:text-left">
            © {year} Natraj JCB. All rights reserved. Unauthorized use is
            prohibited.
          </p>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-slate-500 hover:text-slate-700 transition"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9V12.06h2.54V9.95c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.24 0-1.63.77-1.63 1.56v1.79h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-slate-500 hover:text-slate-700 transition"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-slate-500 hover:text-slate-700 transition"
              title="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M13.5 10.8 20.8 3h-1.7l-6.3 6.9L7.8 3H3l7.7 11.1L3 21h1.7l6.7-7.3 5.3 7.3H21l-7.5-10.2Zm-2.4 2.6-.8-1.1-6.3-8.8h2.7l5.1 7.1.8 1.1 6.6 9.3H16l-4.9-6.6Z" />
              </svg>
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.google.com/?q=Natraj%20JCB"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps location"
              className="text-slate-500 hover:text-slate-700 transition"
              title="Open Google Maps"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
