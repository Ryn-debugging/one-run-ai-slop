/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  STUDIO_INFO,
  FEATURED_PROJECTS,
  LIBRARY_GAMES,
  SKILLS_AND_TOOLS,
} from './data/portfolioData';
import { type GameProject } from './utils/portfolioLogic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { GameLibraryGrid } from './components/GameLibraryGrid';
import { SkillsToolsSection } from './components/SkillsToolsSection';
import { GameModal } from './components/GameModal';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [studioName, setStudioName] = useState<string>(
    STUDIO_INFO.defaultTitle
  );
  const [selectedGame, setSelectedGame] = useState<GameProject | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<
    'screenshots' | 'dialogue'
  >('screenshots');

  const handleOpenGameModal = (
    game: GameProject,
    initialTab: 'screenshots' | 'dialogue' = 'screenshots'
  ) => {
    setModalInitialTab(initialTab);
    setSelectedGame(game);
  };

  const handleInspectById = (gameId: string) => {
    const found =
      LIBRARY_GAMES.find((g) => g.id === gameId) ?? FEATURED_PROJECTS[0];
    if (found) {
      handleOpenGameModal(found, 'screenshots');
    }
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('contact-name');
      nameInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0D19] text-[#F1F5F9]">
      {/* Top Navigation Bar (Strict 3-Zone Contract) */}
      <Navbar
        studioTitle={studioName}
        onOpenContactModal={handleScrollToContact}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          studioName={studioName}
          onChangeStudioName={setStudioName}
          onInspectFeaturedGame={handleInspectById}
        />

        {/* 2. Featured Showcase (Ren'Py Visual Novel + RPG Maker Game) */}
        <FeaturedShowcase
          projects={FEATURED_PROJECTS}
          onSelectGame={handleOpenGameModal}
        />

        {/* 3. Game Library Grid with Genre Filter Tabs */}
        <GameLibraryGrid
          games={LIBRARY_GAMES}
          onSelectGame={handleOpenGameModal}
        />

        {/* 4. Skills & Tools Section */}
        <SkillsToolsSection skills={SKILLS_AND_TOOLS} />
      </main>

      {/* 5. Contact & Socials Footer */}
      <FooterSection studioName={studioName} />

      {/* Interactive Screenshot & Synopsis Modal */}
      <GameModal
        game={selectedGame}
        initialTab={modalInitialTab}
        onClose={() => setSelectedGame(null)}
      />
    </div>
  );
}
