import { type GameProject, type SkillToolItem, type DialogueNode } from '../utils/portfolioLogic';

export const STUDIO_INFO = {
  defaultTitle: '[Your Name/Studio] Portfolio',
  studioAlias: 'Astral & Pixel Studio',
  developerName: 'Sora Takahashi',
  roleLine: "Ren'Py Visual Novel Director & RPG Maker Systems Architect",
  tagline:
    'Crafting atmospheric, choice-driven Visual Novels in Ren\'Py and nostalgic 16-bit pixel worlds in RPG Maker—where expressive character writing meets tactile retro mechanics.',
  location: 'Tokyo / Remote Indie Studio',
  itchUrl: 'https://itch.io',
  steamUrl: 'https://store.steampowered.com',
  githubUrl: 'https://github.com',
  twitterUrl: 'https://x.com',
  discordHandle: 'astralpixel.dev',
  contactEmail: 'hello@astralpixel.studio',
};

export const HERO_IMAGE_URL = '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg';

export const HERO_DIALOGUE_NODES: DialogueNode[] = [
  {
    id: 'hero-1',
    speaker: 'Archivist Aria',
    speakerRole: 'Ren\'Py Narrative Guide',
    accentColor: 'pink',
    text: '“Welcome to the observatory. Every project here bridges two worlds: cel-shaded visual novel storytelling and 16-bit turn-based exploration.”',
    choices: [
      {
        label: 'Inspect the Ren\'Py Visual Novel Showcase',
        nextNodeId: 'hero-vn',
        affectionOrStatDelta: '+10 Story Resonance',
      },
      {
        label: 'Examine the 16-Bit RPG Maker Systems',
        nextNodeId: 'hero-rpg',
        affectionOrStatDelta: '+10 Tactical Mastery',
      },
    ],
  },
  {
    id: 'hero-vn',
    speaker: 'Archivist Aria',
    speakerRole: 'Ren\'Py Narrative Guide',
    accentColor: 'pink',
    text: '“In our Ren\'Py titles, custom Python screen language shaders, dynamic lip-sync sprites, and persistent timeline flags turn every conversation into a living memory.”',
    choices: [
      {
        label: 'What about the retro RPG mechanics?',
        nextNodeId: 'hero-rpg',
        affectionOrStatDelta: 'Switch to RPG Mode',
      },
      {
        label: 'Return to the observatory entrance',
        nextNodeId: 'hero-1',
        affectionOrStatDelta: 'Reset Loop',
      },
    ],
  },
  {
    id: 'hero-rpg',
    speaker: 'Guildmaster Kael',
    speakerRole: 'RPG Maker MZ Engineer',
    accentColor: 'mint',
    text: '“Our RPG Maker worlds run on custom JavaScript & RGSS plugins—featuring pixel-perfect lighting, timeline turn order displays, and zero-load seamless map transitions.”',
    choices: [
      {
        label: 'Tell me about the Visual Novel architecture',
        nextNodeId: 'hero-vn',
        affectionOrStatDelta: 'Switch to VN Mode',
      },
      {
        label: 'Return to the observatory entrance',
        nextNodeId: 'hero-1',
        affectionOrStatDelta: 'Reset Loop',
      },
    ],
  },
];

