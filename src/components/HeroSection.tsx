import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Edit3, Check } from 'lucide-react';
import {
  STUDIO_INFO,
  HERO_IMAGE_URL,
  HERO_DIALOGUE_NODES,
} from '../data/portfolioData';
import { resolveNextDialogueNode } from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  studioName: string;
  onChangeStudioName: (name: string) => void;
  onInspectFeaturedGame: (gameId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  studioName,
  onChangeStudioName,
  onInspectFeaturedGame,
}) => {
  const [currentDialogueId, setCurrentDialogueId] = useState<string>(
    HERO_DIALOGUE_NODES[0].id
  );
  const [lastStatToast, setLastStatToast] = useState<string | null>(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [draftName, setDraftName] = useState(studioName);

  const activeNode =
    HERO_DIALOGUE_NODES.find((n) => n.id === currentDialogueId) ??
    HERO_DIALOGUE_NODES[0];

  const handleChoiceClick = (nextId: string, statDelta?: string) => {
    const next = resolveNextDialogueNode(
      HERO_DIALOGUE_NODES,
      currentDialogueId,
      nextId
    );
    setCurrentDialogueId(next.id);
    if (statDelta) {
      setLastStatToast(statDelta);
    }
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = draftName.trim() || STUDIO_INFO.defaultTitle;
    onChangeStudioName(cleaned);
    setIsEditingName(false);
  };

  return (
    <section
      id="top"
      className="relative pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-800/80"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Store CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Quiet 1-line text kicker with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4 tracking-wide">
                <span className="text-[#F472B6]">REN&apos;PY VISUAL NOVELS</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#6EE7B7]">RPG MAKER RETRO WORLDS</span>
                <span aria-hidden="true">·</span>
                <span>INDIE GAME STUDIO</span>
              </div>

              {/* Main Headline with optional inline customizer */}
              <div className="mb-5">
                <h1
                  className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-50 leading-[1.12]"
                  style={{ textWrap: 'balance' }}
                >
                  {studioName}
                </h1>

                {/* Subtle interactive customizer so user can test their own studio name */}
                {!isEditingName ? (
                  <button
                    type="button"
                    onClick={() => {
                      setDraftName(studioName);
                      setIsEditingName(true);
                    }}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#6EE7B7] transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Customize Studio Title</span>
                  </button>
                ) : (
                  <form
                    onSubmit={handleSaveName}
                    className="mt-3 flex items-center gap-2 max-w-md"
                  >
                    <label htmlFor="studio-title-input" className="sr-only">
                      Studio or Developer Title
                    </label>
                    <input
                      id="studio-title-input"
                      type="text"
                      value={draftName}
                      onChange={(e) => setDraftName(e.target.value)}
                      placeholder="[Your Name/Studio] Portfolio"
                      className="flex-1 bg-[#13172B] border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-100 focus:outline-none focus:border-[#6EE7B7]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-[#6EE7B7] text-[#0B0D19] rounded-lg hover:bg-[#A7F3D0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Apply</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Tagline about crafting immersive stories and worlds */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[62ch] mb-6">
                {STUDIO_INFO.tagline}
              </p>

              {/* Secondary narrative/technical context */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-[60ch] mb-8">
                From multi-route mystery scripts powered by custom Python screen
                shaders to 16-bit turn-based dungeons running on bespoke
                JavaScript &amp; Ruby plugins—explore playable demos, technical
                architectures, and complete releases below.
              </p>
            </div>

            {/* Interactive Store & Showcase Buttons */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={STUDIO_INFO.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0D19] bg-[#6EE7B7] hover:bg-[#A7F3D0] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-sm"
                >
                  <span>Play on itch.io</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={STUDIO_INFO.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-[#141930] hover:bg-[#1E2544] border border-[#F472B6]/40 hover:border-[#F472B6] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0"
                >
                  <span>Steam Developer Page</span>
                  <ExternalLink className="w-4 h-4 text-[#F472B6]" />
                </a>

                <a
                  href="#featured"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Featured Games</span>
                  <ChevronRight className="w-4 h-4 text-[#6EE7B7]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Visual + Interactive Visual Novel / Retro RPG Textbox */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-800 bg-[#121629] flex flex-col justify-end min-h-[420px]">
              {/* Artwork Layer */}
              <div className="absolute inset-0">
                <ResilientImage
                  src={HERO_IMAGE_URL}
                  alt="Twilight observatory overlooking a lantern town with an anime archivist and a pixel-art sprite familiar"
                  className="w-full h-full object-cover object-center"
                  fallbackCategory="vn"
                />
                {/* Measured Scrim for guaranteed 4.5:1 text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-[#0B0D19]/65 to-transparent" />
              </div>

              {/* Top Window Header Bar (Clean Retro Menu Header) */}
              <div className="relative z-10 mt-4 mx-4 mb-auto flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#0B0D19]/85 backdrop-blur-md border border-slate-800/90 text-xs font-mono text-slate-300">
                <span>SCENE 01 · STARLIGHT OBSERVATORY</span>
                <span className="text-[#6EE7B7] tabular-nums">
                  {lastStatToast ? `LOG: ${lastStatToast}` : 'INTERACTIVE DIALOGUE'}
                </span>
              </div>

              {/* Authentic Visual Novel / RPG Dialogue Box at Bottom of Frame */}
              <div className="relative z-10 m-4 p-5 rounded-xl vn-textbox-surface backdrop-blur-md">
                {/* Speaker Nameplate */}
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span
                      className={`font-semibold text-sm ${
                        activeNode.accentColor === 'pink'
                          ? 'text-[#F472B6]'
                          : 'text-[#6EE7B7]'
                      }`}
                    >
                      {activeNode.speaker}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">
                      /
                    </span>
                    <span className="text-slate-400">
                      {activeNode.speakerRole}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onInspectFeaturedGame(
                        activeNode.accentColor === 'pink'
                          ? 'astral-conservatory'
                          : 'echoes-of-veridia'
                      )
                    }
                    className="text-xs font-mono text-slate-300 hover:text-[#6EE7B7] underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Open Full Game Specs
                  </button>
                </div>

                {/* Dialogue Line */}
                <p className="text-sm sm:text-[15px] text-slate-100 leading-relaxed mb-4">
                  {activeNode.text}
                </p>

                {/* Interactive Branching Choices */}
                {activeNode.choices && activeNode.choices.length > 0 && (
                  <div
                    className="grid grid-cols-1 gap-2"
                    role="group"
                    aria-label="Dialogue choices"
                  >
                    {activeNode.choices.map((choice) => (
                      <button
                        key={choice.label}
                        type="button"
                        onClick={() =>
                          handleChoiceClick(
                            choice.nextNodeId,
                            choice.affectionOrStatDelta
                          )
                        }
                        className="text-left px-3.5 py-2 rounded-lg bg-[#171C36]/90 hover:bg-[#202749] border border-slate-700/80 hover:border-[#6EE7B7]/70 transition-colors flex items-center justify-between gap-3 cursor-pointer group"
                      >
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                          ▸ {choice.label}
                        </span>
                        {choice.affectionOrStatDelta && (
                          <span className="text-[11px] font-mono text-[#6EE7B7] whitespace-nowrap shrink-0">
                            {choice.affectionOrStatDelta}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Studio Proof Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-semibold text-slate-100 tabular-nums">
              6 Titles
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Shipped across Steam &amp; itch.io (2021–2026)
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#F472B6] tabular-nums">
              350,000+ Words
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Branching Ren&apos;Py Visual Novel scripts written
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#6EE7B7] tabular-nums">
              140+ Pixel Maps
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Hand-crafted RPG Maker dungeons, towns &amp; shrines
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-semibold text-slate-100 tabular-nums">
              18 Open Plugins
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Python Displayables &amp; RPG Maker MZ JS scripts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
