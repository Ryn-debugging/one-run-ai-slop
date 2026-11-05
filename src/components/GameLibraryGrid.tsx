import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, ArrowUpRight } from 'lucide-react';
import {
  filterGames,
  getCategoryCounts,
  type GameCategory,
  type GameProject,
} from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface GameLibraryGridProps {
  games: GameProject[];
  onSelectGame: (game: GameProject, initialTab?: 'screenshots' | 'dialogue') => void;
}

const CATEGORIES: GameCategory[] = [
  'All',
  'Visual Novels',
  'RPGs',
  'Prototypes',
];

export const GameLibraryGrid: React.FC<GameLibraryGridProps> = ({
  games,
  onSelectGame,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryCounts = useMemo(() => getCategoryCounts(games), [games]);
  const filteredGames = useMemo(
    () => filterGames(games, selectedCategory, searchQuery),
    [games, selectedCategory, searchQuery]
  );

  return (
    <section
      id="library"
      className="py-16 md:py-24 border-b border-slate-800/80"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-[#6EE7B7] tracking-wide mb-2">
              02. COMPLETE CATALOG · RELEASES, JAMS &amp; ENGINE PROTOTYPES
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Game Library &amp; Interactive Prototypes
            </h2>
          </div>

          <p className="text-sm text-slate-400 max-w-[46ch] leading-relaxed">
            Filter by genre or engine to inspect screenshots, key features, and
            playable scene previews from commercial releases and game jam winners.
          </p>
        </div>

        {/* Genre Filter Tabs + Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Segmented Genre Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter games by genre"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#12162A] border border-slate-800 rounded-xl"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#6EE7B7] text-[#0B0D19] shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-[#191F3A]'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`font-mono text-[11px] tabular-nums ${
                      isActive ? 'text-[#0B0D19]/80' : 'text-slate-400'
                    }`}
                  >
                    ({categoryCounts[category]})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:w-72">
            <label htmlFor="library-search" className="sr-only">
              Search games by title, genre, or engine
            </label>
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="library-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, Ren'Py, RPG Maker..."
              className="w-full pl-9 pr-4 py-2 text-xs text-slate-100 bg-[#12162A] border border-slate-800 rounded-xl placeholder:text-slate-500 focus:outline-none focus:border-[#6EE7B7]"
            />
          </div>
        </div>

        {/* Active Filter Summary */}
        <div
          className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6"
          aria-live="polite"
        >
          <span>
            Showing <strong className="text-slate-200 tabular-nums">{filteredGames.length}</strong>{' '}
            {filteredGames.length === 1 ? 'project' : 'projects'} in{' '}
            <strong className="text-[#6EE7B7]">{selectedCategory}</strong>
          </span>
          {(selectedCategory !== 'All' || searchQuery.trim() !== '') && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#F472B6] hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Game Cards Grid */}
        {filteredGames.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-[#111528] p-12 text-center">
            <p className="text-base font-semibold text-slate-200 mb-2">
              No projects match &ldquo;{searchQuery}&rdquo; in {selectedCategory}
            </p>
            <p className="text-xs text-slate-400 mb-6">
              Try clearing your search query or switching to the All category tab.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#6EE7B7] text-[#0B0D19] rounded-lg hover:bg-[#A7F3D0] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          </div>
        ) : (
          <div
            data-testid="game-library-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"
          >
            {filteredGames.map((game) => {
              const isVN = game.category === 'Visual Novels';
              return (
                <article
                  key={game.id}
                  className="group rounded-2xl bg-[#12162A] border border-slate-800/90 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    {/* Game Banner with Smooth Hover Zoom */}
                    <button
                      type="button"
                      onClick={() => onSelectGame(game, 'screenshots')}
                      aria-label={`Open details and screenshots for ${game.title}`}
                      className="relative w-full text-left aspect-4/3 overflow-hidden bg-[#0D1021] cursor-pointer block"
                    >
                      <ResilientImage
                        src={game.bannerUrl}
                        alt={`${game.title} banner`}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
                        fallbackCategory={isVN ? 'vn' : 'rpg'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12162A] via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                        <span className="px-2.5 py-1 rounded bg-[#0B0D19]/85 text-slate-200 backdrop-blur-sm border border-slate-700/70 whitespace-nowrap shrink-0">
                          {game.engine}
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded bg-[#0B0D19]/85 backdrop-blur-sm font-semibold whitespace-nowrap shrink-0 ${
                            isVN ? 'text-[#F472B6]' : 'text-[#6EE7B7]'
                          }`}
                        >
                          {game.releaseYear}
                        </span>
                      </div>
                    </button>

                    {/* Card Text Body */}
                    <div className="p-5 sm:p-6">
                      {/* Clean unboxed genre metadata with typographic separators */}
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                        <span
                          className={
                            isVN
                              ? 'text-[#F472B6] font-semibold'
                              : 'text-[#6EE7B7] font-semibold'
                          }
                        >
                          {game.genreLabel}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{game.status}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-50 tracking-tight mb-2 group-hover:text-[#6EE7B7] transition-colors">
                        {game.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {game.shortHook}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-800/70 flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {game.metrics.playtime} · {game.metrics.endingsOrClasses}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectGame(game, 'screenshots')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0B0D19] bg-[#6EE7B7] hover:bg-[#A7F3D0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Play Demo / Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
