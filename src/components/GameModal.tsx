import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Images,
  MessageSquareCode,
  Sparkles,
} from 'lucide-react';
import {
  getNextSlideIndex,
  resolveNextDialogueNode,
  type GameProject,
} from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface GameModalProps {
  game: GameProject | null;
  initialTab?: 'screenshots' | 'dialogue';
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({
  game,
  initialTab = 'screenshots',
  onClose,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'screenshots' | 'dialogue'>(
    initialTab
  );
  const [currentDialogueId, setCurrentDialogueId] = useState<string>('');
  const [dialogueFeedback, setDialogueFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (game) {
      setActiveSlideIndex(0);
      setActiveTab(initialTab);
      setCurrentDialogueId(game.dialoguePreview[0]?.id ?? '');
      setDialogueFeedback(null);
    }
  }, [game, initialTab]);

  useEffect(() => {
    if (!game) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && activeTab === 'screenshots') {
        setActiveSlideIndex((prev) =>
          getNextSlideIndex(prev, game.screenshots.length, 'next')
        );
      } else if (e.key === 'ArrowLeft' && activeTab === 'screenshots') {
        setActiveSlideIndex((prev) =>
          getNextSlideIndex(prev, game.screenshots.length, 'prev')
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [game, activeTab, onClose]);

  if (!game) return null;

  const isVN = game.category === 'Visual Novels';
  const currentScreenshot =
    game.screenshots[activeSlideIndex] ?? game.screenshots[0];
  const currentDialogueNode =
    game.dialoguePreview.find((n) => n.id === currentDialogueId) ??
    game.dialoguePreview[0];

  const handleSlideStep = (direction: 'next' | 'prev') => {
    setActiveSlideIndex((prev) =>
      getNextSlideIndex(prev, game.screenshots.length, direction)
    );
  };

  const handleDialogueStep = (nextId?: string, statDelta?: string) => {
    const nextNode = resolveNextDialogueNode(
      game.dialoguePreview,
      currentDialogueNode.id,
      nextId
    );
    setCurrentDialogueId(nextNode.id);
    if (statDelta) {
      setDialogueFeedback(statDelta);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-game-title"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl rounded-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col ${
          isVN ? 'vn-textbox-surface' : 'rpg-window-surface'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header Bar */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-[#0B0D19]/95 border-b border-slate-800">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span
                className={
                  isVN ? 'text-[#F472B6] font-semibold' : 'text-[#6EE7B7] font-semibold'
                }
              >
                {game.engine}
              </span>
              <span aria-hidden="true">·</span>
              <span>{game.genreLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{game.status}</span>
            </div>
            <h2
              id="modal-game-title"
              className="font-display text-xl sm:text-2xl font-bold text-slate-50 truncate mt-0.5"
            >
              {game.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#161B33] hover:bg-[#232B4E] border border-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 space-y-5">
          {/* Interactive Mode Switcher: Screenshot Gallery vs Live Scene Demo */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Modal view mode"
              className="inline-flex items-center gap-1.5 p-1 bg-[#0B0D19] border border-slate-800 rounded-xl"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'screenshots'}
                onClick={() => setActiveTab('screenshots')}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'screenshots'
                    ? 'bg-[#6EE7B7] text-[#0B0D19]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Images className="w-3.5 h-3.5" />
                <span>Screenshot Gallery ({game.screenshots.length})</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'dialogue'}
                onClick={() => setActiveTab('dialogue')}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'dialogue'
                    ? 'bg-[#F472B6] text-[#0B0D19]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>Play Interactive Scene Demo</span>
              </button>
            </div>

            <div className="text-xs font-mono text-slate-400 tabular-nums">
              {game.metrics.playtime} · {game.metrics.wordCountOrMaps} ·{' '}
              {game.metrics.endingsOrClasses}
            </div>
          </div>

          {/* 12-Column Desktop Split: Left 7 Cols Media/Interactive, Right 5 Cols Synopsis & Key Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              {/* VIEW 1: SCREENSHOT GALLERY SLIDER */}
              {activeTab === 'screenshots' && currentScreenshot && (
                <div className="space-y-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-[#090B14] border border-slate-800">
                    <ResilientImage
                      src={currentScreenshot.imageUrl}
                      alt={currentScreenshot.title}
                      className="w-full h-full object-cover"
                      fallbackCategory={isVN ? 'vn' : 'rpg'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-transparent to-black/30" />

                    {/* Slide Counter Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B0D19]/85 backdrop-blur-sm border border-slate-700/80 text-[11px] font-mono text-slate-200 tabular-nums">
                      SCREENSHOT {activeSlideIndex + 1} / {game.screenshots.length}{' '}
                      · {currentScreenshot.title}
                    </div>

                    {/* Prev / Next Slider Controls */}
                    {game.screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleSlideStep('prev')}
                          aria-label="Previous screenshot"
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0D19]/85 hover:bg-[#181E38] text-slate-100 border border-slate-700 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSlideStep('next')}
                          aria-label="Next screenshot"
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0D19]/85 hover:bg-[#181E38] text-slate-100 border border-slate-700 transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Authentic In-Game HUD / VN Caption Bar */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0B0D19]/90 backdrop-blur-md border border-slate-800">
                      <div className="text-[11px] font-mono text-[#6EE7B7] mb-0.5 truncate">
                        {currentScreenshot.hudOverlayText}
                      </div>
                      <p className="text-xs text-slate-200 line-clamp-2">
                        {currentScreenshot.caption}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Strip Selector */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {game.screenshots.map((shot, idx) => (
                      <button
                        key={shot.id}
                        type="button"
                        onClick={() => setActiveSlideIndex(idx)}
                        aria-label={`View screenshot ${idx + 1}: ${shot.title}`}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          idx === activeSlideIndex
                            ? 'bg-[#19203E] border-[#6EE7B7] text-white'
                            : 'bg-[#0E1224] border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="tabular-nums">0{idx + 1}.</span>
                        <span>{shot.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 2: INTERACTIVE DIALOGUE / COMBAT SCENE PREVIEW */}
              {activeTab === 'dialogue' && currentDialogueNode && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0A0D1A] p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-[#F472B6]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>LIVE SCRIPT SIMULATION ({game.engine})</span>
                    </span>
                    <span className="text-[#6EE7B7]">
                      {dialogueFeedback
                        ? `STATE: ${dialogueFeedback}`
                        : 'SELECT A CHOICE'}
                    </span>
                  </div>

                  <div className="mb-2.5 flex items-center gap-2 text-xs font-mono">
                    <span className="text-sm font-bold text-slate-100">
                      {currentDialogueNode.speaker}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">
                      ·
                    </span>
                    <span className="text-slate-400">
                      {currentDialogueNode.speakerRole}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-100 leading-relaxed mb-5 bg-[#12172D] p-4 rounded-xl border border-slate-800">
                    {currentDialogueNode.text}
                  </p>

                  {currentDialogueNode.choices &&
                  currentDialogueNode.choices.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2.5">
                      {currentDialogueNode.choices.map((choice) => (
                        <button
                          key={choice.label}
                          type="button"
                          onClick={() =>
                            handleDialogueStep(
                              choice.nextNodeId,
                              choice.affectionOrStatDelta
                            )
                          }
                          className="text-left px-4 py-2.5 rounded-xl bg-[#161C36] hover:bg-[#1F274B] border border-slate-700 hover:border-[#6EE7B7] transition-colors flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-medium text-slate-100">
                            ▸ {choice.label}
                          </span>
                          {choice.affectionOrStatDelta && (
                            <span className="text-xs font-mono text-[#6EE7B7] whitespace-nowrap shrink-0">
                              {choice.affectionOrStatDelta}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        handleDialogueStep(
                          currentDialogueNode.nextNodeId,
                          'Loop Reset'
                        )
                      }
                      className="px-4 py-2.5 text-xs font-semibold bg-[#6EE7B7] text-[#0B0D19] rounded-lg hover:bg-[#A7F3D0] transition-colors cursor-pointer"
                    >
                      Continue Dialogue ▸
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Right 5 Columns: Synopsis & Key Features */}
            <div className="lg:col-span-5 space-y-5 bg-[#0C1020]/90 p-5 rounded-xl border border-slate-800/90">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#F472B6] mb-2">
                  Synopsis &amp; Worldbuilding
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {game.synopsis}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#6EE7B7] mb-2.5">
                  Key Features &amp; Architecture
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  {game.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-[#6EE7B7] font-mono mt-0.5">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with External Store Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#0B0D19]/95 border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0B0D19] bg-[#6EE7B7] hover:bg-[#A7F3D0] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Download Demo on itch.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-100 bg-[#161C35] hover:bg-[#212A4E] border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Wishlist on Steam</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F472B6]" />
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
