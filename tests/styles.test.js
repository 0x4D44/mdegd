import { describe, it, expect, beforeEach } from 'vitest';
import { styles, getRandomStyle, applyStyle } from '../src/styles.js';

// --- Required CSS custom properties every style must define ---

const REQUIRED_VARS = [
  '--bg-primary',
  '--bg-secondary',
  '--text-primary',
  '--text-secondary',
  '--accent',
  '--correct',
  '--incorrect',
  '--button-bg',
  '--button-hover',
  '--button-text',
  '--border-color',
  '--font-heading',
  '--font-body',
  '--border-radius',
];

// --- styles array ---

describe("styles array", () => {
  it("contains at least 8 styles", () => {
    expect(styles.length).toBeGreaterThanOrEqual(8);
  });

  it("every style has a unique name", () => {
    const names = styles.map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("every style has required top-level fields", () => {
    for (const style of styles) {
      expect(style).toHaveProperty("name");
      expect(style).toHaveProperty("displayName");
      expect(style).toHaveProperty("vars");
      expect(style).toHaveProperty("subtitle");
      expect(typeof style.name).toBe("string");
      expect(typeof style.displayName).toBe("string");
      expect(typeof style.vars).toBe("object");
      expect(typeof style.subtitle).toBe("string");
      expect(style.name.length).toBeGreaterThan(0);
      expect(style.displayName.length).toBeGreaterThan(0);
      expect(style.subtitle.length).toBeGreaterThan(0);
    }
  });

  it("every style defines all required CSS custom properties", () => {
    for (const style of styles) {
      for (const prop of REQUIRED_VARS) {
        expect(style.vars).toHaveProperty(prop,
          expect.any(String),
        );
      }
    }
  });

  it("every style has extraCSS as a string (or undefined)", () => {
    for (const style of styles) {
      if (style.extraCSS !== undefined) {
        expect(typeof style.extraCSS).toBe("string");
      }
    }
  });
});

// --- getRandomStyle ---

describe("getRandomStyle", () => {
  it("returns a style object from the styles array", () => {
    const style = getRandomStyle();
    expect(styles).toContainEqual(style);
  });

  it("returned style has all required CSS custom properties", () => {
    const style = getRandomStyle();
    for (const prop of REQUIRED_VARS) {
      expect(style.vars).toHaveProperty(prop);
    }
  });

  it("returned style has required top-level fields", () => {
    const style = getRandomStyle();
    expect(style).toHaveProperty("name");
    expect(style).toHaveProperty("displayName");
    expect(style).toHaveProperty("vars");
    expect(style).toHaveProperty("subtitle");
  });
});

// --- applyStyle ---

describe("applyStyle", () => {
  beforeEach(() => {
    // Clean up any injected style elements and CSS properties
    const existing = document.getElementById("theme-extra-css");
    if (existing) existing.remove();

    // Clear custom properties from previous tests
    for (const prop of REQUIRED_VARS) {
      document.documentElement.style.removeProperty(prop);
    }
    document.documentElement.removeAttribute("data-theme");
  });

  it("sets CSS custom properties on document.documentElement", () => {
    const style = styles[0];
    applyStyle(style);

    for (const [prop, value] of Object.entries(style.vars)) {
      expect(document.documentElement.style.getPropertyValue(prop)).toBe(value);
    }
  });

  it("sets data-theme attribute on document.documentElement", () => {
    const style = styles[0];
    applyStyle(style);
    expect(document.documentElement.getAttribute("data-theme")).toBe(style.name);
  });

  it("injects extraCSS into a style element", () => {
    const styleWithExtra = styles.find((s) => s.extraCSS && s.extraCSS.trim().length > 0);
    if (!styleWithExtra) return; // skip if no styles have extraCSS

    applyStyle(styleWithExtra);
    const el = document.getElementById("theme-extra-css");
    expect(el).not.toBeNull();
    expect(el.textContent).toContain(styleWithExtra.extraCSS);
  });

  it("removes previous extraCSS when applying a new style", () => {
    const stylesWithExtra = styles.filter((s) => s.extraCSS && s.extraCSS.trim().length > 0);
    if (stylesWithExtra.length < 2) return;

    applyStyle(stylesWithExtra[0]);
    applyStyle(stylesWithExtra[1]);

    const els = document.querySelectorAll("#theme-extra-css");
    expect(els.length).toBe(1);
    expect(els[0].textContent).toContain(stylesWithExtra[1].extraCSS);
  });

  it("works correctly for every style in the array", () => {
    for (const style of styles) {
      applyStyle(style);

      expect(document.documentElement.getAttribute("data-theme")).toBe(style.name);

      for (const [prop, value] of Object.entries(style.vars)) {
        expect(document.documentElement.style.getPropertyValue(prop)).toBe(value);
      }
    }
  });
});
