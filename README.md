# ⚫ ToggleTheDarkness

_The only production pipeline where “turning it off and on again” actually wins the game._ 🦝

![CI](<https://img.shields.io/badge/CI-(Prettier%20·%20ESLint%20·%20TSC)-blue?style=flat>)
![Status](https://img.shields.io/badge/status-no_status-lightgrey?style=flat)
![Last commit](https://img.shields.io/github/last-commit/NickTheDevOpsGuy/ToggleTheDarkness)

![Built with React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)

---

## 🖼 Preview

### Main App Demo

![App Demo GIF](./public/assets/mainApp.png)

### Feature Highlights

![Feature Showcase](./public/assets/gamePlay.png)

> 🎞️ _Previews are short animated GIFs recorded directly from the live app using screen capture — perfect for quick demos in READMEs._

---

## 🚀 Features

- 🕹️ 3×3, 5×5, or 7×7 boards (difficulty selector)
- 🎉 Win detection & banner
- 🔁 Reset + randomize
- 💡 Optional sound & move counter
- 🧠 Surprisingly therapeutic to play in dark mode

---

## 🗓️ Roadmap

- Achievement tracker
- Darkwave mode 🌊
- Shareable puzzle URLs
- Stats & streaks
- Hint system

---

## 🛠 Tech Stack

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🧠 Custom game logic (flip, randomize, win check)

---

## 💡 Learning Notes

This project is where React state and prop flow finally clicked for me.
It helped me understand how components talk to each other — who owns state, who updates it, and how props actually flow.
Basically, this was the “React finally makes sense” project. 🦝

---

## 📦 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/NickTheDevOpsGuy/ToggleTheDarkness.git
   cd cd ToggleTheDarkness
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Click some lights. Question your life choices.
5. Win. Celebrate. Reset. Repeat.

---

## 📂 Project Structure

<details>
<summary>📁 Click to expand file structure</summary>

```plaintext
.
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── bug.yml
│   │   ├── config.yml
│   │   ├── documentation.yml
│   │   ├── enhancement_refactor.yml
│   │   ├── feature_request.yml
│   │   └── question_discussion.yml
│   ├── pull_request_template.md
│   └── workflows
│       └── ToggleTheDarkness-ci.yml
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
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── scripts
│   └── precheck.sh
├── src
│   └── app
│       ├── App.tsx
│       ├── components
│       │   ├── Board.tsx
│       │   └── Cell.tsx
│       ├── hooks
│       │   └── useLightsOut.ts
│       ├── lib
│       │   └── game.ts
│       └── main.tsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

</details>

---

## 🤝 Contributing

- 🐛 Report bugs in [Issues](../../../../issues)
- 💡 Suggest features or improvements
- 🔧 Open a Pull Request

---

## 🦝 Built by NickDoesDevOps

Created with ☕, curiosity, and a touch of chaos by [Nicholas Clark](https://www.linkedin.com/in/nickdoesdevops).  
Follow the journey → [GitHub](https://github.com/NickTheDevOpsGuy) • [LinkedIn](https://www.linkedin.com/in/nickdoesdevops)

🏷 #NickDoesDevOps • #LearningInPublic • #BuiltInPublic