export const FEATURED_PROJECTS: GameProject[] = [
  {
    id: 'astral-conservatory',
    title: 'Chronicles of the Astral Conservatory',
    subtitle: 'A Celestial Time-Loop Mystery Visual Novel',
    category: 'Visual Novels',
    genreLabel: 'Visual Novel',
    engine: "Ren'Py 8.2",
    releaseYear: '2026',
    status: 'Demo Available',
    featuredSlot: 'renpy-vn',
    badges: ['Visual Novel', "Ren'Py", 'Rich Story'],
    bannerUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
    shortHook:
      'Unravel a midnight conspiracy inside a floating starlit archive where every dialogue choice rewires the constellations—and the memories of those you trust.',
    synopsis:
      'Set inside the glass dome of the High Astral Conservatory, you play as Selene, a newly appointed Starlight Archivist who discovers that the empire’s historical records are being rewritten each night at the stroke of twelve. Built in Ren\'Py 8.2 with a custom Python astrolabe deduction screen, the game blends expressive multi-layered anime character sprites, original chamber music, and a branching flowchart that remembers your knowledge across loops.',
    keyFeatures: [
      '185,000+ words of branching narrative with 6 distinct canon endings and 28 unlocked CG illustrations',
      'Custom Python Astrolabe Deduction UI built natively in Ren\'Py Screen Language for piecing together clues',
      'Dynamic layered character portraits with eye-blink, lip-sync, and ambient candlelight rim-lighting shaders',
      'Interactive Timeline Flowchart allowing players to jump to previously visited nodes without losing clue flags',
    ],
    metrics: {
      playtime: '12–15 Hours',
      wordCountOrMaps: '185,000 Words',
      endingsOrClasses: '6 True Endings',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'astral-ss-1',
        title: 'The Midnight Astrolabe Chamber',
        caption: 'Selene cross-examines the celestial dial during Loop IV using the custom Ren\'Py clue inspection HUD.',
        imageUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
        sceneType: 'vn-cg',
        hudOverlayText: 'ACT II · THE GLASS ARCHIVE — “If this star chart is real, the Third Eclipse never happened.”',
      },
      {
        id: 'astral-ss-2',
        title: 'Observatory Balcony Encounter',
        caption: 'Dual-perspective dialogue system where your relationship affinity subtly shifts ambient background music layers.',
        imageUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'AFFINITY CHECK [ASTRAL RESONANCE ≥ 4] — Unlocked Hidden Testimony Branch',
      },
      {
        id: 'astral-ss-3',
        title: 'Rainy Platform Epilogue Route',
        caption: 'One of six major route departures when escaping the capital on the last night train.',
        imageUrl: '/src/assets/images/game_vn_amber_rain_1793884388713.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'ENDING 04 · LETTERS FROM STATION NINE — Persistent Flag Saved to Global Memory',
      },
    ],
    dialoguePreview: [
      {
        id: 'ac-1',
        speaker: 'Selene',
        speakerRole: 'Chief Starlight Archivist',
        accentColor: 'pink',
        text: '“The brass rings on the astrolabe are still warm. Someone adjusted the meridian less than ten minutes ago.”',
        choices: [
          {
            label: 'Dust the outer ring for alchemical ink',
            nextNodeId: 'ac-2',
            affectionOrStatDelta: '+Clue: Silver Ink',
          },
          {
            label: 'Confront the night watchman on the spiral stairs',
            nextNodeId: 'ac-3',
            affectionOrStatDelta: '+Boldness +2',
          },
        ],
      },
      {
        id: 'ac-2',
        speaker: 'Selene',
        speakerRole: 'Chief Starlight Archivist',
        accentColor: 'pink',
        text: '“Unmistakable. Nocturne-grade silver phosphor—only the Chancellor’s inner circle has access to this ink.”',
        nextNodeId: 'ac-1',
      },
      {
        id: 'ac-3',
        speaker: 'Selene',
        speakerRole: 'Chief Starlight Archivist',
        accentColor: 'pink',
        text: '“Footsteps echo above the dome glass. If I hurry, I can catch them before the clocktower chimes midnight.”',
        nextNodeId: 'ac-1',
      },
    ],
  },
  {
    id: 'echoes-of-veridia',
    title: 'Echoes of Veridia: 16-Bit Odyssey',
    subtitle: 'Retro Pixel-Art Tactical Adventure RPG',
    category: 'RPGs',
    genreLabel: 'Retro Pixel RPG',
    engine: 'RPG Maker MZ',
    releaseYear: '2025',
    status: 'Released',
    featuredSlot: 'rpg-maker',
    badges: ['RPG', 'RPG Maker', 'Pixel Art'],
    bannerUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
    shortHook:
      'Lead a three-hero expedition across bioluminescent pixel ruins, chain elemental combo arts, and restore the shattered Mana Shrines of Veridia.',
    synopsis:
      'Built in RPG Maker MZ with a custom suite of 14 TypeScript/JavaScript plugins, Echoes of Veridia pays homage to golden-era 16-bit console RPGs while introducing modern quality-of-life pacing. Featuring zero random encounters (all enemies visible on-map with reactive AI patrol routes), a timeline-based Break & Boost turn system, and hand-pixelled tilesets with dynamic torch and crystal point-lighting.',
    keyFeatures: [
      '95+ hand-pixelled overworld, shrine, and dungeon maps with custom parallax lighting and water reflection shaders',
      'Bespoke JavaScript Timeline CTB Battle Engine with Dual/Triple Tech party combo attacks and shield-break mechanics',
      'Campfire Party Skits inspired by classic JRPGs—trigger optional character banter and cooking buffs at any shrine',
      'Full controller, keyboard, and Steam Deck verification with 60 FPS pixel-perfect integer scaling',
    ],
    metrics: {
      playtime: '22–28 Hours',
      wordCountOrMaps: '95 Pixel Maps',
      endingsOrClasses: '8 Job Classes',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'veridia-ss-1',
        title: 'The Emerald Mana Shrine Overworld',
        caption: 'Real-time dynamic point-lighting plugin illuminating water tiles and ancient stonework in the Whispering Woods.',
        imageUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'LOC: WHISPERING SHRINE · PARTY HP 420/420 · MANA RESONANCE: STABLE',
      },
      {
        id: 'veridia-ss-2',
        title: 'Clockwork Alchemy Boss Encounter',
        caption: 'Turn-order timeline combat inside the Brass Foundry, showcasing elemental potion synthesis mid-battle.',
        imageUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
        sceneType: 'rpg-battle',
        hudOverlayText: 'COMBO ART READY: [AETHER NOVA] · BOSS SHIELD: 1 STACK REMAINING',
      },
      {
        id: 'veridia-ss-3',
        title: 'Starlight Overlook Campfire Skit',
        caption: 'Resting at vista points unlocks visual-novel style portrait skits between party members.',
        imageUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'CAMPFIRE SKIT #14 · “Why the Old Guild Sealed the Northern Spire”',
      },
    ],
    dialoguePreview: [
      {
        id: 'ev-1',
        speaker: 'Rowan (Vanguard)',
        speakerRole: 'Lv. 18 Sky-Knight',
        accentColor: 'mint',
        text: '“The Emerald Shrine crystal is pulsing again! If we channel Lyra’s gale magic into the obelisk, the bridge to the Sunken Sanctum should materialize.”',
        choices: [
          {
            label: '[Cast Gale Resonance] — 15 MP',
            nextNodeId: 'ev-2',
            affectionOrStatDelta: 'Unlock Secret Path',
          },
          {
            label: '[Set Up Campfire First] — Restore Party HP/MP',
            nextNodeId: 'ev-3',
            affectionOrStatDelta: '+100% HP/MP + Skit',
          },
        ],
      },
      {
        id: 'ev-2',
        speaker: 'Elara (Runeseer)',
        speakerRole: 'Lv. 18 Sage',
        accentColor: 'mint',
        text: '“Resonance complete! The ancient stone tiles have risen from the river—and look, a rare Aether Chest is gleaming on the far ledge.”',
        nextNodeId: 'ev-1',
      },
      {
        id: 'ev-3',
        speaker: 'Rowan (Vanguard)',
        speakerRole: 'Lv. 18 Sky-Knight',
        accentColor: 'mint',
        text: '“Nothing beats warmMint Herb Stew before a boss floor. All party stats boosted by +15% for the next 3 battles!”',
        nextNodeId: 'ev-1',
      },
    ],
  },
];

