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

export interface RpgPartyMember {
  name: string;
  job: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  equippedRelic: string;
}

export interface VnTextboxPreview {
  chapterLabel: string;
  speaker: string;
  speakerTitle: string;
  quote: string;
  resonancePercent: number;
  unlockedRouteName: string;
}

export interface DevlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  engineTag: "Ren'Py 8.2" | 'RPG Maker MZ' | 'Pixel Art & Shaders';
  accent: 'pink' | 'mint';
  summary: string;
  keyTakeaways: string[];
  codeSnippet: string;
  articleBody: string[];
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
  vnCustomUi?: VnTextboxPreview;
  rpgPartyStatus?: RpgPartyMember[];
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

/**
 * Upgrades a getter-only or read-only PropertyDescriptor for `fetch` into a
 * writable getter/setter or writable value descriptor so browser extensions
 * that assign `window.fetch = ...` after another script calls
 * `Object.defineProperty(window, 'fetch', { get })` never throw TypeError.
 */
export function normalizeFetchDescriptor(
  desc: PropertyDescriptor
): PropertyDescriptor {
  if (typeof desc.get === 'function' && typeof desc.set !== 'function') {
    const origGet = desc.get;
    let hasOverride = false;
    let overrideVal: unknown;
    return {
      configurable: true,
      enumerable: desc.enumerable !== false,
      get(this: unknown) {
        return hasOverride ? overrideVal : origGet.call(this);
      },
      set(nextVal: unknown) {
        overrideVal = nextVal;
        hasOverride = true;
      },
    };
  }
  if ('value' in desc && desc.writable === false) {
    return {
      configurable: true,
      enumerable: desc.enumerable !== false,
      writable: true,
      value: desc.value,
    };
  }
  return desc;
}

/**
 * Ensures `fetch` on a target global object has both a getter and setter so
 * browser extensions that wrap `window.fetch = ...` do not throw
 * "TypeError: Cannot set property fetch of #<Window> which has only a getter".
 */
export function ensureWritableFetch(target: Record<string, unknown>): boolean {
  try {
    let currentFetch =
      typeof target.fetch === 'function' ? target.fetch : undefined;
    const ownDesc = Object.getOwnPropertyDescriptor(target, 'fetch');
    const proto = Object.getPrototypeOf(target);
    const protoDesc = proto
      ? Object.getOwnPropertyDescriptor(proto, 'fetch')
      : undefined;
    const desc = ownDesc ?? protoDesc;

    if (ownDesc && ownDesc.configurable === false) {
      return false;
    }

    if (proto && protoDesc && protoDesc.configurable !== false && protoDesc.get && !protoDesc.set) {
      Object.defineProperty(proto, 'fetch', normalizeFetchDescriptor(protoDesc));
    }

    if (!ownDesc || (desc && desc.get && !desc.set)) {
      Object.defineProperty(target, 'fetch', {
        configurable: true,
        enumerable: true,
        get() {
          return currentFetch;
        },
        set(nextFetch: unknown) {
          currentFetch = nextFetch as typeof currentFetch;
        },
      });
      return true;
    }
    return true;
  } catch {
    return false;
  }
}


