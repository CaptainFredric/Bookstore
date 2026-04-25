# Deployment

This project is a static site (HTML + CSS + vanilla JS). You can host it anywhere that serves static files.

## Option A: GitHub Pages (recommended)

1. Commit and push these files to GitHub:
   - `index.html`
   - `Books.html`
   - `styles.css`
   - `index.js`
   - `books.js`
   - `assets/`

2. In GitHub:
   - Repo → **Settings** → **Pages**
   - **Source**: “Deploy from a branch”
   - **Branch**: `main` (or `master`) and “`/ (root)`”
   - Save

3. After it deploys, your site will be available at a URL like:
   - `https://<your-username>.github.io/<repo-name>/`

Notes:

- `index.html` is the landing page.
- `Books.html` is the sortable catalog page.

## Option B: Netlify

- Drag-and-drop the repo folder into Netlify, or connect the GitHub repo.
- Build command: none
- Publish directory: `/` (root)

## Option C: Vercel

- Import the GitHub repo.
- Framework preset: “Other”
- Build command: none
- Output directory: `./`

## Local preview

```bash
# Navigate to your project directory
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/`

