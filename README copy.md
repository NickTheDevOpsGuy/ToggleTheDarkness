# 🐍 Snake — React + TypeScript Edition

A minimalist Snake clone built with React, TypeScript, and HTML Canvas — focused on mastering game loops, keyboard input, and UI feedback using React hooks and refs.

[![CI](https://github.com/NickTheDevOpsGuy/Snake/actions/workflows/snake-ci.yml/badge.svg)](https://github.com/NickTheDevOpsGuy/Snake/actions/workflows/snake-ci.yml)
![Built with React](https://img.shields.io/badge/Built%20with-React-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38bdf8?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/github/license/NickTheDevOpsGuy/Snake)
![Last Commit](https://img.shields.io/github/last-commit/NickTheDevOpsGuy/Snake)
![Contributions welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)

🧩 This project is part of my ongoing React fundamentals journey exploring how to handle real-time loops, keyboard input, and canvas drawing inside React without heavy frameworks.

---

## 🕹️ Preview

🎥 **Gameplay Sneak Peek**

![Gameplay preview](./src/app/assets/snake-gameplay.gif)

> Try it yourself — `npm run dev` then open [http://localhost:5173](http://localhost:5173)

## 🎯 Features

### 🧠 Core Gameplay

- ⚡ **Smooth Canvas Rendering** — real-time updates without unnecessary re-renders
- 🎮 **Arrow Key Controls** — responsive movement with spacebar restart
- 🍎 **Dynamic Food Spawning** — random positions, never overlaps the snake
- 💥 **Collision Detection** — walls and self-collision instantly end the game
- 🔁 **Clean Restart Logic** — quick replay loop with instant feedback
- 💫 **Animated Score Pop** — subtle CSS bump when you eat food
- 🌑 **Dark Grid Aesthetic** — modern look with subtle borders and Tailwind styling

### 🚀 Enhanced Features

- 🔊 **Sound Effects** — satisfying audio feedback for moves, food, and game-over
- 🧩 **Difficulty Presets** — easy, medium, and hard options that scale board size and speed
- 🥕 **Emoji Food Items** — random fruits and veggies add playful variety
- 💾 **Persistent Best Score** — keeps your top score across sessions
- ⏸️ **Pause / Resume Hotkey** — toggle with the `P` key
- 🧱 **Dynamic Speed Scaling** — snake speeds up as you grow
- 🧭 **Modular Hook Architecture** — reusable logic with `useSnakeGame`, `useTicker`, and friends
- ⚙️ **Strict TypeScript + ESLint** — clean, type-safe codebase with zero warnings

---

## Contributing

We love contributions of all kinds! Whether it’s fixing a bug, suggesting a feature, or polishing docs, your help makes this game better.

How to join in:

- Fork & open a PR
- Add yourself to [Contributors](./CONTRIBUTORS.md)
- Share ideas in [roadmap discussions](https://github.com/users/NickTheDevOpsGuy/projects/5)
- Report bugs via [Issues](https://github.com/NickTheDevOpsGuy/Snake/issues)

Every contribution, big or small, helps keep this project alive 🎉

---

## 🚧 Roadmap

Check upcoming ideas and milestones in the [Project Roadmap](https://github.com/users/NickTheDevOpsGuy/projects/5).

---

## Acknowledgements

Minesweeper is a community project, shaped by everyone who’s played, tested, and contributed.  
Every commit, idea, and bug report makes the game better.

[![Contributors](https://contrib.rocks/image?repo=NickTheDevOpsGuy/Snake)](./CONTRIBUTORS.md)

Meet all our amazing [Contributors](./CONTRIBUTORS.md)

---

## 📂 Project Structure

<details>
<summary>📁 Click to expand project file structure</summary>

```plaintext
.
├── .github
│   └── workflows
│       └── snake-ci.yml
├── .gitignore
├── .husky
│   ├── pre-commit
│   └── pre-push
├── .prettierignore
├── .prettierrc
├── .prettierrc.json
├── .prettierrc.yml
├── .stylelintrc.json
├── CONTRIBUTORS.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── snake.svg
│   └── sounds
│       ├── food.mp3
│       ├── gameover.mp3
│       └── move.mp3
├── README.md
├── scripts
│   └── precheck.sh
├── src
│   └── app
│       ├── App.tsx
│       ├── assets
│       │   └── snake-gameplay.gif
│       ├── components
│       │   ├── Board.tsx
│       │   ├── HUD.tsx
│       │   └── SnakeCanvas.tsx
│       ├── constants
│       │   └── game.ts
│       ├── hooks
│       │   ├── useBestScore.ts
│       │   ├── useCanvas2D.ts
│       │   ├── useInput.ts
│       │   ├── usePauseHotkey.ts
│       │   ├── useSnake.ts
│       │   ├── useSnakeGame.ts
│       │   └── useTicker.ts
│       ├── main.tsx
│       ├── styles
│       │   └── App.css
│       ├── types
│       │   ├── game.ts
│       │   ├── index.ts
│       │   └── ui.ts
│       └── utils
│           ├── canvas.ts
│           └── logic.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

</details>

---

## Getting Started

**Requirements:** Node 18+

### Clone & Run

1. Clone repo

```bash
git clone git@github.com:NickTheDevOpsGuy/Snake.git
```

2. Install dependencies

```bash
npm install
```

3. Start dev server

```bash
npm run dev
```

4. Run tests:

```bash
npm test
```

6. In your browser, visit [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

| Name                        | Version | Description                         |
| :-------------------------- | :------ | :---------------------------------- |
| [React](https://react.dev/) | ^18.3.1 | UI library for building components. |
| [Vite](https://vitejs.dev/) | ^6.0.5  | Fast dev server & bundler.          |

---

## Scripts

Run with `npm run <script>` (see package.json for full list).

| Category        | Script         | What it does                                                           |
| --------------- | -------------- | ---------------------------------------------------------------------- |
| **Dev**         | `dev`          | Start Vite dev server                                                  |
|                 | `build`        | Type-check (tsc -b) then build with Vite                               |
|                 | `preview`      | Preview the production build                                           |
| **Test**        | `test`         | Placeholder test script (exits 0)                                      |
|                 | `test:watch`   | Run Vitest in watch mode                                               |
| **Deploy**      | `predeploy`    | Build before deploy                                                    |
|                 | `deploy`       | Publish `dist/` to GitHub Pages via `gh-pages`                         |
| **Lint/Format** | `lint`         | ESLint for JS/TS (`.`, extensions: js, jsx, ts, tsx)                   |
|                 | `lint:fix`     | ESLint with `--fix`                                                    |
|                 | `format`       | Prettier write across the repo                                         |
|                 | `format:check` | Prettier check (no writes)                                             |
|                 | `lint:css`     | Stylelint for `**/*.{css,scss}` (includes build output unless ignored) |
|                 | `lint:css:fix` | Stylelint `--fix` for `src/**/*.{css,scss}`                            |
| **Checks**      | `check`        | Run Prettier (write) then ESLint                                       |
|                 | `check:fix`    | Run Prettier (write) then ESLint with `--fix`                          |
| **TypeScript**  | `tscheck`      | TypeScript type-check only (no emit)                                   |
| **Tooling**     | `precheck`     | Run `scripts/precheck.sh` (project preflight)                          |
| **Git Hooks**   | `prepare`      | Run Husky setup on install                                             |

---

🦝 Author

Made with ☕ & curiosity by [Nick Clark](https://github.com/NickTheDevOpsGuy) — #NickDoesDevOps 🦝
