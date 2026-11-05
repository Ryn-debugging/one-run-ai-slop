import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGames,
  getCategoryCounts,
  getNextSlideIndex,
  resolveNextDialogueNode,
  type GameProject,
  type DialogueNode,
} from './portfolioLogic';

const mockDialogue: DialogueNode[] = [
  {
    id: 'node-1',
    speaker: 'Lyra',
    speakerRole: 'Starlight Archivist',
    accentColor: 'pink',
    text: 'The astral astrolabe is resonating with the old clocktower.',
    choices: [
      { label: 'Inspect the celestial dial', nextNodeId: 'node-2', affectionOrStatDelta: '+2 Lore' },
      { label: 'Seal the grimoire first', nextNodeId: 'node-3', affectionOrStatDelta: '+1 Caution' },
    ],
  },
  {
    id: 'node-2',
    speaker: 'Lyra',
    speakerRole: 'Starlight Archivist',
    accentColor: 'pink',
    text: 'Look closely—the constellations match the 16-bit rune map!',
    nextNodeId: 'node-1',
  },
  {
    id: 'node-3',
    speaker: 'Caelum',
    speakerRole: 'Guild Tactician',
    accentColor: 'mint',
    text: 'Wise move. Our party MP is still recovering from the last floor.',
    nextNodeId: 'node-1',
  },
];

const mockGames: GameProject[] = [
  {
    id: 'vn-1',
    title: 'Chronicles of the Astral Conservatory',
    subtitle: 'Celestial Mystery Visual Novel',
    category: 'Visual Novels',
    genreLabel: 'Visual Novel',
    engine: "Ren'Py 8.2",
    releaseYear: '2026',
    status: 'Demo Available',
    featuredSlot: 'renpy-vn',
    badges: ['Visual Novel', "Ren'Py", 'Rich Story'],
    bannerUrl: '/test-vn.jpg',
    shortHook: 'A branching celestial mystery.',
    synopsis: 'Full synopsis',
    keyFeatures: ['Feature 1'],
    metrics: { playtime: '12 Hours', wordCountOrMaps: '185,000 Words', endingsOrClasses: '6 Endings' },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [],
    dialoguePreview: mockDialogue,
  },
  {
    id: 'rpg-1',
    title: 'Echoes of Veridia',
    subtitle: '16-Bit Tactical JRPG',
    category: 'RPGs',
    genreLabel: 'Retro Pixel RPG',
    engine: 'RPG Maker MZ',
    releaseYear: '2025',
    status: 'Released',
    featuredSlot: 'rpg-maker',
    badges: ['RPG', 'RPG Maker', 'Pixel Art'],
    bannerUrl: '/test-rpg.jpg',
    shortHook: 'Turn-based crystal shrine adventure.',
    synopsis: 'Full synopsis',
    keyFeatures: ['Feature 1'],
    metrics: { playtime: '20 Hours', wordCountOrMaps: '95 Hand-Crafted Maps', endingsOrClasses: '8 Classes' },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [],
    dialoguePreview: mockDialogue,
  },
  {
    id: 'proto-1',
    title: 'Chrono-Alchemy Battle System',
    subtitle: 'ATB Plugin Prototype',
    category: 'Prototypes',
    genreLabel: 'System Prototype',
    engine: 'RPG Maker MZ',
    releaseYear: '2026',
    status: 'Game Jam Winner',
    badges: ['Prototype', 'JavaScript', 'Pixel Art'],
    bannerUrl: '/test-proto.jpg',
    shortHook: 'Timeline manipulation combat testbed.',
    synopsis: 'Full synopsis',
    keyFeatures: ['Feature 1'],
    metrics: { playtime: '45 Mins', wordCountOrMaps: '12 Combat Arenas', endingsOrClasses: '4 Alchemists' },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [],
    dialoguePreview: mockDialogue,
  },
];

test('filterGames returns all games when category is All and search is empty', () => {
  const result = filterGames(mockGames, 'All', '');
  assert.equal(result.length, 3);
});

test('filterGames filters accurately by genre category', () => {
  const vns = filterGames(mockGames, 'Visual Novels');
  assert.equal(vns.length, 1);
  assert.equal(vns[0].id, 'vn-1');

  const rpgs = filterGames(mockGames, 'RPGs');
  assert.equal(rpgs.length, 1);
  assert.equal(rpgs[0].id, 'rpg-1');

  const protos = filterGames(mockGames, 'Prototypes');
  assert.equal(protos.length, 1);
  assert.equal(protos[0].id, 'proto-1');
});

test('filterGames combines category filter and case-insensitive search query', () => {
  const searchByEngine = filterGames(mockGames, 'All', "ren'py");
  assert.equal(searchByEngine.length, 1);
  assert.equal(searchByEngine[0].id, 'vn-1');

  const mismatchCategorySearch = filterGames(mockGames, 'RPGs', 'Astral');
  assert.equal(mismatchCategorySearch.length, 0);
});

test('getCategoryCounts computes exact counts per genre tab', () => {
  const counts = getCategoryCounts(mockGames);
  assert.deepEqual(counts, {
    All: 3,
    'Visual Novels': 1,
    RPGs: 1,
    Prototypes: 1,
  });
});

test('getNextSlideIndex wraps around forward and backward', () => {
  assert.equal(getNextSlideIndex(0, 4, 'next'), 1);
  assert.equal(getNextSlideIndex(3, 4, 'next'), 0);
  assert.equal(getNextSlideIndex(0, 4, 'prev'), 3);
  assert.equal(getNextSlideIndex(2, 4, 'prev'), 1);
  assert.equal(getNextSlideIndex(0, 0, 'next'), 0);
});

test('resolveNextDialogueNode transitions via choices and loops back safely', () => {
  const branchA = resolveNextDialogueNode(mockDialogue, 'node-1', 'node-2');
  assert.equal(branchA.id, 'node-2');

  const branchB = resolveNextDialogueNode(mockDialogue, 'node-1', 'node-3');
  assert.equal(branchB.id, 'node-3');

  const loopBack = resolveNextDialogueNode(mockDialogue, 'node-2');
  assert.equal(loopBack.id, 'node-1');
});