export const LIBRARY_GAMES: GameProject[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'amber-rain-station-9',
    title: 'Amber Rain at Station 9',
    subtitle: 'Lo-Fi Supernatural Train Mystery',
    category: 'Visual Novels',
    genreLabel: 'Visual Novel · Mystery',
    engine: "Ren'Py 8.2",
    releaseYear: '2025',
    status: 'Released',
    badges: ['Visual Novel', "Ren'Py", 'Atmospheric Audio'],
    bannerUrl: '/src/assets/images/game_vn_amber_rain_1793884388713.jpg',
    shortHook:
      'Stranded at a rural mountain station during a typhoon, five passengers realize their midnight train only stops for unresolved regrets.',
    synopsis:
      'Created originally for NanoRenO and expanded into a full commercial release, Amber Rain at Station 9 combines melancholic rain-soaked anime backgrounds with an interactive cassette-tape inventory system. Players record ambient sounds on the platform and play them back during conversations to jog the memories of fellow passengers.',
    keyFeatures: [
      '65,000 words of intimate, character-driven suspense with 4 endings and full Japanese/English text toggle',
      'Interactive Cassette Recorder mechanic scripted in Python inside Ren\'Py for acoustic clue gathering',
      'Dynamic rain & thunder audio bus mixer that responds to story tension and indoor/outdoor scene transitions',
    ],
    metrics: {
      playtime: '5–6 Hours',
      wordCountOrMaps: '65,000 Words',
      endingsOrClasses: '4 Endings',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'amber-ss-1',
        title: 'Platform 2 at 11:48 PM',
        caption: 'Inspecting the neon station sign and talking with the girl holding the sakura-tinted umbrella.',
        imageUrl: '/src/assets/images/game_vn_amber_rain_1793884388713.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'CASSETTE TAPE #02 RECORDED — “The Sound of a Coin Dropping in the Old Ticket Booth”',
      },
      {
        id: 'amber-ss-2',
        title: 'The Archive Car Flashback',
        caption: 'Memory reconstruction sequence linking Station 9 to the old observatory.',
        imageUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
        sceneType: 'vn-cg',
        hudOverlayText: 'MEMORY FRAGMENT RESTORED · CHAPTER 3: THE LAST CONDUCTOR',
      },
    ],
    dialoguePreview: [
      {
        id: 'ar-1',
        speaker: 'Minori',
        speakerRole: 'Passenger with the Umbrella',
        accentColor: 'pink',
        text: '“That train has been idling on Track 1 for twenty minutes, yet the conductor hasn’t opened a single door.”',
        choices: [
          {
            label: 'Play Cassette Recording #02 (Ticket Bell)',
            nextNodeId: 'ar-2',
            affectionOrStatDelta: 'Trigger Memory',
          },
          {
            label: 'Offer her a warm canned coffee from the machine',
            nextNodeId: 'ar-3',
            affectionOrStatDelta: '+Trust +1',
          },
        ],
      },
      {
        id: 'ar-2',
        speaker: 'Minori',
        speakerRole: 'Passenger with the Umbrella',
        accentColor: 'pink',
        text: '“Wait… where did you record that chime? That’s the old bronze bell they retired ten summers ago!”',
        nextNodeId: 'ar-1',
      },
      {
        id: 'ar-3',
        speaker: 'Minori',
        speakerRole: 'Passenger with the Umbrella',
        accentColor: 'pink',
        text: '“Thank you. My hands were freezing… Maybe we have time to share our stories before the departure bell rings.”',
        nextNodeId: 'ar-1',
      },
    ],
  },
  {
    id: 'clockwork-sovereign',
    title: 'Alchemist of the Clockwork Spire',
    subtitle: 'Dungeon Crawler & Potion Crafting RPG',
    category: 'RPGs',
    genreLabel: 'Dungeon RPG · Pixel Art',
    engine: 'RPG Maker MZ',
    releaseYear: '2024',
    status: 'Released',
    badges: ['RPG', 'RPG Maker', 'Tactical Alchemy'],
    bannerUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
    shortHook:
      'Brew unstable volatile elixirs mid-combat and dismantle brass automata across a 30-floor mechanical citadel.',
    synopsis:
      'Alchemist of the Clockwork Spire replaces traditional MP bars with an active Reagent Grid inside RPG Maker MZ. Every spell requires combining Mint Ether, Rose Quartz, and Brass Catalyst vials dropped by dungeon mechanisms—rewarding clever inventory synthesis and turn-order manipulation.',
    keyFeatures: [
      'Custom RPG Maker MZ Reagent Synthesis plugin allowing 48 unique potion combinations without leaving battle',
      'Grid-based mechanical floor puzzles with pushable gear conduits, steam valves, and timed trapdoors',
      'Original 16-bit FM-synth soundtrack composed in Furnace Tracker for authentic retro hardware warmth',
    ],
    metrics: {
      playtime: '10–12 Hours',
      wordCountOrMaps: '42 Dungeon Floors',
      endingsOrClasses: '48 Elixir Recipes',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'clock-ss-1',
        title: 'Floor 14: The Brass Automaton Laboratory',
        caption: 'Synthesizing a Mint-Rose Dual Surge elixir to short-circuit the Iron Warden’s armor plating.',
        imageUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
        sceneType: 'rpg-battle',
        hudOverlayText: 'ALCHEMICAL REACTION: [VAPOR OVERLOAD] — 640 AETHER DAMAGE!',
      },
      {
        id: 'clock-ss-2',
        title: 'Subterranean Mana Conduit',
        caption: 'Discovering an overgrown crystal reservoir beneath the clockwork citadel.',
        imageUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'REAGENT HARVESTED: PURE MINT ETHER x3',
      },
    ],
    dialoguePreview: [
      {
        id: 'cs-1',
        speaker: 'Master Alchemist',
        speakerRole: 'Guild Artificer',
        accentColor: 'mint',
        text: '“The Iron Warden’s core is shielded against physical strikes! Mix two reagents in your flask before its gear-charge hits 100%!”',
        choices: [
          {
            label: 'Mix [Mint Ether] + [Rose Catalyst]',
            nextNodeId: 'cs-2',
            affectionOrStatDelta: 'Armor Shatter!',
          },
          {
            label: 'Deploy [Aether Smoke Bomb] & Reposition',
            nextNodeId: 'cs-3',
            affectionOrStatDelta: '+Evasion +50%',
          },
        ],
      },
      {
        id: 'cs-2',
        speaker: 'Master Alchemist',
        speakerRole: 'Guild Artificer',
        accentColor: 'mint',
        text: '“Direct hit! The luminescent reaction melted its brass carapace—all party attacks now deal Critical Damage!”',
        nextNodeId: 'cs-1',
      },
      {
        id: 'cs-3',
        speaker: 'Master Alchemist',
        speakerRole: 'Guild Artificer',
        accentColor: 'mint',
        text: '“The party slipped behind the alchemy benches just as the Warden’s laser swept the floor!”',
        nextNodeId: 'cs-1',
      },
    ],
  },
  {
    id: 'starlight-grimoire-proto',
    title: 'Project Grimoire: Hybrid VN-RPG Engine',
    subtitle: 'Ren\'Py + Tactical Hex Grid Prototype',
    category: 'Prototypes',
    genreLabel: 'Engine Prototype · Hybrid',
    engine: "Ren'Py + Python",
    releaseYear: '2026',
    status: 'Game Jam Winner',
    badges: ['Prototype', "Ren'Py", 'Python Creator-Defined Displayables'],
    bannerUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
    shortHook:
      'An open-source technical prototype embedding a 60 FPS pixel-art tactical grid and spell-weaving system directly inside Ren\'Py using Creator-Defined Displayables.',
    synopsis:
      'Built in 72 hours for the Winter Narrative Mechanics Jam (1st Place Technical Innovation), Project Grimoire proves how far Ren\'Py can be pushed with pure Python. It seamlessly transitions from expressive visual novel dialogue boxes into an isometric pixel-art familiar summoning board without external game engines.',
    keyFeatures: [
      'Custom `renpy.Displayable` subclass rendering sprite-sheet animations, tile pathfinding (A*), and particle trails',
      'Live variable sync between tactical board outcomes and subsequent Ren\'Py dialogue script branches',
      'Downloadable `.rpy` module for fellow indie devs looking to add lightweight RPG minigames to their visual novels',
    ],
    metrics: {
      playtime: '45 Mins Demo',
      wordCountOrMaps: '1,400 Lines Python',
      endingsOrClasses: 'Open Source MIT',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'grim-ss-1',
        title: 'Observatory Summoning Balcony',
        caption: 'Summoning a pixel-art sprite familiar directly from a Ren\'Py visual novel grimoire menu.',
        imageUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
        sceneType: 'vn-cg',
        hudOverlayText: 'REN\'PY CDD RENDERER: 60.0 FPS · FAMILIAR BOND LEVEL 5',
      },
      {
        id: 'grim-ss-2',
        title: 'Archive Script Debugger Overlay',
        caption: 'Inspecting real-time narrative state variables during dialogue testing.',
        imageUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'PYTHON STATE: $ grimoire_mana = 85 | $ familiar_form = "pixie_mint"',
      },
    ],
    dialoguePreview: [
      {
        id: 'pg-1',
        speaker: 'Familiar Sprite',
        speakerRole: '16-Bit Astral Companion',
        accentColor: 'mint',
        text: '“Chirp! You just invoked a Python Creator-Defined Displayable inside a Ren\'Py textbox! Which module shall we test?”',
        choices: [
          {
            label: 'Run A* Tile Pathfinding Benchmark',
            nextNodeId: 'pg-2',
            affectionOrStatDelta: '0.4ms Compute',
          },
          {
            label: 'Trigger Dynamic Visual Novel Camera Pan',
            nextNodeId: 'pg-3',
            affectionOrStatDelta: 'ATL Matrix 3D',
          },
        ],
      },
      {
        id: 'pg-2',
        speaker: 'Familiar Sprite',
        speakerRole: '16-Bit Astral Companion',
        accentColor: 'mint',
        text: '“Path calculated across 64 obstacle tiles in 0.4 milliseconds—and returned the result straight to the `.rpy` script label!”',
        nextNodeId: 'pg-1',
      },
      {
        id: 'pg-3',
        speaker: 'Familiar Sprite',
        speakerRole: '16-Bit Astral Companion',
        accentColor: 'mint',
        text: '“Ren\'Py ATL `perspective True` camera engaged! Multi-plane parallax backgrounds shift smoothly as you move the cursor.”',
        nextNodeId: 'pg-1',
      },
    ],
  },
  {
    id: 'moonlit-menagerie-proto',
    title: 'Moonlit Lighting & Skit Suite for MZ',
    subtitle: 'RPG Maker Plugin & Shader Sandbox',
    category: 'Prototypes',
    genreLabel: 'Plugin Suite · RPG Maker',
    engine: 'RPG Maker MV',
    releaseYear: '2025',
    status: 'Released',
    badges: ['Prototype', 'JavaScript / Ruby', 'RPG Maker'],
    bannerUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
    shortHook:
      'An interactive tech-demo island showcasing custom PixiJS point-lighting shaders, VN-style bust message windows, and diagonal pixel movement for RPG Maker MV & MZ.',
    synopsis:
      'Designed as both a playable 30-minute micro-adventure and a live showcase for my open-source RPG Maker plugin collection. Players can toggle lighting presets, inspect event note-tags in real time, and test how visual novel bust portraits integrate cleanly with classic retro RPG map exploration.',
    keyFeatures: [
      'PixiJS WebGL filter plugin for soft torchlight flicker, bioluminescent flora glow, and day/night ambient tinting',
      'Drop-in Visual Novel Bust & Namebox controller supporting smooth cubic-bezier slide-ins and emotion sweat-drops',
      'Compatible with both RPG Maker MV and MZ with zero external asset dependencies',
    ],
    metrics: {
      playtime: '30 Mins Sandbox',
      wordCountOrMaps: '8 Tech-Demo Maps',
      endingsOrClasses: '14 Plugins Included',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'moon-ss-1',
        title: 'Bioluminescent Shrine Shader Test',
        caption: 'Testing additive mint crystal glow and torch attenuation radii in RPG Maker’s PixiJS stage.',
        imageUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'NOTE TAG: <Light: 180, #6EE7B7, pulse=0.15>',
      },
      {
        id: 'moon-ss-2',
        title: 'Alchemy Battle UI Layout Hook',
        caption: 'Customizing `Window_BattleStatus` and `Spriteset_Battle` for crisp 16-bit pixel framing.',
        imageUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
        sceneType: 'rpg-battle',
        hudOverlayText: 'PLUGIN CALL: AstralUI.openSynthesisPalette()',
      },
    ],
    dialoguePreview: [
      {
        id: 'mm-1',
        speaker: 'Plugin Debugger NPC',
        speakerRole: 'PixiJS Shader Controller',
        accentColor: 'mint',
        text: '“Greetings, developer! Use this interactive sandbox to toggle map lighting shaders or inspect the RPG Maker window skin parameters.”',
        choices: [
          {
            label: 'Toggle <Light: Crystal_Mint_Glow> Shader',
            nextNodeId: 'mm-2',
            affectionOrStatDelta: 'PixiFilter ON',
          },
          {
            label: 'Test VN Bust Slide-In Transition',
            nextNodeId: 'mm-3',
            affectionOrStatDelta: '160ms Cubic-Bezier',
          },
        ],
      },
      {
        id: 'mm-2',
        speaker: 'Plugin Debugger NPC',
        speakerRole: 'PixiJS Shader Controller',
        accentColor: 'mint',
        text: '“Ambient map tint shifted to #0B0D19 with a 180px radial mint point-light attached to the crystal event!”',
        nextNodeId: 'mm-1',
      },
      {
        id: 'mm-3',
        speaker: 'Plugin Debugger NPC',
        speakerRole: 'PixiJS Shader Controller',
        accentColor: 'mint',
        text: '“Bust sprite eased into the right message anchor with automatic speaker dimming on inactive portraits.”',
        nextNodeId: 'mm-1',
      },
    ],
  },
];

