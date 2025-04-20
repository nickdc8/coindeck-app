# 🪄 Next.js Starter Template

A modern starter template for building sleek Next.js apps with:

- ✅ Tailwind CSS 4
- 🌗 Dark mode support via `next-themes`
- 🎨 Prettier + Tailwind plugin for class sorting
- 🧼 Husky + lint-staged for pre-commit formatting
- ⚡ TurboPack dev server (Next.js 15+)
- ✨ [Lucide React](https://lucide.dev/) for beautiful, lightweight icons

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/your-template-name.git
cd your-template-name
npm install
```

Start the dev server:

```bash
npm run dev
```

---

## 🧰 Tooling

### ✅ TailwindCSS

Configured using `tailwind.config.js` with class-based dark mode:

```js
darkMode: "class";
```

---

### 🌗 Dark Mode

Handled via [`next-themes`](https://github.com/pacocoursey/next-themes). Toggle it using the `<ThemeToggle />` component.

Default setup respects system preference and persists user choice via `localStorage`.

---

### 🎨 Prettier + Tailwind Plugin

`prettier-plugin-tailwindcss` auto-sorts classnames for consistency.

Customize in `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

### 🧼 Husky + lint-staged

Pre-commit hook formats your staged files:

```json
"lint-staged": {
  "**/*.{js,jsx,ts,tsx,css,html,md,json}": [
    "prettier --write"
  ]
}
```

No more inconsistent formatting in commits. 💅

---

### ✨ Lucide Icons

[Lucide](https://lucide.dev/) is used for icons — clean, customizable, and fully React-compatible.

Install with:

```bash
npm install lucide-react
```

Usage example:

```tsx
import { Sun, Moon } from 'lucide-react'

<Sun className="w-5 h-5 text-yellow-500" />
<Moon className="w-5 h-5 text-blue-500" />
```

---

## 🏗 Folder Structure

```bash
├── components/         # Reusable components (e.g. ThemeToggle)
├── pages/ or app/      # Next.js routing
├── public/             # Static assets
├── styles/             # Tailwind or global styles
├── .husky/             # Git hooks (e.g. pre-commit)
├── .prettierrc         # Prettier config
└── tailwind.config.js  # Tailwind theme config
```

---

## 📝 License

MIT — feel free to use, fork, and modify.

---
