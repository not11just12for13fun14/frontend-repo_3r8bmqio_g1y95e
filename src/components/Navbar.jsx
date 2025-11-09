import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-white" />
          <span className="font-semibold tracking-tight">ScriptForge</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-full border border-white/20 hover:border-white/40 text-sm">Sign in</button>
          <button className="inline-flex h-9 px-4 rounded-full bg-white text-black hover:bg-white/90 text-sm font-medium">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
