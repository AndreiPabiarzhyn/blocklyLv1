const LEVELS_RABBIT = [
  // === 1–5: только выход ===
  {
    size: 5,
    grid: [
      "..W..",
      "....E",
      ".W.W.",
      "..R.W",
      ".W.WW"
    ],
    goal: "Дойди до 🚪 за 4 шага.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Иди вниз и вправо."
  },
  {
    size: 5,
    grid: [
      "R....",
      ".WWWW",
      "...WW",
      ".WEW.",
      "WWWWW"
    ],
    goal: "Доберись до 🚪, обходя стены.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Обходи стены зигзагом."
  },
  {
    size: 5,
    grid: [
      "R....",
      "WW.W.",
      ".....",
      ".W.W.",
      "....E"
    ],
    goal: "Доберись до 🚪 через лабиринт.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Спустись вниз, потом направо."
  },
  {
    size: 5,
    grid: [
      "R.W..",
      ".W.W.",
      "...W.",
      ".W...",
      "...E."
    ],
    goal: "Найди путь к 🚪.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Ищи обход через свободные клетки."
  },
  {
    size: 5,
    grid: [
      "R...W",
      ".W.W.",
      ".....",
      "W.W.W",
      "E...."
    ],
    goal: "Сложный маршрут к 🚪.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Двигайся по зигзагу вниз и влево."
  },

  // === 6–10: морковки + выход ===
  {
    size: 5,
    grid: [
      "R.CWW",
      ".W..W",
      "..CW.",
      ".W...",
      "..WWE"
    ],
    goal: "Собери 🥕 и дойди до 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Не пропусти морковку!"
  },
  {
    size: 5,
    grid: [
      "....R",
      "WW.C.",
      "..C.W",
      ".W.W.",
      "....E"
    ],
    goal: "Собери все 🥕 и иди к 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Обходи стены."
  },
  {
    size: 5,
    grid: [
      "R...C",
      ".W.W.",
      "C...C",
      ".W.W.",
      "E...."
    ],
    goal: "Все 🥕 должны быть собраны!",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Сначала морковки, потом дверь."
  },
  {
    size: 5,
    grid: [
      "R.C.W",
      "W..C.",
      "...C.",
      "W.W..",
      "..E.."
    ],
    goal: "Собери 🥕 и доберись до 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Найди короткий путь к морковкам."
  },
  {
    size: 5,
    grid: [
      "R.W..",
      ".C..W",
      ".C...",
      ".W.C.",
      "E...."
    ],
    goal: "Финал: собери все 🥕 и дойди до 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Придётся идти зигзагом."
  }
];