export const SKILLS_AND_TOOLS: SkillToolItem[] = [
  {
    id: 'skill-renpy',
    name: "Ren'Py Engine",
    category: 'Core Engine',
    accent: 'pink',
    experienceYears: '5+ Years · 6 Shipped Titles',
    summary:
      'Deep mastery of Ren\'Py 8, ATL (Animation & Transformation Language), LayeredImages, and bespoke Screen Language UI architecture that replaces default templates with unforgettable visual novel presentation.',
    capabilities: [
      'Custom Screen Language menus, codex encyclopedias & clue deduction boards',
      '3D Stage Camera (`perspective True`) multi-plane parallax cinematography',
      'LayeredImage sprite systems with dynamic outfits, expressions & auto-blink',
      'Steam Achievements, multi-language localization & persistent loop memory',
    ],
    codeSnippetTitle: 'custom_astrolabe_hud.rpy',
    codeLanguage: 'renpy',
    codeSnippet: `screen astrolabe_deduction(clues_found, resonance_level):
    modal True
    zorder 90
    frame:
        background "#0B0D19F2"
        padding (32, 28)
        xalign 0.5 yalign 0.5
        vbox:
            spacing 14
            text "ASTRAL DEDUCTION MATRIX" size 18 color "#F472B6"
            for clue in clues_found:
                textbutton "[clue.title]":
                    action [SetVariable("active_clue", clue), Play("sound", "sfx/chime.ogg")]`,
  },
  {
    id: 'skill-rpgmaker',
    name: 'RPG Maker (MZ / MV / VX Ace)',
    category: 'Core Engine',
    accent: 'mint',
    experienceYears: '6+ Years · 95+ Custom Maps',
    summary:
      'End-to-end retro RPG production—from intricate multi-layer tileset mapping and common-event state machines to custom turn-based combat formulas, cutscene choreography, and seamless audio mixing.',
    capabilities: [
      'Parallax & shift-click tileset mapping with collision & region-ID triggers',
      'Complex non-linear quest tracking via clean Common Event architectures',
      'Balanced tactical combat curves, elemental weaknesses & combo skill formulas',
      '60 FPS deployment optimization for Windows, macOS, Web & Steam Deck',
    ],
    codeSnippetTitle: 'ShrineResonanceEvent.json (Event Logic)',
    codeLanguage: 'text',
    codeSnippet: `◆If：Script: $gameParty.hasItem($dataItems[14]) // Astral Tuning Fork
  ◆Play SE：Crystal_Chime (90, 100, 0)
  ◆Plugin Command：AstralLighting, SetPointLight
  ：              ：EventId = 8, Color = #6EE7B7, Radius = 220
  ◆Show Text：Rowan_Bust(1), Window, Bottom
  ：         ：The ancient crystal responds to the tuning fork!
  ◆Control Self Switch：A = ON`,
  },
  {
    id: 'skill-python',
    name: 'Python (Ren\'Py Scripting)',
    category: 'Scripting & Code',
    accent: 'pink',
    experienceYears: '5+ Years · Custom Displayables',
    summary:
      'Extending Ren\'Py far beyond standard dialogue scripts with pure Python modules: custom `renpy.Displayable` interactive minigames, graph-based story flowcharts, and automated dialogue lint tools.',
    capabilities: [
      'Creator-Defined Displayables (`renpy.Displayable`) for custom 2D gameplay',
      'Directed Acyclic Graph (DAG) narrative state trackers & timeline jump trees',
      'Custom Python callbacks for dynamic audio stem crossfading per emotion',
      'Automated word-count, unreachable-label, and missing-sprite build validators',
    ],
    codeSnippetTitle: 'narrative_graph.py',
    codeLanguage: 'python',
    codeSnippet: `init python:
    class TimelineTracker:
        def __init__(self):
            self.visited_nodes = set(persistent.unlocked_nodes or [])

        def record(self, node_id, clue_flag=None):
            self.visited_nodes.add(node_id)
            persistent.unlocked_nodes = list(self.visited_nodes)
            if clue_flag:
                renpy.notify(f"Clue Recorded: {clue_flag}")`,
  },
  {
    id: 'skill-js-ruby',
    name: 'JavaScript / Ruby (RPG Maker Plugins)',
    category: 'Scripting & Code',
    accent: 'mint',
    experienceYears: '5+ Years · MZ/MV JS & RGSS3',
    summary:
      'Authoring clean, conflict-free JavaScript plugins (PIXI.js v5/v7) for RPG Maker MZ/MV and Ruby (RGSS3) scripts for VX Ace to overhaul battle systems, window layouts, and map shaders.',
    capabilities: [
      'RPG Maker MZ/MV plugin architecture (`PluginManager.registerCommand`)',
      'Custom `Window_Selectable` & `Scene_Battle` UI overhauls with zero lag',
      'PixiJS WebGL fragment shaders for dynamic weather, fog, and crystal lighting',
      'Ruby RGSS3 legacy script maintenance and framerate modernization',
    ],
    codeSnippetTitle: 'Astral_TimelineBattle.js',
    codeLanguage: 'javascript',
    codeSnippet: `/*:
 * @target MZ
 * @plugindesc v1.4 Timeline Turn-Order & Combo Art HUD
 */
(() => {
  const _BattleManager_startInput = BattleManager.startInput;
  BattleManager.startInput = function() {
    _BattleManager_startInput.call(this);
    this.recalculateTimelineOrder();
  };
})();`,
  },
  {
    id: 'skill-writing',
    name: 'Writing & Narrative Design',
    category: 'Creative Craft',
    accent: 'pink',
    experienceYears: '350,000+ Published Words',
    summary:
      'Structuring emotionally resonant character arcs, mystery clue trails, and meaningful branching choices where player agency shapes both intimate relationships and world-scale lore.',
    capabilities: [
      'Branching route architecture (mystery loops, character affinity & true routes)',
      'Distinct character voice bibles, pacing beats, and optional JRPG party skits',
      'Environmental storytelling through item descriptions and archive lore logs',
      'Bilingual localization preparation and voice-over script direction sheets',
    ],
    codeSnippetTitle: 'act2_conservatory_dialogue.rpy',
    codeLanguage: 'renpy',
    codeSnippet: `label conservatory_midnight_confrontation:
    scene bg astral_dome_night with dissolve
    show selene coat_serious at center
    selene "Every star chart in Sector Four has been predated by a century."
    menu:
        "Present the silver phosphor ink vial" if has_silver_ink:
            jump route_truth_unveiled
        "Feign ignorance and protect the apprentice":
            $ apprentice_trust += 2
            jump route_silent_accomplice`,
  },
  {
    id: 'skill-art',
    name: 'Digital Art & Pixel Art',
    category: 'Creative Craft',
    accent: 'mint',
    experienceYears: 'Aseprite · Clip Studio Paint',
    summary:
      'Bridging expressive high-resolution anime character illustrations for Visual Novels with crisp, color-indexed 16-bit sprites, animated battle battlers, and modular tilesets for Retro RPGs.',
    capabilities: [
      'Cel-shaded Visual Novel character sprites, expression sheets & event CGs',
      '16-bit & 32-bit pixel art sprites, 4-direction walk cycles & combat animations',
      'Auto-tile terrain sets, animated water/torch tiles, and cohesive color palettes',
      'Custom UI windowskins, pixel bitmap fonts, and ornate VN dialogue frames',
    ],
    codeSnippetTitle: 'palette_and_sprite_spec.txt',
    codeLanguage: 'text',
    codeSnippet: `PALETTE SPEC: "Midnight Astral & Mint" (32-Color Indexed)
• Deep Shadow Void:  #0B0D19  |  Twilight Slate:   #151930
• Astral Mint Glow:  #6EE7B7  |  Sakura Highlight: #F472B6
• Sprite Grid:       24x32px Overworld / 64x64px Side-View Battler
• VN Bust Export:    2048x2560px PSD -> Ren'Py LayeredImage WebP`,
  },
];
