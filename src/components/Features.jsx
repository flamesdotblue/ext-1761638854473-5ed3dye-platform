import { ShieldCheck, EyeOff, Sparkles, SlidersHorizontal } from 'lucide-react';

const features = [
  {
    title: 'Auto-filter your feed',
    desc: 'Real-time content filtering on LinkedIn based on your selected topics and keywords.',
    Icon: Sparkles,
  },
  {
    title: 'Hide the noise',
    desc: 'Collapse or remove posts that don’t match your focus. Keep your attention where it matters.',
    Icon: EyeOff,
  },
  {
    title: 'Fine-grained control',
    desc: 'Tune sensitivity, add allow/deny lists, and quickly mute specific authors or hashtags.',
    Icon: SlidersHorizontal,
  },
  {
    title: 'Private by design',
    desc: 'Filtering runs locally. We do not track or store your browsing history.',
    Icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Powerful features for focused browsing</h2>
        <p className="text-neutral-400 mt-2">
          Designed for software professionals who value relevance and flow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ title, desc, Icon }) => (
          <div key={title} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 transition">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-3">
              <Icon size={18} className="text-emerald-400" />
            </div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
