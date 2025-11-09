import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 text-sm text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} ScriptForge. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
