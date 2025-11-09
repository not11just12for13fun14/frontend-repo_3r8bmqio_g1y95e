import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Glow backdrops */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.18),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <div className="relative z-10 lg:col-span-5 xl:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now with a 3D writing canvas
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight">
            Write cinematic scripts with a premium AI pair‑writer.
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            ScriptForge elevates a thread of an idea into a production‑ready screenplay. Explore beats, refine dialogue, and direct the tone—beautifully, fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="h-11 px-6 rounded-full bg-white text-black hover:bg-white/90 font-medium shadow-[0_8px_30px_rgba(255,255,255,0.12)]">Start for free</button>
            <button className="h-11 px-6 rounded-full border border-white/20 hover:border-white/40 backdrop-blur bg-white/[0.02]">Watch demo</button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <span>Industry format</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Version branching</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Real‑time notes</span>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="relative lg:col-span-7 xl:col-span-7">
          <div className="relative h-[440px] sm:h-[540px] lg:h-[640px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02]">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft vignette so it feels more premium */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            {/* Subtle reflection highlight */}
            <div className="pointer-events-none absolute -top-10 left-1/3 w-1/2 h-40 bg-white/10 blur-3xl rounded-full" />
          </div>

          {/* Floating badges */}
          <div className="hidden md:block">
            <div className="pointer-events-none absolute -top-6 right-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-xs text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">Scene beats auto‑outlined</div>
            <div className="pointer-events-none absolute bottom-6 -left-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-xs text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">Tone‑aware dialogue</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
