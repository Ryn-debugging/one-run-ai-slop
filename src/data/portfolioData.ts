import {
  type GameProject,
  type SkillToolItem,
  type DialogueNode,
  type DevlogPost,
} from '../utils/portfolioLogic';

export const STUDIO_INFO = {
  defaultTitle: 'Kurohane Dev — Indie Game Portfolio',
  placeholderTemplate: '[Your Name / Studio] Portfolio',
  studioAlias: 'Ren\'Py & RPG Maker Developer',
  developerName: 'Ren Takahashi',
  roleLine: 'Technical Designer · Ren\'Py (Python) & RPG Maker (JS/Ruby)',
  tagline:
    'Independent game developer building branching visual novels in Ren\'Py and turn-based 2D RPGs in RPG Maker MZ. Focused on custom UI screens, clean event scripting, and maintainable narrative state systems.',
  location: 'Remote · PC / Steam / itch.io',
  itchUrl: 'https://itch.io',
  steamUrl: 'https://store.steampowered.com',
  githubUrl: 'https://github.com',
  twitterUrl: 'https://x.com',
  discordHandle: 'kurohane.dev',
  contactEmail: 'contact@kurohane.dev',
};

export const HERO_IMAGE_URL = '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg';

export const HERO_DIALOGUE_NODES: DialogueNode[] = [
  {
    id: 'hero-1',
    speaker: 'System Preview',
    speakerRole: 'Interactive Dialogue Component',
    accentColor: 'pink',
    text: 'This widget demonstrates how branching dialogue nodes and state flags are structured in my projects. Select an option below to inspect either workflow.',
    choices: [
      {
        label: 'View Ren\'Py UI & Python workflow',
        nextNodeId: 'hero-vn',
        affectionOrStatDelta: 'flag: renpy_spec',
      },
      {
        label: 'View RPG Maker MZ plugin & event workflow',
        nextNodeId: 'hero-rpg',
        affectionOrStatDelta: 'flag: rmmz_spec',
      },
    ],
  },
  {
    id: 'hero-vn',
    speaker: 'Ren\'Py Workflow',
    speakerRole: 'Screen Language & Python',
    accentColor: 'pink',
    text: 'Visual novel projects use custom Screen Language layouts, LayeredImage portrait definitions, and Python data dicts to track clue flags, backlog history, and route conditions.',
    choices: [
      {
        label: 'Switch to RPG Maker MZ workflow',
        nextNodeId: 'hero-rpg',
        affectionOrStatDelta: 'flag: rmmz_spec',
      },
      {
        label: 'Reset dialogue state',
        nextNodeId: 'hero-1',
        affectionOrStatDelta: 'state: reset',
      },
    ],
  },
  {
    id: 'hero-rpg',
    speaker: 'RPG Maker Workflow',
    speakerRole: 'JavaScript Plugins & Eventing',
    accentColor: 'mint',
    text: 'RPG projects combine structured Common Events with lightweight JavaScript plugins that override Window_Selectable and BattleManager for custom turn order and HUD layouts.',
    choices: [
      {
        label: 'Switch to Ren\'Py workflow',
        nextNodeId: 'hero-vn',
        affectionOrStatDelta: 'flag: renpy_spec',
      },
      {
        label: 'Reset dialogue state',
        nextNodeId: 'hero-1',
        affectionOrStatDelta: 'state: reset',
      },
    ],
  },
];

