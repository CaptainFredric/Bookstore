# Bookstore (Library Layout)

A single-file, self-contained book display website.

## Project review

- `DAN_DEBUGGER_PROJECT_REVIEW.md` (build log, architecture, decisions, reusable patterns)

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
