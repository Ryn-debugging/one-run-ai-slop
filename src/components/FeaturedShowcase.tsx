import React from 'react';
import { Images, Play, ExternalLink } from 'lucide-react';
import { type GameProject } from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface FeaturedShowcaseProps {
  projects: GameProject[];
  onSelectGame: (game: GameProject, initialTab?: 'screenshots' | 'dialogue') => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({
  projects,
  onSelectGame,
}) => {
  return (
    <section
      id="featured"
      className="py-16 md:py-24 border-b border-slate-800/80"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#F472B6] tracking-wide mb-2">
              01. FLAGSHIP PRODUCTIONS · DUAL-GENRE FOCUS
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Featured Showcase: Story-Rich VN &amp; 16-Bit RPG
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-[48ch] leading-relaxed">
            Two flagship worlds showcasing our signature duality: expressive
            cel-shaded narrative architecture in Ren&apos;Py and tactile
            turn-based pixel exploration in RPG Maker.
          </p>
        </div>

        {/* Split Section Highlighting Top Two Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((game) => {
            const isVN = game.featuredSlot === 'renpy-vn';
            return (
              <article
                key={game.id}
                className={`group rounded-2xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${
                  isVN ? 'vn-textbox-surface' : 'rpg-window-surface'
                }`}
              >
                <div>
                  {/* Game Poster with Smooth Hover Transformation */}
                  <button
                    type="button"
                    onClick={() => onSelectGame(game, 'screenshots')}
                    aria-label={`Inspect screenshots and synopsis for ${game.title}`}
                    className="relative w-full text-left aspect-video overflow-hidden bg-[#0E1224] cursor-pointer block"
                  >
                    <ResilientImage
                      src={game.bannerUrl}
                      alt={`${game.title} — ${game.subtitle}`}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
                      fallbackCategory={isVN ? 'vn' : 'rpg'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-[#0B0D19]/25 to-transparent" />

                    {/* Top Window Frame Kicker */}
                    <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between gap-2 text-[11px] sm:text-xs font-mono">
                      <span className="px-2.5 py-1 rounded bg-[#0B0D19]/85 text-slate-200 backdrop-blur-sm border border-slate-700/70 whitespace-nowrap shrink-0">
                        {isVN ? "SLOT 01 · REN'PY VN" : 'SLOT 02 · RPG MAKER'}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded bg-[#0B0D19]/85 backdrop-blur-sm font-semibold whitespace-nowrap shrink-0 ${
                          isVN ? 'text-[#F472B6]' : 'text-[#6EE7B7]'
                        }`}
                      >
                        {game.status}
                      </span>
                    </div>

                    {/* Bottom Poster Metadata Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                      <span className="whitespace-nowrap shrink-0">{game.engine}</span>
                      <span className="tabular-nums whitespace-nowrap shrink-0">
                        {game.screenshots.length} Screenshots ▸
                      </span>
                    </div>
                  </button>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7">
                    {/* Required Genre & Engine Badges / Tags rendered cleanly */}
                    <div
                      className="flex flex-wrap items-center gap-2 text-xs font-mono mb-3"
                      aria-label={`${game.title} attributes`}
                    >
                      {game.badges.map((badge, idx) => (
                        <React.Fragment key={badge}>
                          <span
                            className={
                              idx === 0
                                ? isVN
                                  ? 'text-[#F472B6] font-semibold'
                                  : 'text-[#6EE7B7] font-semibold'
                                : 'text-slate-300'
                            }
                          >
                            {badge}
                          </span>
                          {idx < game.badges.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-display text-2xl font-bold text-slate-50 tracking-tight mb-1">
                      {game.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-4">
                      {game.subtitle} · Released {game.releaseYear}
                    </p>

                    {/* Story / Gameplay Hook */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {game.shortHook}
                    </p>

                    {/* Key Metrics Row (Tabular Numerals) */}
                    <div className="grid grid-cols-3 gap-3 py-3.5 px-4 rounded-xl bg-[#0B0D19]/70 border border-slate-800/90 mb-6 font-mono">
                      <div>
                        <div className="text-[11px] text-slate-400">Length</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-100 tabular-nums mt-0.5">
                          {game.metrics.playtime}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">Scope</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-100 tabular-nums mt-0.5">
                          {game.metrics.wordCountOrMaps}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">Depth</div>
                        <div
                          className={`text-xs sm:text-sm font-semibold tabular-nums mt-0.5 ${
                            isVN ? 'text-[#F472B6]' : 'text-[#6EE7B7]'
                          }`}
                        >
                          {game.metrics.endingsOrClasses}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectGame(game, 'screenshots')}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isVN
                          ? 'bg-[#F472B6] text-[#0B0D19] hover:bg-[#F9A8D4]'
                          : 'bg-[#6EE7B7] text-[#0B0D19] hover:bg-[#A7F3D0]'
                      }`}
                    >
                      <Images className="w-3.5 h-3.5" />
                      <span>Play Demo / Learn More</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectGame(game, 'dialogue')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-slate-200 bg-[#171D38] hover:bg-[#222A4E] border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 text-[#6EE7B7]" />
                      <span>Interactive Scene</span>
                    </button>
                  </div>

                  <a
                    href={game.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>itch.io</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
