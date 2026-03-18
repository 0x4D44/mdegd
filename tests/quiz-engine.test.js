import { describe, it, expect } from 'vitest';
import {
  selectQuestions,
  selectBalancedQuestions,
  getOptionsForMode,
  checkAnswer,
  calculateScore,
  getResultMessage,
  shuffleArray,
  getCategoryDistribution,
} from '../src/quiz-engine.js';

// --- Mock data ---

const mockQuestion = {
  id: 1,
  category: "general",
  question: "Test question?",
  year: 2000,
  eric: {
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "C is correct because...",
  },
  ruth: {
    options: ["Right", "Wrong1", "Wrong2", "Wrong3"],
    correct: 0,
    explanation: "The answer is Right!",
  },
};

function buildPool(n) {
  return Array.from({ length: n }, (_, i) => ({
    ...mockQuestion,
    id: i + 1,
    category: i % 3 === 0 ? "history" : i % 3 === 1 ? "science" : "pop-culture",
  }));
}

// --- shuffleArray ---

describe("shuffleArray", () => {
  it("returns an array of the same length", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffleArray(arr);
    expect(result).toHaveLength(arr.length);
  });

  it("contains the same elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffleArray(arr);
    expect(result.sort()).toEqual(arr.sort());
  });

  it("does not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const copy = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(copy);
  });
});

// --- selectQuestions ---

