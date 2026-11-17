"use client";

import { useState } from "react";

// NOTE: no backend yet. Replace the body of onSubmit with a call to your
// email provider / API route when ready.
export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("both");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p
        role="status"
        className="rounded-2xl bg-white/10 p-6 text-lg font-semibold text-cream"
      >
        You&apos;re on the list. We&apos;ll write to {email} when early access
        opens.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-4">
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-full bg-cream px-6 py-4 text-ink placeholder:text-ink-soft/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
      />
      <fieldset className="flex flex-wrap justify-center gap-2 text-sm text-cream">
        <legend className="sr-only">What are you here for?</legend>
        {[
          ["both", "Both"],
          ["scan", "Skin scan"],
          ["makeover", "Makeovers"],
        ].map(([value, label]) => (
          <label
            key={value}
            className={`cursor-pointer rounded-full border px-4 py-1.5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-clay ${
              interest === value
                ? "border-clay bg-clay text-white"
                : "border-white/30 hover:border-white/60"
            }`}
          >
            <input
              type="radio"
              name="interest"
              value={value}
              checked={interest === value}
              onChange={() => setInterest(value)}
              className="sr-only"
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button
        type="submit"
        className="w-full rounded-full bg-clay px-6 py-4 font-bold text-white transition-colors hover:bg-[#ae604f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      >
        Join the early-access list
      </button>
    </form>
  );
}
