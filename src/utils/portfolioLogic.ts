export type GameCategory = 'All' | 'Visual Novels' | 'RPGs' | 'Prototypes';

export interface DialogueChoice {
  label: string;
  nextNodeId: string;
  affectionOrStatDelta?: string;
}

export interface DialogueNode {
  id: string;
  speaker: string;
  speakerRole: string;
  accentColor: 'pink' | 'mint';
  text: string;
  choices?: DialogueChoice[];
  nextNodeId?: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  sceneType: 'vn-dialogue' | 'rpg-map' | 'rpg-battle' | 'vn-cg';
  hudOverlayText: string;
}

export interface GameProject {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<GameCategory, 'All'>;
  genreLabel: string;
  engine: "Ren'Py 8.2" | 'RPG Maker MZ' | 'RPG Maker MV' | "Ren'Py + Python";
  releaseYear: string;
  status: 'Released' | 'Demo Available' | 'Game Jam Winner' | 'In Development';
  featuredSlot?: 'renpy-vn' | 'rpg-maker';
  badges: string[];
  bannerUrl: string;
  shortHook: string;
  synopsis: string;
  keyFeatures: string[];
  metrics: {
    playtime: string;
    wordCountOrMaps: string;
    endingsOrClasses: string;
  };
  itchUrl: string;
  steamUrl: string;
  screenshots: ScreenshotItem[];
  dialoguePreview: DialogueNode[];
}

export interface SkillToolItem {
  id: string;
  name: string;
  category: 'Core Engine' | 'Scripting & Code' | 'Creative Craft';
  accent: 'pink' | 'mint';
  experienceYears: string;
  summary: string;
  capabilities: string[];
  codeSnippetTitle: string;
  codeLanguage: string;
  codeSnippet: string;
}

/**
 * Filters a list of games by genre category and optional search query.
 */
export function filterGames(
  games: GameProject[],
  category: GameCategory,
  searchQuery: string = ''
): GameProject[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return games.filter((game) => {
    const matchesCategory =
      category === 'All' ? true : game.category === category;

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchableText = [
      game.title,
      game.subtitle,
      game.genreLabel,
      game.engine,
      game.shortHook,
      ...game.badges,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

/**
 * Counts games in each category for filter tab indicators.
 */
export function getCategoryCounts(
  games: GameProject[]
): Record<GameCategory, number> {
  const counts: Record<GameCategory, number> = {
    All: games.length,
    'Visual Novels': 0,
    RPGs: 0,
    Prototypes: 0,
  };

  for (const game of games) {
    counts[game.category] = (counts[game.category] ?? 0) + 1;
  }

  return counts;
}

/**
 * Computes the next valid slide index in a circular screenshot gallery slider.
 */
export function getNextSlideIndex(
  currentIndex: number,
  totalSlides: number,
  direction: 'next' | 'prev'
): number {
  if (totalSlides <= 0) return 0;
  if (direction === 'next') {
    return (currentIndex + 1) % totalSlides;
  }
  return (currentIndex - 1 + totalSlides) % totalSlides;
}

/**
 * Resolves the next dialogue node in an interactive VN / RPG script preview.
 */
export function resolveNextDialogueNode(
  nodes: DialogueNode[],
  currentNodeId: string,
  chosenNextId?: string
): DialogueNode {
  if (nodes.length === 0) {
    throw new Error('Dialogue node list cannot be empty');
  }

  const currentNode =
    nodes.find((n) => n.id === currentNodeId) ?? nodes[0];

  const targetId = chosenNextId ?? currentNode.nextNodeId;
  if (!targetId) {
    return nodes[0];
  }

  return nodes.find((n) => n.id === targetId) ?? nodes[0];
}
