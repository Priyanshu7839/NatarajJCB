import React, { useState } from "react";

// Contact Us page
// - max-w-7xl centered container
// - Fully responsive with TailwindCSS
// - Left: contact form | Right: contact details + quick links

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Placeholder: integrate with your backend/email service here
      // For now, just simulate a short delay
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      // Optionally reset form
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium tracking-wide text-green-600 uppercase">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            We’d love to hear from you
          </h1>
          <p className="mt-3 text-slate-600">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 p-5 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                    placeholder="Tell us a bit about your request..."
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-500">
                    We typically reply within 24 hours.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700 transition disabled:opacity-70"
                    aria-label="Send message"
                  >
                    {submitting ? "Sending..." : "Send message"}
                  </button>
                </div>

                {submitted && (
                  <div className="rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-800">
                    Thanks! Your message has been sent.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-slate-200 p-5 sm:p-6 h-full flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Reach us directly
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Prefer a quick chat? Call or email us using the details below.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-500">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="mt-0.5 inline-block font-medium text-slate-900 hover:underline"
                  >
                   +91 85730 29392

                  </a>
                </div>
                <div>
                  <p className="text-slate-500">Whatsapp</p>
                  <a
                    href="tel:+919876543210"
                    className="mt-0.5 inline-block font-medium text-slate-900 hover:underline"
                  >
                   +91 85730 29392


                  </a>
                </div>
              
                <div>
                  <p className="text-slate-500">Hours</p>
                  <p className="mt-0.5 font-medium text-slate-900">
                    Mon–Sat, 9:00 AM – 6:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Address</p>
                  <p className="mt-0.5 font-medium text-slate-900">
                    Kanpur - Jhansi Hwy, Goramachhiya, Jhansi, Uttar Pradesh 284121
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href="https://www.google.com/maps/place/NATRAJ+JCB,+JHANSI/@25.4703878,78.6656275,17z/data=!3m1!4b1!4m6!3m5!1s0x39779d8554a5f9f1:0xfb29302e1d61b6fc!8m2!3d25.4703878!4d78.6682024!16s%2Fg%2F11gd_9tg9v?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50 transition"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
