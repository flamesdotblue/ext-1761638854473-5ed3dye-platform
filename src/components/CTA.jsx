import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Please enter a valid email.');
      return;
    }
    setStatus('Added to waitlist. We\'ll notify you when the extension is ready.');
    setEmail('');
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/[0.03] to-white/[0.02] p-8 md:p-10">
        <h2 className="text-2xl font-semibold">Be first to try FilterFlow</h2>
        <p className="mt-1 max-w-2xl text-white/70">
          Join the waitlist for the beta Chrome extension that keeps your LinkedIn focused on what you care about.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
          >
            Join waitlist
          </button>
        </form>
        {status && <p className="mt-3 text-sm text-emerald-300">{status}</p>}
      </div>
    </section>
  );
}
