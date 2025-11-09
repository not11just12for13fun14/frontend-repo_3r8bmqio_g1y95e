import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-assisted screenplay crafting
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Forge scripts from a spark to a finished screenplay.
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            ScriptForge turns raw ideas into polished scripts. Start with a thread, collaborate with AI, and shape scenes, beats, and dialogue with effortless precision.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="h-11 px-6 rounded-full bg-white text-black hover:bg-white/90 font-medium">Try ScriptForge</button>
            <button className="h-11 px-6 rounded-full border border-white/20 hover:border-white/40">Watch demo</button>
          </div>
          <div className="mt-6 text-xs text-white/50">No credit card required</div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
  );
};

export default Hero;
