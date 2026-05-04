# [Your Name] - Personal Portfolio // ✏️ EDIT

## Tech Stack
React 18, Vite, Tailwind CSS, Framer Motion, React Router v6

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run
```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Customization - Edit These Files
| File | What to Edit |
|------|-------------|
| src/data/profile.js | Name, bio, photo, email, social links |
| src/data/projects.js | Your projects |
| src/data/skills.js | Your skills and proficiency levels |
| src/data/resume.js | Education, experience, awards |
| public/cv.pdf | Replace with your actual CV |
| public/assets/profile.jpg | Replace with your photo |

## Build for Production
```bash
npm run build
# Output goes to /dist folder
```

## Deploy to GitHub Pages
```bash
npm install -D gh-pages
```

In package.json, add to scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

In vite.config.js, add:
```js
base: '/your-repo-name/', // ✏️ EDIT
```

Then run:
```bash
npm run deploy
```

## Deploy to Vercel (Recommended - Zero Config)
1. Push your project to GitHub
2. Go to vercel.com and click "New Project"
3. Import your GitHub repository
4. Leave all settings as default
5. Click Deploy - done!

## Deploy to Netlify
1. Run: npm run build
2. Drag the /dist folder to netlify.com/drop
   OR connect your GitHub repo for auto-deploy

## Adding Your Photo
Place your photo at: public/assets/profile.jpg
Recommended: square image, minimum 400x400px

## Adding Your CV
Place your PDF at: public/cv.pdf
