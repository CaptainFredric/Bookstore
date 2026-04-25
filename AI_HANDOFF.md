# AI Handoff Documentation

**Project:** Bookstore / Library Layout  
**Date:** 2026-01-23  
**Repository:** CaptainFredric/Bookstore  
**Status:** Production Ready

## Quick Start for AI Agents

This is a **single-page HTML + CSS + vanilla JavaScript** bookstore catalog website. No build process, no dependencies, no frameworks.

### Primary Files
- **Books.html** — Main application (638 lines)
  - Complete page structure (header, hero, sections, footer)
  - Inline JavaScript for all interactivity
  - Book data array at the end of the file
  - All rendering, filtering, sorting logic
  
- **styles.css** — All styling (814 lines)
  - CSS custom properties for theming
  - Responsive layout
  - Component styles (cards, buttons, forms, footer)
  - Motion-safe animations
  
- **index.html** — GitHub Pages entrypoint (19 lines)
  - Redirects to Books.html
  - Preserves hash navigation

### Supporting Files
- **.nojekyll** — Prevents Jekyll processing on GitHub Pages
- **.gitignore** — Standard ignores for OS, editor, and build artifacts
- **README.md** — User-facing project overview
- **DAN_DEBUGGER_PROJECT_REVIEW.md** — Comprehensive technical review
- **DEPLOYMENT.md** — Deployment instructions (GitHub Pages, Netlify, Vercel)
- **SESSION_NOTES_2026-01-23.md** — Session changelog and quick reference

## Architecture Overview

### Data Model
All book data is stored in the `books` array in Books.html (around line 300-600):
```javascript
const books = [
  {
    title: "Book Title",
    author: "Author Name",
    genre: "Genre",
    format: "Hardcover|Paperback|Ebook|Audiobook",
    isbn13: "9781234567890",
    rating: 4.5,
    year: 2024,
    featured: true|false,
    listPriceUsd: 29.99,  // optional
    priceUsd: 24.99       // optional
  },
  // ... more books
]
```

### Key Functions (all in Books.html)
- `renderBooks()` — Main rendering function, generates book cards
- `renderStats()` — Updates statistics (total books, average rating)
- `applyFilters()` — Filters books by search, genre, format
- `sortBooks()` — Sorts by featured, rating, price, title
- `bindControls()` — Wires up all event listeners
- `coverUrlFromIsbn()` — Generates Open Library cover URL
- `openLibraryUrlFromIsbn()` — Generates Open Library details URL

### External Dependencies
**None.** This is intentional for portability.

However, the project relies on:
- **Open Library API** for book covers: `https://covers.openlibrary.org/b/isbn/{ISBN}-M.jpg`
- **Open Library details** for book links: `https://openlibrary.org/isbn/{ISBN}`

If Open Library is down, covers will fail gracefully (alt text shown).

## How to Make Changes

### Add a Book
1. Open **Books.html**
2. Find the `books` array (around line 300-600)
3. Add a new object with required fields: `title`, `author`, `genre`, `format`, `isbn13`, `rating`, `year`
4. Optional: add `featured`, `listPriceUsd`, `priceUsd`
5. Save and open Books.html in a browser

### Change the Theme
1. Open **styles.css**
2. Find the `:root` section (lines 1-20)
3. Modify CSS custom properties:
   - `--bg` (background)
   - `--surface` (card background)
   - `--text` (text color)
   - `--primary` (brand color)
   - etc.

### Add a New Section
1. Open **Books.html**
2. Add a new `<section>` inside `<main class="container">`
3. Add corresponding styles in **styles.css**
4. Add navigation link in the header if needed

### Modify Filtering/Sorting Logic
1. All logic is in the `<script>` tag at the end of **Books.html**
2. Key functions to modify:
   - `applyFilters()` for filtering logic
   - `sortBooks()` for sorting logic
   - `renderBooks()` if changing card HTML structure

## Testing Locally

### Option 1: Direct Open (simplest)
```bash
# From project directory
open Books.html
# or
double-click Books.html
```

### Option 2: HTTP Server (recommended for full functionality)
```bash
# From project directory
python3 -m http.server 8080
# Then open: http://localhost:8080/Books.html
```

### What to Test
- [ ] Search works (filters by title/author)
- [ ] Genre filter works
- [ ] Format filter works
- [ ] Sorting works (Featured, Rating, Price, Title)
- [ ] Clear filters button works
- [ ] Book cards are clickable and go to Open Library
- [ ] Stats update correctly
- [ ] Responsive design (resize browser)
- [ ] Keyboard navigation works
- [ ] No console errors

## Deployment

### GitHub Pages (Primary)
1. Push to GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main`, folder: `/ (root)`
5. Wait for deployment

Site will be at: `https://{username}.github.io/{repo-name}/`

See **DEPLOYMENT.md** for detailed instructions and alternative hosts.

## Important Constraints

