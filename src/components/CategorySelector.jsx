import { useMemo } from 'react';
import { Filter, Check } from 'lucide-react';

const CATEGORIES = [
  'Software Testing',
  'QA Automation',
  'DevOps',
  'Frontend',
  'Backend',
  'Data Science',
  'Product Management',
  'UI/UX',
  'Cloud',
  'Security',
  'Mobile',
];

export default function CategorySelector({ selected = [], onToggle = () => {} }) {
  const selectedSet = useMemo(() => new Set(selected), [selected]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30">
          <Filter className="text-emerald-400" size={16} />
        </div>
        <div>
          <h3 className="font-semibold">Choose your focus</h3>
          <p className="text-sm text-neutral-400">We’ll prioritize posts that match your topics and hide the rest.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const active = selectedSet.has(cat);
          return (
            <button
              key={cat}
              onClick={() => onToggle(cat)}
              className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm transition border ${
                active
                  ? 'bg-emerald-500 text-black border-emerald-400 shadow'
                  : 'bg-neutral-900/60 text-neutral-200 border-neutral-700 hover:border-neutral-500'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                {active && <Check size={16} className="opacity-90" />} {cat}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
          <p className="text-sm text-neutral-300">
            Keyword match on post text, author headline, and article preview.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
          <p className="text-sm text-neutral-300">
            One-click hide/mute for posts, authors, and hashtags.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
          <p className="text-sm text-neutral-300">
            All filtering happens locally in your browser. No data leaves your device.
          </p>
        </div>
      </div>
    </div>
  );
}
