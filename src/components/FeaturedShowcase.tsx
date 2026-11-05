import React, { useState } from 'react';
import { Images, Play, ExternalLink, Terminal, Shield } from 'lucide-react';
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
  const [vnAutoMode, setVnAutoMode] = useState(false);
  const [selectedPartyIdx, setSelectedPartyIdx] = useState(0);

  return (
    <section
      id="featured"
      className="py-16 md:py-24 border-b border-slate-800/80 astral-ambient-glow"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#F472B6] tracking-wide mb-2">
              01. FEATURED PROJECTS · REN&apos;PY &amp; RPG MAKER
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Primary Projects &amp; UI Systems
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-[48ch] leading-relaxed">
            Two main projects demonstrating custom Screen Language UI in
            Ren&apos;Py and turn-based party/combat scripting in RPG Maker MZ.
          </p>
        </div>

        {/* Split Section Highlighting Top Two Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((game) => {
            const isVN = game.featuredSlot === 'renpy-vn';
            const activePartyMember =
              game.rpgPartyStatus?.[selectedPartyIdx] ?? game.rpgPartyStatus?.[0];

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
                    aria-label={`Inspect screenshots and details for ${game.title}`}
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
                    {/* Genre & Engine Metadata */}
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
                      {game.subtitle} · {game.releaseYear}
                    </p>

                    {/* Concise Project Summary */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {game.shortHook}
                    </p>

                    {/* GENRE UI WIDGET: VN Textbox Preview vs RPG Party Status Window */}
                    {isVN && game.vnCustomUi ? (
                      <div className="rounded-xl bg-[#0B0D19]/90 border border-[#F472B6]/35 p-4 mb-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-800/90 text-xs font-mono">
                          <div className="flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-[#F472B6]" />
                            <span className="font-semibold text-[#F472B6]">
                              {game.vnCustomUi.speaker}
                            </span>
                          </div>
                          <span className="text-slate-400">
                            {game.vnCustomUi.speakerTitle}
                          </span>
                        </div>

                        <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed mb-3">
                          {game.vnCustomUi.quote}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/70 text-[11px] font-mono">
                          <span className="text-slate-400 truncate">
                            {vnAutoMode
                              ? '▸ auto_forward_time = True'
                              : `▸ ${game.vnCustomUi.unlockedRouteName}`}
                          </span>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setVnAutoMode((prev) => !prev)}
                              className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                                vnAutoMode
                                  ? 'bg-[#F472B6] text-[#0B0D19] border-[#F472B6] font-semibold'
                                  : 'bg-[#14182E] text-slate-300 border-slate-700 hover:border-[#F472B6]'
                              }`}
                            >
                              Auto
                            </button>
                            <button
                              type="button"
                              onClick={() => onSelectGame(game, 'dialogue')}
                              className="px-2 py-0.5 rounded bg-[#14182E] text-[#F472B6] border border-slate-700 hover:border-[#F472B6] transition-colors cursor-pointer"
                            >
                              Test Branch ▸
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {!isVN && game.rpgPartyStatus ? (
                      <div className="rounded-xl bg-[#090C18] border border-[#6EE7B7]/35 p-4 mb-5 crt-scanlines">
                        <div className="flex items-center justify-between text-xs font-mono pb-2.5 mb-2.5 border-b border-slate-800">
                          <span className="flex items-center gap-1.5 text-[#6EE7B7] font-semibold">
                            <Shield className="w-3.5 h-3.5" />
                            <span>WINDOW_PARTYSTATUS (RMMZ)</span>
                          </span>
                          <span className="text-slate-400 tabular-nums">
                            {activePartyMember
                              ? `Equip: ${activePartyMember.equippedRelic}`
                              : 'Party Ready'}
                          </span>
                        </div>

                        <div className="space-y-2 font-mono text-xs">
                          {game.rpgPartyStatus.map((member, idx) => {
                            const hpPercent = Math.round(
                              (member.hp / member.maxHp) * 100
                            );
                            const isSelected = idx === selectedPartyIdx;
                            return (
                              <button
                                key={member.name}
                                type="button"
                                onClick={() => setSelectedPartyIdx(idx)}
                                className={`w-full text-left px-2.5 py-1.5 rounded-lg border transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#151D38] border-[#6EE7B7]/70 text-white'
                                    : 'bg-[#0E1326]/80 border-slate-800/90 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="text-[#6EE7B7] font-semibold">
                                    {isSelected ? '▸' : ' '} {member.name}
                                  </span>
                                  <span className="text-[11px] text-slate-400 truncate">
                                    Lv.{member.level} {member.job}
                                  </span>
                                </div>

                                <div className="flex items-center gap-3 shrink-0 tabular-nums text-[11px]">
                                  <span className="text-[#6EE7B7]">
                                    HP {member.hp}/{member.maxHp} ({hpPercent}%)
                                  </span>
                                  <span className="text-[#F472B6]">
                                    MP {member.mp}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}

                    {/* Realistic Project Scope Metrics */}
                    <div className="grid grid-cols-3 gap-3 py-3 px-4 rounded-xl bg-[#0B0D19]/70 border border-slate-800/90 font-mono">
                      <div>
                        <div className="text-[11px] text-slate-400">Playtime</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-100 tabular-nums mt-0.5">
                          {game.metrics.playtime}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">Content</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-100 tabular-nums mt-0.5">
                          {game.metrics.wordCountOrMaps}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">Structure</div>
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
                      <span>Scene Preview</span>
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