export const FEATURED_PROJECTS: GameProject[] = [
  {
    id: 'archive-protocol',
    title: 'Archive Protocol: Night Shift',
    subtitle: 'Investigative Visual Novel',
    category: 'Visual Novels',
    genreLabel: 'Visual Novel',
    engine: "Ren'Py 8.2",
    releaseYear: '2026',
    status: 'Demo Available',
    featuredSlot: 'renpy-vn',
    badges: ['Visual Novel', "Ren'Py", 'Rich Story'],
    bannerUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
    shortHook:
      'An investigative mystery visual novel featuring a custom evidence board screen, persistent clue flags across chapters, and layered character sprites.',
    synopsis:
      'Archive Protocol is a mystery visual novel built in Ren\'Py 8.2. Players review witness statements, cross-reference document logs in a custom Screen Language evidence menu, and unlock dialogue branches based on collected flags. The UI replaces the default Ren\'Py template with custom-scripted backlog, save/load, and notebook screens.',
    keyFeatures: [
      'Custom Screen Language evidence notebook that filters unlocked clues and updates character profile states',
      'LayeredImage character sprites supporting separate eye, mouth, and coat state toggles without duplicate PNGs',
      'Python state validator script that checks for unreachable labels and missing flag references at build time',
      'Custom ATL transitions for smooth camera pans, evidence popups, and textbox opacity controls',
    ],
    metrics: {
      playtime: '~3.5 Hours',
      wordCountOrMaps: '32,000 Words',
      endingsOrClasses: '3 Endings',
    },
    vnCustomUi: {
      chapterLabel: 'CHAPTER 2 · ARCHIVE DESK · CLUE CHECK',
      speaker: 'Selene (Records Clerk)',
      speakerTitle: 'LayeredImage: selene_coat_neutral',
      quote:
        '“The ledger timestamps don’t match the gate log. If I flag Entry #14 in the notebook, I can question the supervisor during the morning briefing.”',
      resonancePercent: 65,
      unlockedRouteName: 'Active Flag: ledger_discrepancy_found = True',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'archive-ss-1',
        title: 'Main Desk Investigation Screen',
        caption: 'Custom Ren\'Py Screen Language overlay displaying active document clues and dialogue controls.',
        imageUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
        sceneType: 'vn-cg',
        hudOverlayText: 'SCREEN: evidence_inspect · $ clues_unlocked = 4/6',
      },
      {
        id: 'archive-ss-2',
        title: 'Exterior Balcony Dialogue Node',
        caption: 'Multi-layer background composition using Ren\'Py camera perspective and character tinting.',
        imageUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'LABEL: ch2_balcony_talk · Condition: has_keycard == True',
      },
      {
        id: 'archive-ss-3',
        title: 'Station Platform Epilogue',
        caption: 'Route B ending sequence triggered by resolving the ledger audit before Day 4.',
        imageUrl: '/src/assets/images/game_vn_amber_rain_1793884388713.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'ENDING B · persistent.endings_seen.add("route_b")',
      },
    ],
    dialoguePreview: [
      {
        id: 'ap-1',
        speaker: 'Selene',
        speakerRole: 'Records Clerk',
        accentColor: 'pink',
        text: '“I have both the gate log and the ledger open on the desk. Which entry should I cross-reference before filing the report?”',
        choices: [
          {
            label: 'Compare timestamp on Entry #14',
            nextNodeId: 'ap-2',
            affectionOrStatDelta: '$ clue_timestamp = True',
          },
          {
            label: 'Check supervisor signature block',
            nextNodeId: 'ap-3',
            affectionOrStatDelta: '$ clue_signature = True',
          },
        ],
      },
      {
        id: 'ap-2',
        speaker: 'Selene',
        speakerRole: 'Records Clerk',
        accentColor: 'pink',
        text: '“Entry #14 was logged forty minutes after the building locked down. That unlocks the contradiction prompt for the next scene.”',
        nextNodeId: 'ap-1',
      },
      {
        id: 'ap-3',
        speaker: 'Selene',
        speakerRole: 'Records Clerk',
        accentColor: 'pink',
        text: '“The signature uses a different badge ID than the rest of the week. Added to the evidence notebook.”',
        nextNodeId: 'ap-1',
      },
    ],
  },
  {
    id: 'veridia-shard',
    title: 'Veridia Shard: Ruin Explorer',
    subtitle: 'Turn-Based 16-Bit Dungeon RPG',
    category: 'RPGs',
    genreLabel: 'Retro Pixel RPG',
    engine: 'RPG Maker MZ',
    releaseYear: '2025',
    status: 'Released',
    featuredSlot: 'rpg-maker',
    badges: ['RPG', 'RPG Maker', 'Pixel Art'],
    bannerUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
    shortHook:
      'A classic turn-based RPG built in RPG Maker MZ with visible on-map encounters, a custom CTB turn-order plugin, and puzzle-driven dungeon maps.',
    synopsis:
      'Veridia Shard is a 3-to-4 hour retro dungeon RPG developed in RPG Maker MZ. It replaces random encounters with on-map enemy events that use region-ID patrol paths, and features a custom JavaScript battle HUD plugin showing upcoming turn order, elemental shield counts, and party combo skills.',
    keyFeatures: [
      '22 hand-mapped dungeon and town areas using custom 48x48 pixel tilesets and region-based collision rules',
      'Custom RPG Maker MZ JavaScript plugin for CTB turn-order preview and elemental shield-break states',
      'Common Event camp menu allowing players to craft healing items, swap party passives, and read short party skits',
      'Clean integer-scaled 60 FPS window configuration with full gamepad and keyboard remapping',
    ],
    metrics: {
      playtime: '3–4 Hours',
      wordCountOrMaps: '22 Custom Maps',
      endingsOrClasses: '4 Party Classes',
    },
    rpgPartyStatus: [
      {
        name: 'Rowan',
        job: 'Vanguard',
        level: 12,
        hp: 240,
        maxHp: 260,
        mp: 35,
        maxMp: 45,
        equippedRelic: 'Iron Crest',
      },
      {
        name: 'Elara',
        job: 'Cleric',
        level: 12,
        hp: 180,
        maxHp: 180,
        mp: 95,
        maxMp: 110,
        equippedRelic: 'oak Staff',
      },
      {
        name: 'Kaelen',
        job: 'Scout',
        level: 11,
        hp: 205,
        maxHp: 215,
        mp: 50,
        maxMp: 60,
        equippedRelic: 'Shortbow +1',
      },
    ],
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'veridia-ss-1',
        title: 'Forest Shrine Save Point Map',
        caption: 'Map #08 using custom region-ID event triggers and a PixiJS point-light overlay on the central crystal.',
        imageUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'MAP 08 · RegionTrigger: Save & Camp Common Event #12',
      },
      {
        id: 'veridia-ss-2',
        title: 'Foundry Boss Encounter (Side-View Battle)',
        caption: 'Custom Window_BattleStatus layout and shield-break counter against the Floor 3 automaton boss.',
        imageUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
        sceneType: 'rpg-battle',
        hudOverlayText: 'BattleManager · TurnOrder: [Rowan -> Elara -> Automaton]',
      },
      {
        id: 'veridia-ss-3',
        title: 'Town Overlook Dialogue Event',
        caption: 'Integrating bust portraits with standard RPG Maker MZ message windows via plugin parameters.',
        imageUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'EVENT #04 · Show Text [Bust_Left, Window_Normal]',
      },
    ],
    dialoguePreview: [
      {
        id: 'vs-1',
        speaker: 'Rowan',
        speakerRole: 'Lv. 12 Vanguard',
        accentColor: 'mint',
        text: '“We reached the shrine save point before the boss room. Should we spend MP to unlock the shortcut gate or rest at camp first?”',
        choices: [
          {
            label: 'Activate gate switch (-10 MP)',
            nextNodeId: 'vs-2',
            affectionOrStatDelta: 'Switch #018 = ON',
          },
          {
            label: 'Run Camp Common Event (Full Recovery)',
            nextNodeId: 'vs-3',
            affectionOrStatDelta: '$gameParty.recoverAll()',
          },
        ],
      },
      {
        id: 'vs-2',
        speaker: 'Elara',
        speakerRole: 'Lv. 12 Cleric',
        accentColor: 'mint',
        text: '“Self-Switch A enabled on the bridge event. We can now bypass the outer dungeon corridor if we need to return to town.”',
        nextNodeId: 'vs-1',
      },
      {
        id: 'vs-3',
        speaker: 'Rowan',
        speakerRole: 'Lv. 12 Vanguard',
        accentColor: 'mint',
        text: '“Party HP and MP restored, and State #14 (DEF Up) applied for the next encounter.”',
        nextNodeId: 'vs-1',
      },
    ],
  },
];

