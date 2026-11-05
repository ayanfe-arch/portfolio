# Ayanfe Ajibola — Portfolio

A plain HTML/CSS/JS site. No build step, no framework — deploys straight to Vercel.

## Files
- `index.html` — page structure and content
- `styles.css` — all styling (purple/black theme, Fraunces + JetBrains Mono)
- `script.js` — the typing terminal animation in the hero, and smooth-scroll links

## Before you deploy
- Update the LinkedIn link in the Contact section (`href="#"` — currently a placeholder)
- Drop your finished résumé PDF into this folder, named `Ayanfe_CV.pdf` (the "Résumé ↓" button in the top bar expects that filename — or edit the `href` in `index.html` to match whatever you name it)

## Deploy to Vercel (no coding required)

1. **Create a GitHub repo**
   - Go to github.com → New repository → name it e.g. `portfolio`
   - Upload all files in this folder (drag and drop works, or use "Add file → Upload files")
   - Commit

2. **Connect to Vercel**
   - Go to vercel.com → sign in with GitHub
   - Click "Add New… → Project"
   - Select your `portfolio` repo
   - Framework preset: choose "Other" (it's static HTML, no build needed)
   - Click Deploy

3. You'll get a live link like `ayanfe-portfolio.vercel.app`. Any time you push new changes to the GitHub repo, Vercel redeploys automatically.

## If you want Claude Code's help editing later
Point it at this folder and describe the change in plain language — e.g. "change the accent color from purple to X" or "add a fifth project card." Everything is in three files, so it's easy for it to find what to change.
