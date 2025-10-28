import { Download, ListChecks, Globe2, Settings } from 'lucide-react';

const steps = [
  {
    title: 'Install the Extension',
    desc: 'Add FocusedFeed to your browser from the Chrome Web Store (Firefox & Edge support coming soon).',
    Icon: Download,
  },
  {
    title: 'Choose Your Topics',
    desc: 'Select domains like Software Testing, DevOps, or Frontend. Add custom keywords anytime.',
    Icon: Settings,
  },
  {
    title: 'Browse LinkedIn',
    desc: 'Your feed updates in real time. Non-relevant posts are folded away or fully hidden.',
    Icon: Globe2,
  },
  {
    title: 'Fine-tune as You Go',
    desc: 'Use on-page controls to mute, allow, or prioritize content with one click.',
    Icon: ListChecks,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
        <p className="text-neutral-400 mt-2">Set your focus once. The extension handles the rest.</p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
        {steps.map(({ title, desc, Icon }, idx) => (
          <li key={title} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <Icon size={18} className="text-emerald-400" />
              </div>
              <span className="text-xs text-neutral-400">Step {idx + 1}</span>
            </div>
            <h3 className="mt-3 font-medium">{title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{desc}</p>
          </li>
        ))}
      </ol>

      <div id="get-access" className="mt-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">Get early access</h3>
          <p className="text-sm text-neutral-400">Be the first to try FocusedFeed and help shape the roadmap.</p>
        </div>
        <form className="w-full md:w-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full md:w-72 px-4 py-3 rounded-lg bg-black border border-neutral-800 text-sm focus:outline-none focus:border-emerald-500 placeholder-neutral-500"
          />
          <button className="px-5 py-3 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
            Notify me
          </button>
        </form>
      </div>
    </section>
  );
}
