# Google book API

A book search engine built with React and the Google Books API. Search for any book, browse bestsellers, and tap a card for details.

<img src="./public/screenshot.png" alt="Screenshot" width="600" />

## Tech Stack

| Layer     | Technology                                              |
| --------- | ------------------------------------------------------- |
| Framework | React 19 + Vite                                         |
| Routing   | React Router v7                                         |
| Styling   | SCSS Modules (mobile-first, responsive)                 |
| HTTP      | Axios                                                   |
| Testing   | Vitest + React Testing Library                          |
| API       | [Google Books API](https://developers.google.com/books) |

## Features

- **Search** — Type a term and hit Enter (or click Search) to find books.
- **Bestsellers on load** — The page loads with popular books right away.
- **Book details modal** — Tap any card to see the full details: subtitle, authors, categories, published date, and rating.
- **Responsive** — Four breakpoints: mobile (default), tablet (`768px`), laptop (`1024px`), desktop (`1280px`).
- **Graceful fallbacks** — Missing cover images, authors, or categories handled without breaking.

## Getting Started

### 1. Clone and install

```bash
npm install
```

### 2. Add your API key

Create a `.env` file in the project root:

```
VITE_GOOGLE_BOOKS_API_KEY=your_key_here
```

[Get a key](https://console.cloud.google.com/apis/credentials) from the Google Cloud Console. Enable the _Books API_ for your project.

### 3. Run

```bash
npm run dev      # Dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview the production build
npm test         # Run tests
```

## Project Structure

```
src/
├── components/
│   ├── BookCard/        # Single book card (thumbnail + title)
│   ├── BookList/        # Responsive grid of BookCards
│   ├── Footer/          # Copyright + attribution
│   ├── Heading/         # "Search your books!" hero text
│   ├── Modal/           # Book detail modal (overlay + close)
│   └── SearchBar/       # Text input + search button
├── pages/
│   ├── HomePage/        # Main page — hero + search + results
│   └── NotFoundPage/    # 404 catch-all
├── services/
│   └── bookApi.js       # Axios call to Google Books API
├── scss/
│   ├── mixins/          # _media.scss, _layout.scss, _theme.scss
│   └── variables/       # _colors.scss, _fonts.scss, _variables.scss
├── App.jsx              # Router setup
├── App.scss             # Body-level styles
├── index.scss           # Root reset
└── main.jsx             # Entry point
```

## Responsive Breakpoints

| Name | Min width | Target device       |
| ---- | --------- | ------------------- |
| Base | —         | Mobile phone        |
| `md` | 768px     | iPad / small tablet |
| `lg` | 1024px    | Laptop              |
| `xl` | 1280px    | Desktop             |

Grid, typography, spacing, and the modal all scale across breakpoints.

## API

This app uses a single Google Books API endpoint:

```
GET https://www.googleapis.com/books/v1/volumes?q={term}&key={key}&maxResults=5
```

The response is mapped into `BookCard` and `Modal` via the `volumeInfo` object.

---

Made with · React + Vite · July 2026
