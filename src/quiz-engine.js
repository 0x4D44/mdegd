// Quiz engine — pure logic, no DOM manipulation.

/**
 * Fisher-Yates shuffle. Returns a new array; does not mutate the input.
 */
export function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Randomly select `count` unique questions from the pool.
 * Returns at most pool.length questions (no duplicates).
 */
export function selectQuestions(pool, count) {
  if (pool.length === 0) return [];
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, pool.length));
}

/**
 * Select `count` questions with category diversity.
 * Takes one question from each category first (round-robin), then fills randomly.
 */
export function selectBalancedQuestions(pool, count) {
  if (pool.length === 0) return [];
  const want = Math.min(count, pool.length);

  // Group by category
  const byCategory = {};
  for (const q of pool) {
    (byCategory[q.category] ??= []).push(q);
  }

  // Shuffle within each category
  for (const cat of Object.keys(byCategory)) {
    byCategory[cat] = shuffleArray(byCategory[cat]);
  }

  const selected = [];
  const usedIds = new Set();
  const categoryKeys = shuffleArray(Object.keys(byCategory));

  // Round-robin: one from each category
  let catIdx = 0;
  const pointers = Object.fromEntries(categoryKeys.map(k => [k, 0]));

  while (selected.length < want) {
    const cat = categoryKeys[catIdx % categoryKeys.length];
    if (pointers[cat] < byCategory[cat].length) {
      const q = byCategory[cat][pointers[cat]];
      if (!usedIds.has(q.id)) {
        selected.push(q);
        usedIds.add(q.id);
      }
      pointers[cat]++;
    }
    catIdx++;

    // Safety: if we've gone around all categories without adding anything, break
    if (catIdx > want + pool.length) break;
  }

  return shuffleArray(selected);
}

/**
 * Return the options array for the given mode ("eric" or "ruth").
 */
export function getOptionsForMode(question, mode) {
  return question[mode].options;
}

/**
 * Check whether the selected answer is correct.
 * Returns { correct, correctIndex, explanation }.
 */
export function checkAnswer(question, mode, selectedIndex) {
  const modeData = question[mode];
  return {
    correct: selectedIndex === modeData.correct,
    correctIndex: modeData.correct,
    explanation: modeData.explanation,
  };
}

/**
 * Given an array of { correct: boolean } answer records, produce a score summary.
 */
export function calculateScore(answers) {
  const total = answers.length;
  const score = answers.filter((a) => a.correct).length;
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);
  return { score, total, percentage };
}

/**
 * Return a fun/snarky result message based on score and mode.
 */
export function getResultMessage(scoreObj, mode) {
  const { percentage } = scoreObj;

  if (percentage === 100) {
    return mode === "eric"
      ? "Perfect score?! Alright, I'll admit it — you actually know your stuff. Don't let it go to your head."
      : "Oh wow, a perfect score! You're an absolute star — happy birthday to Eric and well done to you!";
  }

  if (mode === "eric") {
    if (percentage >= 75) {
      return "Fine. I'll grudgingly admit that was... not terrible. You clearly pay too much attention.";
    }
    if (percentage >= 50) {
      return "Middling effort. Did you actually celebrate those years or just turn up for the cake?";
    }
    return "Ouch. Were you even conscious for the last few decades? That was painful to watch.";
  }

  // ruth mode — always encouraging
  if (percentage >= 75) {
    return "Brilliant work! You really know Eric well. He's lucky to have you celebrating with him!";
  }
  if (percentage >= 50) {
    return "Nice effort! You got a good chunk right — that's something to be proud of!";
  }
  return "Great try! The important thing is you're here to celebrate Eric's birthday — that's what matters most!";
}

/**
 * Count how many questions fall into each category.
 */
export function getCategoryDistribution(questions) {
  const counts = {};
  for (const q of questions) {
    counts[q.category] = (counts[q.category] || 0) + 1;
  }
  return counts;
}
