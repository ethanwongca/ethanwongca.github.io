# Portfolio Website <img height=40 width=40 src="https://github.com/ethanwongca/ethanwongca.github.io/assets/87055387/3b1666fc-0f9e-4f90-bf14-96c701ccd0f0">

Hello, welcome to my portfolio website's code! I hope you enjoyed my website!

## Table of Contents
1. [Website](#website)
2. [Libraries](#libraries-used)
3. [Features](#features)
4. [Setup](#setup)
5. [Photos](#photos)
6. [Structure](#folder-structure)
7. [Pages](#pages)

## Website
You can find the website here: [https://ethanwongca.github.io/](https://ethanwongca.github.io/)

## Libraries Used

**Languages**: TypeScript, HTML, CSS, and JavaScript <br/>
**Technologies**: React.js, Tailwind CSS, Node.js 

## Features
- Responsive design, with a desktop sidebar and a mobile bottom nav
- Interactive UI with Tailwind CSS
- An interactive world map of visited countries, with a pin per travel photo
- Draggable sticky-note and polaroid galleries on the Hobbies side quests
- Photo pipeline that downscales images and strips EXIF/GPS metadata before deploy

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ethanwongca/ethanwongca.github.io.git
    cd ethanwongca.github.io
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm start
    ```

4. **Build for production:**

    ```bash
    npm run build
    ```

5. **Deploy to GitHub Pages:**

    ```bash
    npm run deploy
    ```

    `predeploy` runs `optimize-photos` first, so every image is downscaled and
    stripped of EXIF/GPS metadata before it ever reaches the build. Photos that
    are already optimized are left untouched, so repeated deploys don't
    re-compress them.

## Photos

Drop new photos straight into `src/assets/travel`, `running`, `sports`, or
`fun-eats` — they're picked up automatically by `require.context`, no imports
needed. Then run:

```bash
npm run optimize-photos
```

For travel photos, also add the location to `src/data/travelLocations.ts`; the
gallery caption and the map pin both read from that one entry. The script is
macOS-only (it uses `sips` for HDR-correct color decoding).

## Folder Structure

```plaintext
ethanwongca.github.io/
├── public/
│   ├── index.html
│   ├── 404.html          # SPA redirect shim for GitHub Pages
│   └── ...
├── scripts/
│   └── optimize-photos.js
├── src/
│   ├── assets/           # headshot, logos, and the photo folders
│   ├── components/       # Sidebar, MobileNav, WorldMap, galleries, ...
│   ├── data/             # nav items + travel locations
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── CV.tsx
│   │   ├── Publications.tsx
│   │   ├── Teaching.tsx
│   │   ├── Hobbies.tsx
│   │   ├── SideQuestDetail.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── .gitignore
├── package.json
└── README.md
```

## Pages

### About
- The about page provides a description of myself

### CV
- **Basics**: Displays name, experience, volunteering in containers
- **Mobile Friendly**: Sidebar is removed when on mobile devices

### Publications
- **Publication Entries**: Include entries with publication title, journal name, link to publication, and a brief description

### Teaching
- **Teaching & Workshops**: Courses taught and workshops run, each linking out to the institution or repo

### Hobbies
- **Corkboard**: Draggable sticky notes, one per theme, each opening its own side-quest page
- **Side quests**: Travel (world map + polaroid galleries), Running (race route + photos), Sports, and Fun Eats (a flip-card menu)
