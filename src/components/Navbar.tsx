import React from 'react';

interface NavbarProps {
  studioTitle: string;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ studioTitle, onOpenContactModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0D19]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-slate-100 hover:text-[#6EE7B7] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6EE7B7]"
        >
          {studioTitle}
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          <a
            href="#featured"
            className="hover:text-[#F472B6] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Featured
          </a>
          <a
            href="#library"
            className="hover:text-[#6EE7B7] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Game Library
          </a>
          <a
            href="#skills"
            className="hover:text-[#F472B6] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Skills &amp; Tools
          </a>
          <a
            href="#contact"
            className="hover:text-[#6EE7B7] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Socials
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="px-4 py-2 text-xs font-semibold text-[#0B0D19] bg-[#6EE7B7] hover:bg-[#A7F3D0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6EE7B7]"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};