export const LIBRARY_GAMES: GameProject[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'last-train-station-9',
    title: 'Last Train at Station 9',
    subtitle: 'Short Mystery Visual Novel (NanoRenO Entry)',
    category: 'Visual Novels',
    genreLabel: 'Visual Novel · Short Story',
    engine: "Ren'Py 8.2",
    releaseYear: '2025',
    status: 'Released',
    badges: ['Visual Novel', "Ren'Py", 'Game Jam'],
    bannerUrl: '/src/assets/images/game_vn_amber_rain_1793884388713.jpg',
    shortHook:
      'A 45-minute single-location visual novel built for NanoRenO, featuring an interactive audio log inventory and two branching endings.',
    synopsis:
      'Developed in four weeks for NanoRenO, Last Train at Station 9 focuses on tight scope and polished presentation. Players inspect items on a rainy train platform and use a custom-scripted cassette player screen to replay recorded ambient clues during dialogue.',
    keyFeatures: [
      '9,500 words with 2 main endings and a post-credits epilogue unlocked via `persistent` variables',
      'Custom Screen Language audio player widget that crossfades rain and train ambience channels',
      ' Clean keyboard/mouse accessibility including custom text-speed, font-toggle, and skip-unseen options',
    ],
    metrics: {
      playtime: '45 Mins',
      wordCountOrMaps: '9,500 Words',
      endingsOrClasses: '2 Endings',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'station-ss-1',
        title: 'Platform Dialogue & Rain Layer',
        caption: 'Animated rain particle displayable layered behind the character sprite and custom textbox.',
        imageUrl: '/src/assets/images/game_vn_amber_rain_1793884388713.jpg',
        sceneType: 'vn-dialogue',
        hudOverlayText: 'AUDIO BUS: ambient_rain (0.75) · sfx_train_idle (0.40)',
      },
      {
        id: 'station-ss-2',
        title: 'Clue Notebook Screen',
        caption: 'Reviewing collected ticket stubs and audio timestamps before the train departs.',
        imageUrl: '/src/assets/images/featured_renpy_vn_1793884384962.jpg',
        sceneType: 'vn-cg',
        hudOverlayText: 'SCREEN: tape_inventory · Selected: Tape_02',
      },
    ],
    dialoguePreview: [
      {
        id: 'st-1',
        speaker: 'Minori',
        speakerRole: 'Station Passenger',
        accentColor: 'pink',
        text: '“The departure board hasn’t updated since 11:30 PM. Did you find anything near the ticket booth?”',
        choices: [
          {
            label: 'Show stamped platform ticket',
            nextNodeId: 'st-2',
            affectionOrStatDelta: '$ showed_ticket = True',
          },
          {
            label: 'Ask about the station master',
            nextNodeId: 'st-3',
            affectionOrStatDelta: '$ asked_staff = True',
          },
        ],
      },
      {
        id: 'st-2',
        speaker: 'Minori',
        speakerRole: 'Station Passenger',
        accentColor: 'pink',
        text: '“That date stamp is from yesterday’s express run. Let’s check the waiting room bench next.”',
        nextNodeId: 'st-1',
      },
      {
        id: 'st-3',
        speaker: 'Minori',
        speakerRole: 'Station Passenger',
        accentColor: 'pink',
        text: '“The office light is on, but the door is locked from the inside.”',
        nextNodeId: 'st-1',
      },
    ],
  },
  {
    id: 'brass-foundry-crawler',
    title: 'Brass Foundry: Alchemist’s Trial',
    subtitle: 'Tactical Crafting RPG',
    category: 'RPGs',
    genreLabel: 'Dungeon RPG · Crafting',
    engine: 'RPG Maker MZ',
    releaseYear: '2024',
    status: 'Released',
    badges: ['RPG', 'RPG Maker', 'Crafting System'],
    bannerUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
    shortHook:
      'A compact 5-floor dungeon crawler built around a custom reagent-mixing combat plugin where skills consume crafted vials instead of MP.',
    synopsis:
      'Brass Foundry was designed to test a resource-driven combat loop in RPG Maker MZ. Instead of standard MP pools, characters carry a 6-slot reagent pouch into battle. Combining two reagents via a custom battle sub-window triggers elemental effects and status debuffs.',
    keyFeatures: [
      'Custom `Window_ReagentMix` JavaScript plugin integrated directly into `Scene_Battle`',
      '5 interconnected dungeon floors featuring push-block gear puzzles and switch-operated steam doors',
      'Balanced 90-minute campaign with 12 recipe combinations and a boss rush mode',
    ],
    metrics: {
      playtime: '1.5 Hours',
      wordCountOrMaps: '8 Dungeon Maps',
      endingsOrClasses: '12 Recipes',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'foundry-ss-1',
        title: 'Floor 3 Boss Battle & Reagent HUD',
        caption: 'Mixing two potion reagents mid-turn to apply Armor Break on the Iron Automaton.',
        imageUrl: '/src/assets/images/game_rpg_clockwork_dungeon_1793884390110.jpg',
        sceneType: 'rpg-battle',
        hudOverlayText: 'Plugin: FoundryMix.js · Recipe[Ether + Catalyst] -> ArmorBreak',
      },
      {
        id: 'foundry-ss-2',
        title: 'Lower Conduit Map',
        caption: 'Harvesting raw reagent nodes that respawn after 3 completed battles.',
        imageUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'Variable #024 (BattleCount) >= 3 -> Respawn Node',
      },
    ],
    dialoguePreview: [
      {
        id: 'bf-1',
        speaker: 'Combat Log',
        speakerRole: 'Scene_Battle Sub-Window',
        accentColor: 'mint',
        text: 'The Iron Automaton raises its guard (Physical DEF +50%). Select a reagent action from the alchemy sub-menu:',
        choices: [
          {
            label: 'Mix [Acid Vial] + [Copper Dust]',
            nextNodeId: 'bf-2',
            affectionOrStatDelta: 'Apply: Corrode (-DEF)',
          },
          {
            label: 'Use [Smoke Flask] to delay enemy turn',
            nextNodeId: 'bf-3',
            affectionOrStatDelta: 'AGI Debuff + Turn Push',
          },
        ],
      },
      {
        id: 'bf-2',
        speaker: 'Combat Log',
        speakerRole: 'Scene_Battle Sub-Window',
        accentColor: 'mint',
        text: 'Corrode applied! Enemy physical defense reduced to 0.8x for 3 turns.',
        nextNodeId: 'bf-1',
      },
      {
        id: 'bf-3',
        speaker: 'Combat Log',
        speakerRole: 'Scene_Battle Sub-Window',
        accentColor: 'mint',
        text: 'Enemy action pushed back 2 slots on the turn order bar.',
        nextNodeId: 'bf-1',
      },
    ],
  },
  {
    id: 'renpy-grid-cdd',
    title: 'Ren\'Py Grid Walker (CDD Prototype)',
    subtitle: 'Open-Source Python Displayable Module',
    category: 'Prototypes',
    genreLabel: 'Prototype · Python CDD',
    engine: "Ren'Py + Python",
    releaseYear: '2026',
    status: 'Released',
    badges: ['Prototype', "Ren'Py", 'Python CDD'],
    bannerUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
    shortHook:
      'A lightweight `renpy.Displayable` script that embeds a tile-based movement and inspection minigame inside a standard Ren\'Py project.',
    synopsis:
      'Built as a reusable utility for visual novel developers who want point-and-click or tile-based room exploration between dialogue chapters. Written in pure Python using `renpy.Render` and `pygame_sdl2` key events, requiring no external dependencies.',
    keyFeatures: [
      'Subclasses `renpy.Displayable` to handle 2D tile coordinates, collision arrays, and sprite frame stepping',
      'Returns interacted object IDs directly to the calling `.rpy` label so dialogue scripts stay clean',
      'Includes commented example project and MIT license for easy drop-in use',
    ],
    metrics: {
      playtime: '15 Mins Demo',
      wordCountOrMaps: '420 Lines Python',
      endingsOrClasses: 'MIT Open Source',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'cdd-ss-1',
        title: 'Custom Displayable Room View',
        caption: 'Rendering a sprite sheet and tile collision map inside a Ren\'Py screen frame.',
        imageUrl: '/src/assets/images/hero_vn_rpg_studio_1793884384392.jpg',
        sceneType: 'vn-cg',
        hudOverlayText: 'call screen room_explore(map_id="study") -> _return = "desk_lamp"',
      },
    ],
    dialoguePreview: [
      {
        id: 'cdd-1',
        speaker: 'CDD Debug Console',
        speakerRole: 'renpy.Displayable Event Loop',
        accentColor: 'mint',
        text: 'Player tile position: (4, 2). Facing: NORTH (Tile ID: #03 Bookshelf). Press Action to return object ID to Ren\'Py script:',
        choices: [
          {
            label: 'Interact with Tile #03 (Return "bookshelf")',
            nextNodeId: 'cdd-2',
            affectionOrStatDelta: '_return = "bookshelf"',
          },
          {
            label: 'Step East to Tile (5, 2)',
            nextNodeId: 'cdd-3',
            affectionOrStatDelta: 'pos = (5, 2)',
          },
        ],
      },
      {
        id: 'cdd-2',
        speaker: 'CDD Debug Console',
        speakerRole: 'renpy.Displayable Event Loop',
        accentColor: 'mint',
        text: 'Displayable exited cleanly with `_return = "bookshelf"`. Jumping to label `inspect_bookshelf` in `script.rpy`.',
        nextNodeId: 'cdd-1',
      },
      {
        id: 'cdd-3',
        speaker: 'CDD Debug Console',
        speakerRole: 'renpy.Displayable Event Loop',
        accentColor: 'mint',
        text: 'Collision check passed (`collision_map[2][5] == 0`). Redrawing canvas via `renpy.redraw(self, 0)`.',
        nextNodeId: 'cdd-1',
      },
    ],
  },
  {
    id: 'rmmz-lighting-hud-pack',
    title: 'RMMZ Point-Light & Bust Message Pack',
    subtitle: 'RPG Maker MZ JavaScript Plugin Utility',
    category: 'Prototypes',
    genreLabel: 'Prototype · JS Plugin',
    engine: 'RPG Maker MV',
    releaseYear: '2025',
    status: 'Released',
    badges: ['Prototype', 'JavaScript / Ruby', 'RPG Maker'],
    bannerUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
    shortHook:
      'A pair of modular JavaScript plugins for RPG Maker MZ/MV adding note-tag map lighting and VN-style message bust positioning.',
    synopsis:
      'A practical plugin testbed demonstrating clean alias hooks in RPG Maker MZ. `Kuro_MapLight.js` reads `<Light: radius, hex>` tags on map events to attach additive PixiJS light sprites, while `Kuro_BustMsg.js` aligns character bust graphics above the message window.',
    keyFeatures: [
      'Uses `@command` and `@param` annotations for native RPG Maker MZ Plugin Manager integration',
      'Preserves compatibility with other map and battle plugins by aliasing rather than overwriting core methods',
      'Includes a playable 2-map sandbox project showing all plugin commands and note-tag formats',
    ],
    metrics: {
      playtime: '20 Mins Sandbox',
      wordCountOrMaps: '2 Test Maps',
      endingsOrClasses: '2 JS Plugins',
    },
    itchUrl: 'https://itch.io',
    steamUrl: 'https://store.steampowered.com',
    screenshots: [
      {
        id: 'plug-ss-1',
        title: 'Note-Tag Point Light Test Map',
        caption: 'Testing radial light sprites attached to torch and crystal events via `<Light: 160, #6EE7B7>`.',
        imageUrl: '/src/assets/images/featured_rpg_maker_1793884387321.jpg',
        sceneType: 'rpg-map',
        hudOverlayText: 'Event Note: <Light: 160, #6EE7B7> · BlendMode: PIXI.BLEND_MODES.ADD',
      },
    ],
    dialoguePreview: [
      {
        id: 'pl-1',
        speaker: 'Plugin Sandbox',
        speakerRole: 'PluginManager Command Tester',
        accentColor: 'mint',
        text: 'Select a plugin command to test how `Spriteset_Map` updates in real time:',
        choices: [
          {
            label: 'PluginCommand: SetMapTint (#0B0D19, 60 frames)',
            nextNodeId: 'pl-2',
            affectionOrStatDelta: 'Tint Updated',
          },
          {
            label: 'PluginCommand: ShowBust ("elara_smile", "right")',
            nextNodeId: 'pl-3',
            affectionOrStatDelta: 'Bust Sprite Loaded',
          },
        ],
      },
      {
        id: 'pl-2',
        speaker: 'Plugin Sandbox',
        speakerRole: 'PluginManager Command Tester',
        accentColor: 'mint',
        text: 'Ambient darkness layer interpolated over 60 frames; event point-lights remain additive.',
        nextNodeId: 'pl-1',
      },
      {
        id: 'pl-3',
        speaker: 'Plugin Sandbox',
        speakerRole: 'PluginManager Command Tester',
        accentColor: 'mint',
        text: 'Loaded `img/pictures/elara_smile.png` anchored to `Window_Message` top-right edge.',
        nextNodeId: 'pl-1',
      },
    ],
  },
];

