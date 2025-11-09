import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Start exploring your ideas',
    features: [
      'Unlimited threads',
      'Up to 3 script projects',
      'AI assists with limits',
      'Export to PDF',
    ],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    cycle: '/mo',
    tagline: 'For serious screenwriters',
    features: [
      'Unlimited projects',
      'Advanced AI pair-writer',
      'Version branching & history',
      'Final Draft & Fountain export',
      'Collaboration notes',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$49',
    cycle: '/mo',
    tagline: 'For teams and productions',
    features: [
      'Everything in Pro',
      'Team workspaces',
      'Scene review workflows',
      'Role-based permissions',
      'Priority support',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

const Plan = ({ plan }) => (
  <div className={`relative rounded-2xl p-6 border ${plan.highlighted ? 'border-white/20 bg-white/10 shadow-[0_8px_40px_rgba(255,255,255,0.08)]' : 'border-white/10 bg-white/5'}`}>
    {plan.highlighted && (
      <div className="absolute -top-3 left-6 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide bg-white text-black">Most popular</div>
    )}
    <div className="flex items-baseline gap-2">
      <h3 className="text-lg font-semibold">{plan.name}</h3>
    </div>
    <div className="mt-2 flex items-end gap-1">
      <div className="text-3xl font-semibold">{plan.price}</div>
      {plan.cycle && <div className="text-sm text-white/60">{plan.cycle}</div>}
    </div>
    <p className="mt-2 text-sm text-white/70">{plan.tagline}</p>
    <ul className="mt-6 space-y-2">
      {plan.features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm">
          <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            <Check className="w-3 h-3" />
          </span>
          <span className="text-white/80">{f}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-6 w-full h-11 rounded-full text-sm font-medium ${plan.highlighted ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 hover:border-white/40'}`}>{plan.cta}</button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-white/70">Choose a plan that scales with your storytelling.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Plan key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/50">Prices in USD. Cancel anytime.</p>
      </div>
    </section>
  );
};

export default Pricing;
