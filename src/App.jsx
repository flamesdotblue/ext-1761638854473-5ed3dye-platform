import { useState, useMemo } from 'react';
import Hero from './components/Hero';
import CategorySelector from './components/CategorySelector';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

export default function App() {
  const [selectedTopics, setSelectedTopics] = useState(["Software Testing"]);

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const focusLine = useMemo(() => {
    if (!selectedTopics.length) return 'Everything';
    if (selectedTopics.length === 1) return selectedTopics[0];
    if (selectedTopics.length === 2) return `${selectedTopics[0]} and ${selectedTopics[1]}`;
    const firstTwo = selectedTopics.slice(0, 2).join(', ');
    return `${firstTwo} +${selectedTopics.length - 2} more`;
  }, [selectedTopics]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero highlight={focusLine} />

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 -mt-16">
          <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur">
            <CategorySelector selected={selectedTopics} onToggle={toggleTopic} />
            <div className="mt-4 text-sm text-neutral-300">
              <p>
                Live demo preview: Your LinkedIn feed will prioritize <span className="text-emerald-400 font-medium">{focusLine}</span> and hide non-matching posts.
              </p>
            </div>
          </div>
        </section>

        <Features />
        <HowItWorks />

        <footer className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-16 text-neutral-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 pt-8">
            <p className="text-sm">© {new Date().getFullYear()} FocusedFeed. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