export const SKILLS_AND_TOOLS: SkillToolItem[] = [
  {
    id: 'skill-renpy',
    name: "Ren'Py (Screen Language & ATL)",
    category: 'Core Engine',
    accent: 'pink',
    experienceYears: 'Ren\'Py 8.x · Python 3',
    summary:
      'Building custom visual novel UI screens, non-standard menus, and layered sprite definitions using Ren\'Py Screen Language and Animation & Transformation Language (ATL).',
    capabilities: [
      'Custom Screen Language layouts for save/load, backlog, and evidence notebooks',
      'LayeredImage sprite setups (expressions, outfits, auto-blink displayables)',
      'ATL transforms for camera movement, transitions, and UI hover states',
      'Persistent variables and multi-route conditional state tracking',
    ],
    codeSnippetTitle: 'screens_evidence.rpy',
    codeLanguage: 'renpy',
    codeSnippet: `screen evidence_notebook(clue_list):
    tag menu
    modal True
    frame:
        style_prefix "notebook"
        xsize 860 ysize 540 xalign 0.5 yalign 0.5
        has hbox:
            spacing 24
        vbox:
            xsize 280 spacing 8
            label "Collected Clues"
            for item in clue_list:
                textbutton item.title:
                    selected (selected_clue == item)
                    action SetScreenVariable("selected_clue", item)`,
  },
  {
    id: 'skill-rpgmaker',
    name: 'RPG Maker (MZ / MV / VX Ace)',
    category: 'Core Engine',
    accent: 'mint',
    experienceYears: 'MZ / MV / VX Ace',
    summary:
      'Structuring clean Common Event systems, database combat formulas, and multi-layer tileset maps with region-based triggers and custom window layouts.',
    capabilities: [
      'Common Event state machines for camp menus, crafting, and quest logs',
      'Custom damage formulas, state buffs, and turn-based skill balancing',
      'Parallax & tileset mapping with passability flags and Region IDs',
      ' Web/PC deployment packaging and audio/image asset optimization',
    ],
    codeSnippetTitle: 'CommonEvent_CampMenu.txt',
    codeLanguage: 'text',
    codeSnippet: `// Common Event #012: Shrine Camp & Crafting Check
◆If：Script: $gameMap.regionId($gamePlayer.x, $gamePlayer.y) === 10
  ◆Show Choices：Rest & Save, Craft Reagents, Cancel (Window, Right, #1, #3)
  ：When Rest & Save
    ◆Play SE：Recovery (90, 100, 0)
    ◆Recover All：Entire Party
    ◆Open Save Screen
  ：When Craft Reagents
    ◆Plugin Command：Kuro_Alchemy, OpenCraftingScene`,
  },
  {
    id: 'skill-python',
    name: 'Python (Ren\'Py Scripting)',
    category: 'Scripting & Code',
    accent: 'pink',
    experienceYears: 'Python 3 · Custom Modules',
    summary:
      'Writing Python modules inside `init python:` blocks and `_ren.py` files for custom data structures, `renpy.Displayable` minigames, and dialogue callbacks.',
    capabilities: [
      'Creator-Defined Displayables (`renpy.Displayable`) for interactive 2D widgets',
      'Data classes for inventory items, clue graphs, and character relationship stats',
      'Character callbacks for dynamic text blips and speaker portrait highlighting',
      'Build-time validation scripts to catch broken jumps or missing image tags',
    ],
    codeSnippetTitle: 'clue_manager_ren.py',
    codeLanguage: 'python',
    codeSnippet: `"""renpy
init -5 python:
"""
from dataclasses import dataclass

@dataclass
class ClueItem:
    id: str
    title: str
    desc: str
    unlocked: bool = False

def unlock_clue(registry: dict, clue_id: str) -> None:
    if clue_id in registry and not registry[clue_id].unlocked:
        registry[clue_id].unlocked = True
        renpy.notify(f"Notebook updated: {registry[clue_id].title}")`,
  },
  {
    id: 'skill-js-ruby',
    name: 'JavaScript / Ruby (RPG Maker Plugins)',
    category: 'Scripting & Code',
    accent: 'mint',
    experienceYears: 'ES6+ JS (PIXI) · Ruby RGSS3',
    summary:
      'Developing modular JavaScript plugins for RPG Maker MZ/MV and Ruby (RGSS3) scripts for VX Ace by cleanly aliasing core `Window_*`, `Scene_*`, and `BattleManager` methods.',
    capabilities: [
      'RPG Maker MZ plugin headers (`@param`, `@command`) and `PluginManager.registerCommand`',
      'Customizing `Window_Selectable`, `Window_BattleStatus`, and HUD sprites',
      'PixiJS sprite containers and blend modes for map lighting overlays',
      'Maintaining conflict-free method aliases across multi-plugin load orders',
    ],
    codeSnippetTitle: 'Kuro_TurnOrderHud.js',
    codeLanguage: 'javascript',
    codeSnippet: `/*:
 * @target MZ
 * @plugindesc v1.2 Displays a compact turn-order bar in Scene_Battle.
 * @command RefreshTurnBar
 */
(() => {
  const PLUGIN_NAME = "Kuro_TurnOrderHud";
  PluginManager.registerCommand(PLUGIN_NAME, "RefreshTurnBar", () => {
    const scene = SceneManager._scene;
    if (scene instanceof Scene_Battle && scene._turnOrderWindow) {
      scene._turnOrderWindow.refresh();
    }
  });
})();`,
  },
  {
    id: 'skill-writing',
    name: 'Narrative Design & Dialogue Scripting',
    category: 'Creative Craft',
    accent: 'pink',
    experienceYears: 'Branching Scripts · Pacing',
    summary:
      'Writing clear, well-paced dialogue and structuring branching flowcharts where player choices track cleanly through boolean flags and integer variables.',
    capabilities: [
      'Readable `.rpy` script organization using scoped labels and local variables',
      'Mystery clue progression and conditional dialogue options (`if flag:`)',
      'Concise RPG NPC dialogue, item descriptions, and party camp banter',
      'String extraction and translation-ready script formatting (`renpy.translate`)',
    ],
    codeSnippetTitle: 'ch2_interrogation.rpy',
    codeLanguage: 'renpy',
    codeSnippet: `label ch2_supervisor_briefing:
    show selene coat_neutral at left
    selene "I finished auditing the night shift gate logs."

    menu:
        "Point out the 40-minute gap in Entry #14" if clue_timestamp:
            $ supervisor_pressured = True
            jump ch2_contradiction_resolved

        "Hand over the standard summary report":
            jump ch2_standard_close`,
  },
  {
    id: 'skill-art',
    name: '2D Asset Pipeline & Pixel Art',
    category: 'Creative Craft',
    accent: 'mint',
    experienceYears: 'Aseprite · Clip Studio Paint',
    summary:
      'Preparing game-ready visual assets: color-indexed pixel art tilesets, 3-frame walk cycles, custom windowskins, and sliced PSD character layers for Ren\'Py.',
    capabilities: [
      '48x48 and 16x16 pixel tilesets formatted for RPG Maker auto-tile standards',
      'Character sprite sheets, side-view battler frames, and icon sets in Aseprite',
      'Slicing layered character portraits into optimized WebP assets for Ren\'Py',
      'Custom 9-slice UI frames, bitmap fonts, and `Window.png` skins',
    ],
    codeSnippetTitle: 'sprites_selene.rpy',
    codeLanguage: 'renpy',
    codeSnippet: `layeredimage selene:
    always:
        "images/sprites/selene/base_body.webp"
    group outfit:
        attribute coat default:
            "images/sprites/selene/outfit_coat.webp"
    group eyes:
        attribute neutral default:
            "images/sprites/selene/eyes_neutral.webp"
        attribute serious:
            "images/sprites/selene/eyes_serious.webp"`,
  },
];

