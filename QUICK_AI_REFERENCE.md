# Quick AI Reference Card — Dan DeBugger Bookstore

**⚡ Ultra-Fast Copy-Paste Prompt for AI Assistants**

---

## 🎯 30-Second Context

```
REPO: https://github.com/CaptainFredric/Bookstore
PROJECT: Portfolio-ready bookstore catalog UI (Dan DeBugger)
TECH: Vanilla HTML/CSS/JS (no frameworks)
STATUS: ✅ Fully functional, deployed-ready

MAIN FILES:
- Books.html (catalog page)
- styles.css (all styling)
- AI_PROMPT.md (full context)

FEATURES: Search, filter, sort, real book covers, responsive, accessible

RUN IT: python3 -m http.server 8080

FULL CONTEXT: See AI_PROMPT.md for complete details
```

---

## 📋 Most Common Requests

**"Add a book"**
→ Edit `Books.html`, find `const books = [...]`, add object with ISBN

**"Change colors"**
→ Edit `styles.css`, modify `:root` variables

**"Update footer"**
→ Edit `Books.html`, find `<footer>` section

**"Deploy to web"**
→ See `DEPLOYMENT.md`

**"Full documentation"**
→ Read `DAN_DEBUGGER_PROJECT_REVIEW.md`

**"Latest changes"**
→ Read `SESSION_NOTES_2026-01-23.md`

---

## 🔑 Key File Locations

| Need to... | Edit this file... | Search for... |
|------------|-------------------|---------------|
| Add/edit books | Books.html | `const books = [` |
| Change styling | styles.css | `:root {` |
| Modify filters | Books.html | `applyFilters()` |
| Update header/nav | Books.html | `<header>` |
| Edit footer | Books.html | `<footer>` |
| Change theme | styles.css | `--primary`, `--bg`, etc. |

---

## 🚀 Critical Commands

```bash
# Navigate to project
cd /home/runner/work/Bookstore/Bookstore

# View structure
ls -la

# Run locally
python3 -m http.server 8080

# Check status
git status
git log --oneline -5
```

---

## ✅ Current TODO Priority

1. **High**: Add pagination for book list
2. **High**: More book data entries
3. **Medium**: Add unit tests
4. **Low**: Dark mode toggle

See `AI_PROMPT.md` for full TODO list.

---

## 👤 Contact

**Creator:** Dan DeBugger  
**Email:** dandebugger@example.com  
**Repo:** github.com/CaptainFredric/Bookstore

---

**For complete context, always reference AI_PROMPT.md**
