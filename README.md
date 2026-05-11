# Bookstore (Library Layout)

A single-file, self-contained book display website.

## 🤖 AI Assistant Context (NEW!)

**Use these files to get an AI up to speed instantly:**
- **`HOW_TO_USE_AI_DOCS.md`** — Start here! Complete guide on using AI context files
- **`AI_PROMPT.md`** — Full cumulative context for any AI platform (copy-paste ready)
- **`QUICK_AI_REFERENCE.md`** — Ultra-fast 30-second reference card
- **`CHANGELOG.md`** — Project evolution and version history

## 🎯 Generic Templates for Future Projects (NEW!)

**Reusable templates for creating AI context in ANY project:**
- **`UNIVERSAL_AI_CONTEXT_GUIDE.md`** — Complete guide to the template system
- **`GENERIC_AI_PROMPT_TEMPLATE.md`** — Full context template for any project
- **`GENERIC_QUICK_AI_REFERENCE_TEMPLATE.md`** — Quick reference template for any project

These templates let you create AI-ready documentation for any future Dan DeBugger project in minutes!

## Documentation

- `DAN_DEBUGGER_PROJECT_REVIEW.md` — Technical deep-dive (build log, architecture, decisions, reusable patterns)
- `SESSION_NOTES_2026-01-23.md` — Latest session summary

## Deploy

- `DEPLOYMENT.md` (GitHub Pages + other static hosts)

## Open it

- Double-click `Books.html`, or
- Run this from the project folder:

```bash
open "Books.html"
```

## What’s inside

- Sticky navbar + hero section
- About + Collections + FAQ + Newsletter + Contact sections
- Books grid with **search**, **genre filter**, **format filter**, and **sorting**
- Real cover images via Open Library (ISBN)
- Sample compare pricing layout (list vs sale)
- Styling in `styles.css`, logic in `Books.html`

## Customize the books

Edit the `books` array near the bottom of `Books.html`:

- `title`, `author`, `genre`, `format`, `isbn13`, `rating`, `year`, `featured`
- Optional: `listPriceUsd`, `priceUsd`
