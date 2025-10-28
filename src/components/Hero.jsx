import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ highlight = 'Software Testing' }) {
  return (
    <section className="relative h-[80vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 mb-5">
            <Rocket size={16} className="text-emerald-400" />
            <span className="text-xs tracking-wide text-emerald-300">Next-gen LinkedIn filter</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            See only what matters: <span className="text-emerald-400">{highlight}</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            FocusedFeed is a powerful browser extension that filters your LinkedIn feed by topics you choose. Hide noise, surface relevance, and stay in flow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-access" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-black font-medium px-5 py-3 hover:bg-emerald-400 transition shadow">
              Get early access
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-5 py-3 text-neutral-200 hover:border-neutral-500 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
