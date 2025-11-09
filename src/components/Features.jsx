import React from 'react';
import { Wand2, FileText, SplitSquareVertical, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition p-6">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/10">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/70">{description}</p>
  </div>
);

const Features = () => {
  const items = [
    {
      icon: Wand2,
      title: 'Idea to Outline',
      description: 'Transform a one-line premise into a structured beat sheet with character arcs and world notes.'
    },
    {
      icon: FileText,
      title: 'Draft to Dialogue',
      description: 'Refine scenes with tone-aware suggestions and format-correct output for industry standards.'
    },
    {
      icon: SplitSquareVertical,
      title: 'Branch & Explore',
      description: 'Fork scenes to experiment with alternate takes without losing your main thread.'
    },
    {
      icon: Sparkles,
      title: 'AI Pair-Writer',
      description: 'A focused AI that understands screenplay structure, character voice, and pacing.'
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Write smarter, ship faster.</h2>
          <p className="mt-2 text-white/70">Everything you need to take a thread of an idea to a production-ready script.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
