// styles.js — Visual theme pool for Eric's birthday quiz.
// Each load picks a random style, so the quiz feels fresh every time.

export const styles = [

  // ─── 1. Pub Quiz ───────────────────────────────────────────────
  {
    name: "pub-quiz",
    displayName: "The Pub Quiz",
    vars: {
      '--bg-primary':     '#2d4a22',
      '--bg-secondary':   '#1a2e15',
      '--text-primary':   '#f0e6d3',
      '--text-secondary': '#c8b898',
      '--accent':         '#d4a843',
      '--correct':        '#4caf50',
      '--incorrect':      '#e74c3c',
      '--button-bg':      '#3a5a2e',
      '--button-hover':   '#4a6a3e',
      '--button-text':    '#f0e6d3',
      '--border-color':   '#5a7a4e',
      '--font-heading':   "'Georgia', serif",
      '--font-body':      "'Georgia', serif",
      '--border-radius':  '4px',
    },
    extraCSS: `
      body {
        background:
          linear-gradient(135deg, rgba(0,0,0,0.15) 25%, transparent 25%),
          linear-gradient(225deg, rgba(0,0,0,0.15) 25%, transparent 25%),
          linear-gradient(315deg, rgba(0,0,0,0.15) 25%, transparent 25%),
          linear-gradient(45deg,  rgba(0,0,0,0.15) 25%, transparent 25%),
          var(--bg-primary);
        background-size: 20px 20px;
      }
      [data-theme="pub-quiz"] h1,
      [data-theme="pub-quiz"] h2 {
        text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
        letter-spacing: 0.05em;
      }
      [data-theme="pub-quiz"] .quiz-card {
        border: 2px dashed var(--border-color);
        box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
      }
    `,
    subtitle: "Grab a pint and test your knowledge!",
  },

  // ─── 2. Birthday Party ────────────────────────────────────────
  {
    name: "birthday-party",
    displayName: "Birthday Bash!",
    vars: {
      '--bg-primary':     '#ffe0f0',
      '--bg-secondary':   '#fff0f5',
      '--text-primary':   '#2d1b4e',
      '--text-secondary': '#6b3fa0',
      '--accent':         '#ff6b9d',
      '--correct':        '#22c55e',
      '--incorrect':      '#ef4444',
      '--button-bg':      '#ff6b9d',
      '--button-hover':   '#ff85b1',
      '--button-text':    '#ffffff',
      '--border-color':   '#f0b0d0',
      '--font-heading':   "'Trebuchet MS', 'Comic Sans MS', cursive",
      '--font-body':      "'Trebuchet MS', 'Comic Sans MS', sans-serif",
      '--border-radius':  '16px',
    },
    extraCSS: `
      [data-theme="birthday-party"] body {
        background:
          radial-gradient(circle at 15% 20%, #ffdd57 2px, transparent 2px),
          radial-gradient(circle at 85% 10%, #ff6b9d 3px, transparent 3px),
          radial-gradient(circle at 50% 80%, #56d9fe 2px, transparent 2px),
          radial-gradient(circle at 25% 60%, #a78bfa 2px, transparent 2px),
          radial-gradient(circle at 75% 40%, #34d399 3px, transparent 3px),
          radial-gradient(circle at 40% 30%, #f87171 2px, transparent 2px),
          radial-gradient(circle at 60% 70%, #fbbf24 2px, transparent 2px),
          radial-gradient(circle at 10% 90%, #60a5fa 3px, transparent 3px),
          radial-gradient(circle at 90% 85%, #c084fc 2px, transparent 2px),
          var(--bg-primary);
        background-size: 200px 200px;
      }
      [data-theme="birthday-party"] h1 {
        background: linear-gradient(90deg, #ff6b9d, #ffdd57, #56d9fe, #a78bfa, #ff6b9d);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: birthday-shimmer 3s linear infinite;
      }
      @keyframes birthday-shimmer {
        to { background-position: 200% center; }
      }
      [data-theme="birthday-party"] .quiz-card {
        border: 3px solid var(--accent);
        box-shadow: 0 8px 24px rgba(255,107,157,0.2);
      }
    `,
    subtitle: "Happy Birthday, Eric! Let's celebrate with a quiz!",
  },

  // ─── 3. Game Show ─────────────────────────────────────────────
  {
    name: "game-show",
    displayName: "The Birthday Game Show",
    vars: {
      '--bg-primary':     '#0a1628',
      '--bg-secondary':   '#111d35',
      '--text-primary':   '#ffffff',
      '--text-secondary': '#a0c4ff',
      '--accent':         '#ffd700',
      '--correct':        '#00e676',
      '--incorrect':      '#ff1744',
      '--button-bg':      '#1a3a6a',
      '--button-hover':   '#2a4a8a',
      '--button-text':    '#ffd700',
      '--border-color':   '#2a4a7a',
      '--font-heading':   "'Impact', 'Arial Black', sans-serif",
      '--font-body':      "'Segoe UI', 'Helvetica Neue', sans-serif",
      '--border-radius':  '8px',
    },
    extraCSS: `
      [data-theme="game-show"] body {
        background:
          radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 50%, rgba(100,149,237,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 50%, rgba(100,149,237,0.08) 0%, transparent 50%),
          var(--bg-primary);
      }
      [data-theme="game-show"] h1 {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-shadow:
          0 0 10px rgba(255,215,0,0.5),
          0 0 30px rgba(255,215,0,0.3),
          0 0 60px rgba(255,215,0,0.1);
        color: var(--accent);
      }
      [data-theme="game-show"] .quiz-card {
        border: 2px solid var(--accent);
        background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(10,22,40,0.95) 100%);
        box-shadow:
          0 0 15px rgba(255,215,0,0.1),
          inset 0 1px 0 rgba(255,215,0,0.1);
      }
      [data-theme="game-show"] button {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: bold;
      }
    `,
    subtitle: "It's the final answer... for your birthday!",
  },

  // ─── 4. Vintage Telegram ──────────────────────────────────────
  {
    name: "vintage-telegram",
    displayName: "Birthday Telegram",
    vars: {
      '--bg-primary':     '#f5e6c8',
      '--bg-secondary':   '#eedcb3',
      '--text-primary':   '#2c1810',
      '--text-secondary': '#5a3825',
      '--accent':         '#8b4513',
      '--correct':        '#2e7d32',
      '--incorrect':      '#b71c1c',
      '--button-bg':      '#8b4513',
      '--button-hover':   '#a0522d',
      '--button-text':    '#f5e6c8',
      '--border-color':   '#8b7355',
      '--font-heading':   "'Courier New', Courier, monospace",
      '--font-body':      "'Courier New', Courier, monospace",
      '--border-radius':  '0px',
    },
    extraCSS: `
      [data-theme="vintage-telegram"] body {
        background:
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            rgba(139,115,85,0.15) 28px,
            rgba(139,115,85,0.15) 29px
          ),
          var(--bg-primary);
      }
      [data-theme="vintage-telegram"] h1 {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        border-top: 3px double var(--text-primary);
        border-bottom: 3px double var(--text-primary);
        padding: 0.5em 0;
      }
      [data-theme="vintage-telegram"] h1::before {
        content: "=== ";
      }
      [data-theme="vintage-telegram"] h1::after {
        content: " ===";
      }
      [data-theme="vintage-telegram"] .quiz-card {
        border: 2px solid var(--border-color);
        position: relative;
      }
      [data-theme="vintage-telegram"] .quiz-card::before {
        content: "--- STOP ---";
        display: block;
        text-align: center;
        font-size: 0.7em;
        letter-spacing: 0.3em;
        color: var(--text-secondary);
        margin-bottom: 0.5em;
      }
    `,
    subtitle: "BIRTHDAY GREETINGS STOP QUIZ COMMENCES STOP",
  },

  // ─── 5. Scottish Highland ─────────────────────────────────────
  {
    name: "scottish-highland",
    displayName: "Highland Gathering",
    vars: {
      '--bg-primary':     '#2a3c2a',
      '--bg-secondary':   '#1e2e1e',
      '--text-primary':   '#f0ead6',
      '--text-secondary': '#c9b8a0',
      '--accent':         '#9b59b6',
      '--correct':        '#27ae60',
      '--incorrect':      '#c0392b',
      '--button-bg':      '#4a2c6a',
      '--button-hover':   '#5a3c7a',
      '--button-text':    '#f0ead6',
      '--border-color':   '#6a4a8a',
      '--font-heading':   "'Georgia', 'Palatino Linotype', serif",
      '--font-body':      "'Georgia', 'Palatino Linotype', serif",
      '--border-radius':  '2px',
    },
    extraCSS: `
      [data-theme="scottish-highland"] body {
        background:
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            rgba(155,89,182,0.08) 20px,
            rgba(155,89,182,0.08) 21px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(155,89,182,0.08) 20px,
            rgba(155,89,182,0.08) 21px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(39,174,96,0.06) 40px,
            rgba(39,174,96,0.06) 42px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(39,174,96,0.06) 40px,
            rgba(39,174,96,0.06) 42px
          ),
          var(--bg-primary);
      }
      [data-theme="scottish-highland"] h1 {
        font-variant: small-caps;
        letter-spacing: 0.08em;
        border-bottom: 3px solid var(--accent);
        padding-bottom: 0.3em;
      }
      [data-theme="scottish-highland"] .quiz-card {
        border-left: 4px solid var(--accent);
        border-right: 4px solid var(--accent);
      }
    `,
    subtitle: "Slàinte mhath! Let's see what ye know, laddie!",
  },

  // ─── 6. Casino Night ──────────────────────────────────────────
  {
    name: "casino-night",
    displayName: "Casino Royale Birthday",
    vars: {
      '--bg-primary':     '#0d5e2e',
      '--bg-secondary':   '#0a4a24',
      '--text-primary':   '#ffd700',
      '--text-secondary': '#e6c200',
      '--accent':         '#ff2d55',
      '--correct':        '#00ff88',
      '--incorrect':      '#ff4444',
      '--button-bg':      '#1a1a2e',
      '--button-hover':   '#2a2a4e',
      '--button-text':    '#ffd700',
      '--border-color':   '#ffd700',
      '--font-heading':   "'Georgia', 'Palatino', serif",
      '--font-body':      "'Segoe UI', 'Helvetica Neue', sans-serif",
      '--border-radius':  '8px',
    },
    extraCSS: `
      [data-theme="casino-night"] body {
        background:
          radial-gradient(ellipse at 50% 50%, rgba(13,94,46,1) 0%, rgba(5,40,18,1) 100%);
        background-size: cover;
        position: relative;
      }
      [data-theme="casino-night"] body::after {
        content: "";
        position: fixed;
        inset: 0;
        background:
          repeating-conic-gradient(
            rgba(255,255,255,0.02) 0deg 10deg,
            transparent 10deg 20deg
          );
        pointer-events: none;
        z-index: 0;
      }
      [data-theme="casino-night"] h1 {
        text-shadow:
          0 0 10px rgba(255,215,0,0.5),
          0 0 20px rgba(255,215,0,0.3);
        letter-spacing: 0.05em;
      }
      [data-theme="casino-night"] .quiz-card {
        border: 1px solid var(--border-color);
        background: rgba(10,30,15,0.85);
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      [data-theme="casino-night"] .quiz-card::before {
        content: "\\2660  \\2665  \\2666  \\2663";
        display: block;
        text-align: center;
        font-size: 1.2em;
        letter-spacing: 0.5em;
        color: var(--accent);
        margin-bottom: 0.5em;
        opacity: 0.6;
      }
    `,
    subtitle: "Place your bets! The birthday stakes are high!",
  },

  // ─── 7. Retro Computing ───────────────────────────────────────
  {
    name: "retro-computing",
    displayName: "C:\\BIRTHDAY\\QUIZ.EXE",
    vars: {
      '--bg-primary':     '#0a0a0a',
      '--bg-secondary':   '#111111',
      '--text-primary':   '#33ff33',
      '--text-secondary': '#22aa22',
      '--accent':         '#00ff00',
      '--correct':        '#33ff33',
      '--incorrect':      '#ff3333',
      '--button-bg':      '#1a1a1a',
      '--button-hover':   '#2a2a2a',
      '--button-text':    '#33ff33',
      '--border-color':   '#33ff33',
      '--font-heading':   "'Courier New', Courier, monospace",
      '--font-body':      "'Courier New', Courier, monospace",
      '--border-radius':  '0px',
    },
    extraCSS: `
      [data-theme="retro-computing"] body {
        background: var(--bg-primary);
        position: relative;
      }
      [data-theme="retro-computing"] body::before {
        content: "";
        position: fixed;
        inset: 0;
        background: repeating-linear-gradient(
          0deg,
          rgba(0,255,0,0.03) 0px,
          rgba(0,255,0,0.03) 1px,
          transparent 1px,
          transparent 3px
        );
        pointer-events: none;
        z-index: 1;
      }
      [data-theme="retro-computing"] body::after {
        content: "";
        position: fixed;
        inset: 0;
        background: radial-gradient(
          ellipse at 50% 50%,
          transparent 60%,
          rgba(0,0,0,0.4) 100%
        );
        pointer-events: none;
        z-index: 2;
      }
      [data-theme="retro-computing"] * {
        text-shadow: 0 0 5px rgba(51,255,51,0.5);
      }
      [data-theme="retro-computing"] h1::before {
        content: "C:\\\\> ";
      }
      [data-theme="retro-computing"] .quiz-card {
        border: 1px solid var(--border-color);
        box-shadow: 0 0 10px rgba(51,255,51,0.1);
      }
    `,
    subtitle: "LOADING BIRTHDAY_QUIZ.DAT... READY.",
  },

  // ─── 8. Newspaper ─────────────────────────────────────────────
  {
    name: "newspaper",
    displayName: "The Birthday Herald",
    vars: {
      '--bg-primary':     '#f4f1ea',
      '--bg-secondary':   '#eae5d8',
      '--text-primary':   '#1a1a1a',
      '--text-secondary': '#4a4a4a',
      '--accent':         '#8b0000',
      '--correct':        '#2e7d32',
      '--incorrect':      '#b71c1c',
      '--button-bg':      '#1a1a1a',
      '--button-hover':   '#333333',
      '--button-text':    '#f4f1ea',
      '--border-color':   '#1a1a1a',
      '--font-heading':   "'Georgia', 'Times New Roman', serif",
      '--font-body':      "'Georgia', 'Times New Roman', serif",
      '--border-radius':  '0px',
    },
    extraCSS: `
      [data-theme="newspaper"] body {
        background: var(--bg-primary);
      }
      [data-theme="newspaper"] h1 {
        font-variant: small-caps;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        border-top: 4px double var(--text-primary);
        border-bottom: 2px solid var(--text-primary);
        padding: 0.3em 0;
        text-align: center;
      }
      [data-theme="newspaper"] h1::before {
        content: "EXTRA! EXTRA! ";
        font-size: 0.5em;
        display: block;
        letter-spacing: 0.3em;
        color: var(--accent);
      }
      [data-theme="newspaper"] .quiz-card {
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        padding-left: 1.5em;
        position: relative;
      }
      [data-theme="newspaper"] .quiz-card::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background: var(--border-color);
      }
    `,
    subtitle: "Read all about it! Birthday boy faces quiz challenge!",
  },

  // ─── 9. Neon Synthwave ────────────────────────────────────────
  {
    name: "neon-synthwave",
    displayName: "Synthwave Birthday",
    vars: {
      '--bg-primary':     '#0f0024',
      '--bg-secondary':   '#1a0033',
      '--text-primary':   '#f0e0ff',
      '--text-secondary': '#c090ee',
      '--accent':         '#ff00ff',
      '--correct':        '#00ff88',
      '--incorrect':      '#ff2266',
      '--button-bg':      '#2a0050',
      '--button-hover':   '#3a0070',
      '--button-text':    '#ff00ff',
      '--border-color':   '#8800cc',
      '--font-heading':   "'Impact', 'Arial Black', sans-serif",
      '--font-body':      "'Segoe UI', 'Helvetica Neue', sans-serif",
      '--border-radius':  '4px',
    },
    extraCSS: `
      [data-theme="neon-synthwave"] body {
        background:
          linear-gradient(180deg,
            #0f0024 0%,
            #1a0044 40%,
            #2a0055 60%,
            #0f0024 100%
          );
        background-attachment: fixed;
      }
      [data-theme="neon-synthwave"] body::before {
        content: "";
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 40%;
        background:
          repeating-linear-gradient(
            90deg,
            rgba(255,0,255,0.05) 0px,
            rgba(255,0,255,0.05) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(255,0,255,0.08) 0px,
            rgba(255,0,255,0.08) 1px,
            transparent 1px,
            transparent 40px
          );
        transform: perspective(400px) rotateX(45deg);
        transform-origin: bottom;
        pointer-events: none;
        z-index: 0;
      }
      [data-theme="neon-synthwave"] h1 {
        text-shadow:
          0 0 7px #ff00ff,
          0 0 20px #ff00ff,
          0 0 40px #cc00cc,
          0 0 80px #8800aa;
        color: #ff00ff;
      }
      [data-theme="neon-synthwave"] .quiz-card {
        border: 1px solid var(--border-color);
        box-shadow: 0 0 15px rgba(255,0,255,0.2), 0 0 30px rgba(136,0,204,0.1);
      }
    `,
    subtitle: "Radical birthday vibes! Let's ride the neon wave!",
  },

  // ─── 10. Treasure Map ─────────────────────────────────────────
  {
    name: "treasure-map",
    displayName: "Birthday Treasure Hunt",
    vars: {
      '--bg-primary':     '#d4b896',
      '--bg-secondary':   '#c4a878',
      '--text-primary':   '#3e2723',
      '--text-secondary': '#5d4037',
      '--accent':         '#bf360c',
      '--correct':        '#2e7d32',
      '--incorrect':      '#b71c1c',
      '--button-bg':      '#5d4037',
      '--button-hover':   '#6d5047',
      '--button-text':    '#f5e6c8',
      '--border-color':   '#795548',
      '--font-heading':   "'Georgia', 'Palatino', serif",
      '--font-body':      "'Georgia', serif",
      '--border-radius':  '6px',
    },
    extraCSS: `
      [data-theme="treasure-map"] body {
        background:
          radial-gradient(ellipse at 20% 80%, rgba(139,69,19,0.15), transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(139,69,19,0.1), transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(160,120,60,0.05), transparent 70%),
          var(--bg-primary);
      }
      [data-theme="treasure-map"] h1 {
        font-style: italic;
        border-bottom: 2px solid var(--accent);
        position: relative;
      }
      [data-theme="treasure-map"] h1::after {
        content: " \\2620";
        font-style: normal;
      }
      [data-theme="treasure-map"] .quiz-card {
        border: 2px solid var(--border-color);
        background: rgba(212,184,150,0.7);
        box-shadow: 3px 3px 0 rgba(0,0,0,0.15);
        position: relative;
      }
      [data-theme="treasure-map"] .quiz-card::after {
        content: "X";
        position: absolute;
        top: -8px;
        right: -8px;
        font-size: 1.5em;
        color: var(--accent);
        font-weight: bold;
        opacity: 0.3;
      }
    `,
    subtitle: "X marks the spot! Can ye find the birthday treasure?",
  },

];


/**
 * Pick a random style from the pool.
 * @returns {object} A style object.
 */
export function getRandomStyle() {
  const index = Math.floor(Math.random() * styles.length);
  return styles[index];
}


/**
 * Apply a style object to the current document.
 * Sets CSS custom properties on :root, injects extraCSS, and
 * sets a data-theme attribute for selector-based overrides.
 *
 * @param {object} styleObj - One of the style objects from the `styles` array.
 */
export function applyStyle(styleObj) {
  const root = document.documentElement;

  // Set data-theme for CSS selector targeting
  root.setAttribute('data-theme', styleObj.name);

  // Apply CSS custom properties
  for (const [prop, value] of Object.entries(styleObj.vars)) {
    root.style.setProperty(prop, value);
  }

  // Inject or replace extra CSS
  let styleEl = document.getElementById('theme-extra-css');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'theme-extra-css';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = styleObj.extraCSS || '';
}