### What You CAN Do
- Add/remove/edit books in the `books` array
- Modify styling in styles.css
- Add new sections to the page
- Change theme colors
- Modify filtering/sorting logic
- Add new features using vanilla JavaScript

### What You SHOULD NOT Do
- Add build tools or frameworks (keeps it simple)
- Add external JavaScript libraries (keeps it portable)
- Hardcode real pricing data without a reliable source (see below)
- Remove accessibility features (skip link, ARIA labels, focus-visible)
- Remove motion-safe CSS (respects user preferences)

### Pricing Data Policy
The current pricing in the `books` array is **sample data for layout purposes only**. The page includes a disclaimer about this.

If you want to add real pricing:
1. Get data from a reliable, maintained source
2. Update the disclaimer in Books.html
3. Document your data source

Do NOT scrape pricing (fragile, may violate ToS).

## Common Tasks for AI Agents

### "Add more books"
1. Find real ISBNs (13-digit)
2. Verify covers exist at `https://covers.openlibrary.org/b/isbn/{ISBN}-M.jpg`
3. Add to `books` array in Books.html with all required fields

### "Change the color scheme"
1. Open styles.css
2. Modify `:root` CSS custom properties
3. Test in browser

### "Fix a bug in filtering"
1. Open Books.html
2. Find the `applyFilters()` function
3. Debug/fix logic
4. Test in browser

### "Add a new feature"
1. Determine if it requires HTML changes, CSS changes, or JS changes
2. Make minimal changes to Books.html and/or styles.css
3. Test thoroughly
4. Update documentation if needed

### "Prepare for production"
- Already production-ready!
- Just deploy to GitHub Pages or other static host
- No build step needed

## Troubleshooting

### Covers not loading
- Check if ISBN is valid (13 digits)
- Verify Open Library has that ISBN: `https://openlibrary.org/isbn/{ISBN}`
- Check browser console for network errors

### Filters not working
- Check browser console for JavaScript errors
- Verify input IDs match the ones used in `bindControls()`
- Test `applyFilters()` function

### Styles not applying
- Verify `styles.css` is in the same directory as `Books.html`
- Check browser dev tools to see if CSS is loading
- Clear browser cache

### GitHub Pages not showing updates
- Wait 1-2 minutes for deployment
- Check GitHub Actions tab for deployment status
- Clear browser cache
- Try incognito/private browsing

## File Checklist

Current repository structure:
```
/
├── .gitignore              ✅ Standard ignores
├── .nojekyll               ✅ GitHub Pages helper
├── Books.html              ✅ Main application
├── styles.css              ✅ All styling
├── index.html              ✅ Redirect entrypoint
├── README.md               ✅ User documentation
├── DAN_DEBUGGER_PROJECT_REVIEW.md  ✅ Technical review
├── DEPLOYMENT.md           ✅ Deployment guide
├── SESSION_NOTES_2026-01-23.md     ✅ Session notes
└── AI_HANDOFF.md           ✅ This file
```

**No Books.CSS file** — It was an empty file and has been removed. All styles are in `styles.css`.

## Code Quality Notes

### Accessibility (A11y)
- Skip link for keyboard users
- Semantic HTML5 elements
- ARIA labels on sections
- Focus-visible styling
- Keyboard navigation support

### Performance
- Lazy-loaded images (`loading="lazy"`)
- Async image decoding (`decoding="async"`)
- No external JavaScript libraries
- Minimal CSS (under 20KB)
- Single HTTP request for styles

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS Grid and Flexbox
- Uses CSS custom properties
- No polyfills needed for target audience

### Security
- No user input stored
- No backend/database
- No authentication
- External links use Open Library (trusted source)
- Static site = minimal attack surface

## Next Steps for AI Agents

If you're continuing work on this project:

1. **Read this file first** — You're doing it! ✅
2. **Read DAN_DEBUGGER_PROJECT_REVIEW.md** — Detailed technical context
3. **Test locally** — Open Books.html and click around
4. **Understand the data model** — Look at the `books` array
5. **Make minimal changes** — Keep it simple and portable
6. **Test thoroughly** — Verify all features still work
7. **Update documentation** — Keep this file and README.md current

## Support

This project is self-contained and documented. Key resources:

- **README.md** — User-facing overview
- **DAN_DEBUGGER_PROJECT_REVIEW.md** — Deep technical review
- **DEPLOYMENT.md** — How to deploy
- **This file (AI_HANDOFF.md)** — AI-specific context

For questions about:
- **Design decisions** → Read DAN_DEBUGGER_PROJECT_REVIEW.md
- **How to deploy** → Read DEPLOYMENT.md
- **How to use** → Read README.md
- **How to modify** → Read this file

---

**Last Updated:** 2026-01-23  
**Status:** Production Ready ✅  
**Deployed:** Ready for GitHub Pages  
**Build Required:** None  
**Dependencies:** None