export const DEVLOG_POSTS: DevlogPost[] = [
  {
    id: 'devlog-renpy-ui',
    title: 'Structuring an Evidence Notebook in Ren\'Py Screen Language',
    date: 'October 2026',
    readTime: '4 min read',
    engineTag: "Ren'Py 8.2",
    accent: 'pink',
    summary:
      'How to separate clue data from UI presentation using Python `@dataclass` objects and `SetScreenVariable` in Ren\'Py 8.',
    keyTakeaways: [
      'Store clue definitions in a Python dictionary so save files only serialize small ID strings or booleans',
      'Use `SetScreenVariable` inside the notebook screen to avoid polluting global narrative variables',
      'Bind `present_clue` actions to return the selected clue ID directly to the active dialogue label',
    ],
    codeSnippet: `init python:
    def get_unlocked_clues(clue_dict):
        return [c for c in clue_dict.values() if c.unlocked]`,
    articleBody: [
      'When building a mystery visual novel in Ren\'Py, it is tempting to hardcode clue descriptions directly inside `screens.rpy` using dozens of `if` statements. However, that approach quickly becomes difficult to maintain once a project grows past a few chapters.',
      'Instead, defining a lightweight Python `@dataclass` for clues lets you pass a filtered list into a single reusable `screen evidence_notebook(clues)`. The screen handles layout and selection state locally, keeping both your UI code and narrative scripts clean.',
    ],
  },
  {
    id: 'devlog-mz-plugins',
    title: 'Writing Conflict-Free Window Aliases in RPG Maker MZ',
    date: 'August 2026',
    readTime: '5 min read',
    engineTag: 'RPG Maker MZ',
    accent: 'mint',
    summary:
      'Best practices for extending `Scene_Battle` and `Window_Selectable` in JavaScript without breaking other plugins in the load order.',
    keyTakeaways: [
      'Always store a reference to the original prototype method before overriding it',
      'Parse note-tags once during `DataManager.onLoad` or `Game_Event.initialize` rather than every frame',
      'Use `PluginManager.registerCommand` with typed arguments instead of legacy `Game_Interpreter.pluginCommand` strings',
    ],
    codeSnippet: `const _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
  _Scene_Battle_createAllWindows.call(this);
  this.createCustomTurnWindow();
};`,
    articleBody: [
      'In RPG Maker MZ, the core engine is exposed as readable ES6 classes (`Window_Base`, `Scene_Map`, `BattleManager`). The most common cause of plugin conflicts is overwriting a prototype method completely instead of calling the original implementation via `.call(this)`.',
      'By wrapping your plugin inside an IIFE and aliasing `Scene_Battle.prototype.createAllWindows`, your custom HUD windows mount cleanly alongside third-party battle plugins.',
    ],
  },
  {
    id: 'devlog-asset-pipeline',
    title: 'Optimizing Layered Character Sprites and 48x48 Tilesets',
    date: 'June 2026',
    readTime: '4 min read',
    engineTag: 'Pixel Art & Shaders',
    accent: 'pink',
    summary:
      'Practical export settings for WebP visual novel portraits and indexed PNG tilesets to keep game download sizes small.',
    keyTakeaways: [
      'Export Ren\'Py `LayeredImage` parts as lossless or 90%-quality WebP to cut archive size by ~65% vs PNG',
      'Keep RPG Maker MZ auto-tiles on a strict 48x48 grid (with 24x24 sub-tile corners) to prevent seam artifacts',
      'Share a consistent dark-indigo shadow ramp (#0B0D19 to #1E2544) across both pixel art and UI windowskins',
    ],
    codeSnippet: `# Batch convert cropped sprite layers to WebP
cwebp -q 90 -alpha_q 100 outfit_coat.png -o outfit_coat.webp`,
    articleBody: [
      'Visual novels with multiple outfits and expressions can easily bloat to hundreds of megabytes if every combination is exported as a full-frame PNG. Using Ren\'Py’s `layeredimage` system with cropped WebP layers reduces both disk usage and VRAM footprint.',
      'For RPG Maker projects, maintaining an indexed palette in Aseprite ensures that dungeon tiles, character sprites, and custom window frames share cohesive contrast without muddy midtones.',
    ],
  },
];
