# Portfolio Website <img height=40 width=40 src="https://github.com/ethanwongca/ethanwongca.github.io/assets/87055387/3b1666fc-0f9e-4f90-bf14-96c701ccd0f0">

Hello, welcome to my portfolio website's code! I hope you enjoyed my website!

## Table of Conents
1. [Website](#website)
2. [Libraries](#libraries-used)
3. [Features](#features)
4. [Setup](#setup)
5. [Structure](#folder-structure)
6. [Pages](#pages)

## Website
You can find the website here: [https://ethanwongca.github.io/](https://ethanwongca.github.io/)

## Libraries Used

**Languages**: TypeScript, HTML, CSS, and JavaScript <br/>
**Technologies**: React.js, Tailwind CSS, Node.js 

## Features
- Responsive design
- Dynamic content fetching from GitHub API
- Interactive UI with Tailwind CSS
- Real-time updates of GitHub repositories

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

## Folder Structure

```plaintext
ethanwongca.github.io/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── headshot.jpg
│   ├── components/
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── CV.tsx
│   │   ├── Publications.tsx
│   │   ├── Projects.tsx
│   │   └── Socials.tsx
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

### Projects
- **Project**: Updates realtime using GitHub's API to fetch the latest project data dynamically.

### Socials
- **Links**: Provides clickable cards for email, LinkedIn, GitHub, and Google Scholar
