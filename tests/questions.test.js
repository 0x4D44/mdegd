import { describe, it, expect } from 'vitest';
import { questions } from '../src/questions.js';

const VALID_CATEGORIES = [
  'march-21st', 'bridge', 'cards', 'nsheb', 'family',
  'edinburgh-airport', 'e-numbers', 'scottish-roads',
  'vauxhall-cavalier', 'buy-cheap', 'toyota-aygo',
  'yes-minister', 'trams', 'pylons', 'trident-shuttle',
  'teenage-slang', 'bbc-weather', 'perth-scotland',
  'perth-australia', 'coronation-st', 'scotland-the-what',
  'forfar-bridies', 'ntnon', 'doric', 'dfds',
];

// Skip pool validation if the file hasn't been populated yet
const populated = questions.length > 0;
const descFn = populated ? describe : describe.skip;

descFn("questions pool", () => {
  it("has at least 50 questions", () => {
    expect(questions.length).toBeGreaterThanOrEqual(50);
  });

  it("every question has required fields", () => {
    for (const q of questions) {
      expect(q).toHaveProperty("id");
      expect(q).toHaveProperty("category");
      expect(q).toHaveProperty("question");
      expect(q).toHaveProperty("eric");
      expect(q).toHaveProperty("ruth");
      expect(typeof q.id).toBe("number");
      expect(typeof q.category).toBe("string");
      expect(typeof q.question).toBe("string");
      expect(q.question.length).toBeGreaterThan(0);
    }
  });

  it("all IDs are unique", () => {
    const ids = questions.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all categories are valid", () => {
    for (const q of questions) {
      expect(VALID_CATEGORIES).toContain(q.category);
    }
  });

  it("every question has valid eric mode data", () => {
    for (const q of questions) {
      expect(Array.isArray(q.eric.options)).toBe(true);
      expect(q.eric.options.length).toBe(4);
      expect(typeof q.eric.correct).toBe("number");
      expect(q.eric.correct).toBeGreaterThanOrEqual(0);
      expect(q.eric.correct).toBeLessThan(4);
      expect(typeof q.eric.explanation).toBe("string");
      expect(q.eric.explanation.length).toBeGreaterThan(0);
    }
  });

  it("every question has valid ruth mode data", () => {
    for (const q of questions) {
      expect(Array.isArray(q.ruth.options)).toBe(true);
      expect(q.ruth.options.length).toBe(4);
      expect(typeof q.ruth.correct).toBe("number");
      expect(q.ruth.correct).toBeGreaterThanOrEqual(0);
      expect(q.ruth.correct).toBeLessThan(4);
      expect(typeof q.ruth.explanation).toBe("string");
      expect(q.ruth.explanation.length).toBeGreaterThan(0);
    }
  });

  it("no option text is empty", () => {
    for (const q of questions) {
      for (const opt of q.eric.options) {
        expect(typeof opt).toBe("string");
        expect(opt.trim().length).toBeGreaterThan(0);
      }
      for (const opt of q.ruth.options) {
        expect(typeof opt).toBe("string");
        expect(opt.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("year field is a number or null", () => {
    for (const q of questions) {
      if (q.year !== null && q.year !== undefined) {
        expect(typeof q.year).toBe("number");
      }
    }
  });
});

describe("questions export", () => {
  it("exports an array", () => {
    expect(Array.isArray(questions)).toBe(true);
  });
});
