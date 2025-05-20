

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

export default function ContactStrip() {
  const [state, handleSubmit] = useForm("your-form-id");
  const [localErrors, setLocalErrors] = useState({});

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const errors = {};
    if (!name) errors.name = "Please enter your name.";
    if (!email) errors.email = "Please enter your email.";
    if (!subject) errors.subject = "Please enter a subject.";
    if (!message) errors.message = "Please enter your message.";
    if (Object.keys(errors).length > 0) {
      setLocalErrors(errors);
      return;
    }
    setLocalErrors({});
    handleSubmit(event);
  }

  return (
    <section className="py-16 bg-[#D2C2AA] text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl relative"
      >
        <div className="bg-[#F9F4EC] p-10 md:p-16 rounded-3xl shadow-lg shadow-inner ring-1 ring-neutral-200 relative">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-wide mb-4">
            Have a bold idea? Let’s make it real.
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-accent-gold via-accent-gold/60 to-transparent" />
          <p className="mb-8 text-lg md:text-xl text-neutral-700">
            Reach out to discuss opportunities, collaborations, or research.
          </p>
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full rounded-lg px-4 py-3 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-gold hover:shadow-sm transition ring-opacity-0 focus:ring-opacity-100 duration-150 ${
                    localErrors.name ? "border border-red-600" : "border border-neutral-200"
                  }`}
                  onChange={() => {
                    if (localErrors.name) {
                      setLocalErrors({ ...localErrors, name: undefined });
                    }
                  }}
                />
                {localErrors.name && (
                  <p className="mt-2 text-sm text-red-600">{localErrors.name}</p>
                )}
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`w-full rounded-lg px-4 py-3 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-gold hover:shadow-sm transition ring-opacity-0 focus:ring-opacity-100 duration-150 ${
                    localErrors.email ? "border border-red-600" : "border border-neutral-200"
                  }`}
                  onChange={() => {
                    if (localErrors.email) {
                      setLocalErrors({ ...localErrors, email: undefined });
                    }
                  }}
                />
                {localErrors.email && (
                  <p className="mt-2 text-sm text-red-600">{localErrors.email}</p>
                )}
              </div>
              <div>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`w-full rounded-lg px-4 py-3 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-gold hover:shadow-sm transition ring-opacity-0 focus:ring-opacity-100 duration-150 ${
                    localErrors.subject ? "border border-red-600" : "border border-neutral-200"
                  }`}
                  onChange={() => {
                    if (localErrors.subject) {
                      setLocalErrors({ ...localErrors, subject: undefined });
                    }
                  }}
                />
                {localErrors.subject && (
                  <p className="mt-2 text-sm text-red-600">{localErrors.subject}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                className={`w-full rounded-lg px-4 py-3 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-gold hover:shadow-sm transition ring-opacity-0 focus:ring-opacity-100 duration-150 h-40 resize-none ${
                  localErrors.message ? "border border-red-600" : "border border-neutral-200"
                }`}
                onChange={() => {
                  if (localErrors.message) {
                    setLocalErrors({ ...localErrors, message: undefined });
                  }
                }}
              />
              {localErrors.message && (
                <p className="mt-2 text-sm text-red-600">{localErrors.message}</p>
              )}
            </div>
            <motion.button
              type="submit"
              disabled={state.submitting}
              className="mt-8 w-full md:w-auto inline-block bg-black text-white rounded-lg px-10 py-4 font-semibold shadow-lg transform transition hover:scale-105 hover:bg-white hover:text-black hover:border hover:border-black active:scale-95 active:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent-gold"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </motion.button>
            {state.succeeded && (
              <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Message Sent
                </h3>
                <p className="text-base text-neutral-600">
                  Thank you! I’ve received your message and will respond within one business day.
                </p>
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}