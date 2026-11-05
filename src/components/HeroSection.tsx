import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Edit3, Check, RotateCcw } from 'lucide-react';
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
      className="relative pt-10 pb-14 md:pt-14 md:pb-20 border-b border-slate-800/80 astral-ambient-glow"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Developer Identity, Grounded Summary & Store Links */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              {/* Clean Technical Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                <span className="text-[#F472B6]">REN&apos;PY 8 (PYTHON)</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#6EE7B7]">RPG MAKER MZ (JS)</span>
                <span aria-hidden="true">·</span>
                <span>UI &amp; SYSTEMS DESIGN</span>
              </div>

              {/* Studio / Developer Title + Easy Customizer */}
              <div className="mb-5">
                <h1
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-50 leading-[1.12]"
                  style={{ textWrap: 'balance' }}
                >
                  {studioName}
                </h1>

                {!isEditingName ? (
                  <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => {
                        setDraftName(studioName);
                        setIsEditingName(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#6EE7B7] transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Studio / Developer Name</span>
                    </button>
                    <span aria-hidden="true" className="text-slate-700">
                      |
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onChangeStudioName(
                          studioName === STUDIO_INFO.placeholderTemplate
                            ? STUDIO_INFO.defaultTitle
                            : STUDIO_INFO.placeholderTemplate
                        )
                      }
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-[#F472B6] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>
                        {studioName === STUDIO_INFO.placeholderTemplate
                          ? 'Use Sample Handle'
                          : 'Use [Your Name / Studio] Template'}
                      </span>
                    </button>
                  </div>
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
                      placeholder="[Your Name / Studio] Portfolio"
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

              {/* Concise, Practical Developer Bio */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-[60ch] mb-4">
                {STUDIO_INFO.tagline}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed max-w-[60ch] mb-8">
                I handle narrative scripting, custom Ren&apos;Py Screen Language
                layouts, RPG Maker JavaScript plugins, and 2D asset integration.
                Browse shipped releases, jam entries, and reusable code modules
                below.
              </p>
            </div>

            {/* Storefront & Section Links */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={STUDIO_INFO.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0D19] bg-[#6EE7B7] hover:bg-[#A7F3D0] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>itch.io Page</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={STUDIO_INFO.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-100 bg-[#141930] hover:bg-[#1E2544] border border-[#F472B6]/40 hover:border-[#F472B6] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Steam Developer Page</span>
                  <ExternalLink className="w-4 h-4 text-[#F472B6]" />
                </a>

                <a
                  href="#featured"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Featured Projects</span>
                  <ChevronRight className="w-4 h-4 text-[#6EE7B7]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dialogue Box & Workflow Preview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-800 bg-[#121629] flex flex-col justify-end min-h-[410px]">
              {/* Artwork Layer */}
              <div className="absolute inset-0">
                <ResilientImage
                  src={HERO_IMAGE_URL}
                  alt="Visual novel character illustration alongside a 16-bit pixel sprite"
                  className="w-full h-full object-cover object-center"
                  fallbackCategory="vn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-[#0B0D19]/70 to-transparent" />
              </div>

              {/* Top Status Bar */}
              <div className="relative z-10 mt-4 mx-4 mb-auto flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#0B0D19]/90 backdrop-blur-md border border-slate-800 text-xs font-mono text-slate-300">
                <span>DIALOGUE ENGINE PREVIEW</span>
                <span className="text-[#6EE7B7] tabular-nums">
                  {lastStatToast ? lastStatToast : 'state: ready'}
                </span>
              </div>

              {/* Interactive VN / RPG Textbox */}
              <div className="relative z-10 m-4 p-5 rounded-xl vn-textbox-surface backdrop-blur-md">
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
                          ? 'archive-protocol'
                          : 'veridia-shard'
                      )
                    }
                    className="text-xs font-mono text-slate-300 hover:text-[#6EE7B7] underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Inspect Project ▸
                  </button>
                </div>

                <p className="text-sm text-slate-100 leading-relaxed mb-4">
                  {activeNode.text}
                </p>

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

        {/* Grounded Technical Focus Strip (Replaces Exaggerated Vanity Stats) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="font-mono text-sm font-semibold text-[#F472B6]">
              Ren&apos;Py 8.2 &amp; Python
            </div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Screen Language UI, ATL transforms, LayeredImages &amp; custom Displayables
            </div>
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-[#6EE7B7]">
              RPG Maker MZ &amp; MV
            </div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              ES6 JavaScript plugins, Common Event state machines &amp; turn-based combat
            </div>
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-slate-100">
              Narrative Scripting
            </div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Branching route architecture, persistent clue flags &amp; dialogue pacing
            </div>
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-slate-100">
              2D Asset Pipeline
            </div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              48x48 indexed pixel tilesets, sprite animations &amp; WebP portrait layers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
