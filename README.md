# Simple JS App — Pokédex

A small web app that loads data from the public **PokéAPI** and displays a list of Pokémon.  
Click a Pokémon to view details in a Bootstrap modal.

**Live Demo:** https://zachariahmellis-coder.github.io/simple-js-app-CF/

---

## Features

- Fetches Pokémon list and details from the PokéAPI
- Displays items as clickable buttons (Bootstrap 4)
- Opens a modal with image, height, and types
- Alphabetical sorting of the list
- Responsive layout and basic accessibility practices

---

## Tech Stack

- **HTML5**, **CSS3**, **JavaScript (ES6)**
- **Bootstrap 4.6**
- **PokéAPI** (https://pokeapi.co/)
- **ESLint** for code quality
- **Terser** & **PostCSS/CSSNano** for minification (via npm scripts)

---

## Getting Started (Local)

1. **Clone the repo**
   ```bash
   git clone https://github.com/zachariahmellis-coder/simple-js-app-CF.git
   cd simple-js-app-CF
   ```

````

2. **Install dependencies** (for linting & builds)

   ```bash
   npm install
   ```

3. **Run locally**
   Open `index.html` directly or use VS Code’s **Live Server** extension for a quick local server.

---

## Build (Minify CSS & JS)

This project builds into a `dist/` folder and auto-creates it if missing.

```bash
npm run build
```

This runs:

* `build:js`: minifies `js/scripts.js` → `dist/app.min.js`
* `build:css`: minifies `css/styles.css` → `dist/styles.min.css`

Make sure `index.html` points to the minified files:

```html
<link rel="stylesheet" href="dist/styles.min.css" />
<script src="dist/app.min.js"></script>
```

---

## Linting

```bash
npm run lint
```

The project uses ESLint with a simple ruleset (single quotes, browser + ES6).

---

## Project Structure

```
simple-js-app-CF/
├─ css/
│  └─ styles.css
├─ js/
│  ├─ scripts.js
│  ├─ fetch-polyfill.js
│  └─ promise-polyfill.js
├─ dist/
│  ├─ app.min.js
│  └─ styles.min.css
├─ index.html
├─ package.json
└─ README.md
```

---

## Deployment

This site is deployed with **GitHub Pages** from the **main** branch.

Live URL:
[https://zachariahmellis-coder.github.io/simple-js-app-CF/](https://zachariahmellis-coder.github.io/simple-js-app-CF/)

If you change the repo name or user, update the link above.

---

## Accessibility Notes

* Buttons are keyboard-focusable
* Modal uses Bootstrap’s ARIA attributes
* High-contrast colors for buttons and modal text

---

## Acknowledgments

* **PokéAPI** for the data ([https://pokeapi.co/](https://pokeapi.co/))
* **Bootstrap 4.6** for UI components

---

## 🧩 Role & Responsibilities

* Built the Pokédex web app from the ground up using **JavaScript (IIFE pattern)**, **Bootstrap**, and **REST API integration**.
* Managed all aspects of development — from structure and styling to dynamic data rendering and modal interaction.

---

## ⚙️ Key Decisions

* Adopted a **modular structure** for clean, scalable, and maintainable code.
* Used **Bootstrap** for a consistent, mobile-friendly design while reducing custom CSS.
* Resulted in a responsive, efficient app that demonstrates best practices in front-end development.

---

## 🔁 Future Enhancements

* Add **search** and **pagination** for smoother navigation of large datasets.
* Introduce **testing** and **accessibility improvements** to enhance performance and user experience.

---

## 🌱 Lessons Learned

* Clean structure and small details make a huge difference in project quality.
* **AI became part of my creative workflow** — not as a replacement, but as a reflection of how I learn, adapt, and evolve.
* Collaboration between **curiosity, structure, and technology** can turn a simple idea into a purposeful learning milestone.

---

```
````