describe("selectQuestions", () => {
  it("returns the correct count of questions", () => {
    const pool = buildPool(20);
    const result = selectQuestions(pool, 12);
    expect(result).toHaveLength(12);
  });

  it("returns no duplicate question IDs", () => {
    const pool = buildPool(20);
    const result = selectQuestions(pool, 12);
    const ids = result.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("returns all questions if count >= pool length", () => {
    const pool = buildPool(5);
    const result = selectQuestions(pool, 10);
    expect(result).toHaveLength(5);
    const ids = result.map((q) => q.id).sort((a, b) => a - b);
    expect(ids).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty pool", () => {
    const result = selectQuestions([], 12);
    expect(result).toEqual([]);
  });
});

// --- selectBalancedQuestions ---

describe("selectBalancedQuestions", () => {
  function buildCategorizedPool() {
    const categories = ["march-21st", "bridge", "cards", "nsheb", "doric", "pylons"];
    return categories.flatMap((cat, ci) =>
      Array.from({ length: 10 }, (_, i) => ({
        ...mockQuestion,
        id: ci * 10 + i + 1,
        category: cat,
      }))
    );
  }

  it("returns the requested number of questions", () => {
    const pool = buildCategorizedPool();
    const result = selectBalancedQuestions(pool, 12);
    expect(result).toHaveLength(12);
  });

  it("includes questions from at least 3 different categories", () => {
    const pool = buildCategorizedPool();
    const result = selectBalancedQuestions(pool, 12);
    const cats = new Set(result.map(q => q.category));
    expect(cats.size).toBeGreaterThanOrEqual(3);
  });

  it("doesn't exceed the available pool", () => {
    const pool = buildCategorizedPool().slice(0, 5);
    const result = selectBalancedQuestions(pool, 12);
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it("has no duplicate question IDs", () => {
    const pool = buildCategorizedPool();
    const result = selectBalancedQuestions(pool, 12);
    const ids = result.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("falls back gracefully with single-category pool", () => {
    const pool = buildPool(20); // all same categories cycling
    const result = selectBalancedQuestions(pool, 12);
    expect(result).toHaveLength(12);
  });
});

// --- getOptionsForMode ---

describe("getOptionsForMode", () => {
  it("returns eric options when mode is 'eric'", () => {
    const result = getOptionsForMode(mockQuestion, "eric");
    expect(result).toEqual(["A", "B", "C", "D"]);
  });

  it("returns ruth options when mode is 'ruth'", () => {
    const result = getOptionsForMode(mockQuestion, "ruth");
    expect(result).toEqual(["Right", "Wrong1", "Wrong2", "Wrong3"]);
  });
});

// --- checkAnswer ---

describe("checkAnswer", () => {
  it("returns correct: true for the right answer", () => {
    const result = checkAnswer(mockQuestion, "eric", 2);
    expect(result.correct).toBe(true);
  });

  it("returns correct: false for the wrong answer", () => {
    const result = checkAnswer(mockQuestion, "eric", 0);
    expect(result.correct).toBe(false);
  });

  it("accepts any index when all options have the same text as the correct answer", () => {
    const allSameQuestion = {
      ...mockQuestion,
      ruth: {
        options: ["Same answer", "Same answer", "Same answer", "Same answer"],
        correct: 0,
        explanation: "They're all the same!"
      }
    };
    // Every index should be accepted as correct
    for (let i = 0; i < 4; i++) {
      const result = checkAnswer(allSameQuestion, "ruth", i);
      expect(result.correct).toBe(true);
    }
  });

  it("accepts any index whose text matches the correct answer text", () => {
    const partialSameQuestion = {
      ...mockQuestion,
      ruth: {
        options: ["Correct text", "Wrong text", "Correct text", "Other wrong"],
        correct: 0,
        explanation: "Two options share the correct text"
      }
    };
    expect(checkAnswer(partialSameQuestion, "ruth", 0).correct).toBe(true);
    expect(checkAnswer(partialSameQuestion, "ruth", 1).correct).toBe(false);
    expect(checkAnswer(partialSameQuestion, "ruth", 2).correct).toBe(true);
    expect(checkAnswer(partialSameQuestion, "ruth", 3).correct).toBe(false);
  });

  it("always returns the correct index and explanation", () => {
    const result = checkAnswer(mockQuestion, "ruth", 3);
    expect(result.correctIndex).toBe(0);
    expect(result.explanation).toBe("The answer is Right!");
  });
});

// --- calculateScore ---

describe("calculateScore", () => {
  it("all correct = 100%", () => {
    const answers = [{ correct: true }, { correct: true }, { correct: true }];
    const result = calculateScore(answers);
    expect(result).toEqual({ score: 3, total: 3, percentage: 100 });
  });

  it("none correct = 0%", () => {
    const answers = [{ correct: false }, { correct: false }];
    const result = calculateScore(answers);
    expect(result).toEqual({ score: 0, total: 2, percentage: 0 });
  });

  it("partial score calculated correctly", () => {
    const answers = [
      { correct: true },
      { correct: false },
      { correct: true },
      { correct: false },
    ];
    const result = calculateScore(answers);
    expect(result).toEqual({ score: 2, total: 4, percentage: 50 });
  });

  it("empty array returns 0/0", () => {
    const result = calculateScore([]);
    expect(result).toEqual({ score: 0, total: 0, percentage: 0 });
  });
});

// --- getResultMessage ---

describe("getResultMessage", () => {
  it("eric mode low score is sarcastic", () => {
    const msg = getResultMessage({ score: 1, total: 12, percentage: 8 }, "eric");
    expect(typeof msg).toBe("string");
    expect(msg.length).toBeGreaterThan(0);
  });

  it("eric mode high score is grudgingly impressed", () => {
    const msg = getResultMessage({ score: 10, total: 12, percentage: 83 }, "eric");
    expect(typeof msg).toBe("string");
    expect(msg.length).toBeGreaterThan(0);
  });

  it("ruth mode is always encouraging", () => {
    const msg = getResultMessage({ score: 3, total: 12, percentage: 25 }, "ruth");
    expect(typeof msg).toBe("string");
    expect(msg.length).toBeGreaterThan(0);
  });

  it("perfect score has special message", () => {
    const msg = getResultMessage({ score: 12, total: 12, percentage: 100 }, "eric");
    expect(typeof msg).toBe("string");
    expect(msg.length).toBeGreaterThan(0);
  });

  it("eric and ruth messages differ in tone for same low score", () => {
    const ericMsg = getResultMessage({ score: 2, total: 12, percentage: 17 }, "eric");
    const ruthMsg = getResultMessage({ score: 2, total: 12, percentage: 17 }, "ruth");
    expect(ericMsg).not.toBe(ruthMsg);
  });
});

// --- getCategoryDistribution ---

describe("getCategoryDistribution", () => {
  it("counts categories correctly", () => {
    const questions = [
      { ...mockQuestion, category: "history" },
      { ...mockQuestion, category: "history" },
      { ...mockQuestion, category: "science" },
    ];
    const result = getCategoryDistribution(questions);
    expect(result).toEqual({ history: 2, science: 1 });
  });

  it("handles empty array", () => {
    const result = getCategoryDistribution([]);
    expect(result).toEqual({});
  });
});
