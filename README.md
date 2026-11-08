# GDGoC UGM — Hacker Front-End Assignment

A 4-page website for **Google Developer Groups on Campus, Universitas Gadjah Mada**, sliced from the provided Figma design and powered by the [GDGoC UGM API](https://gdgoc-ugm-api.vercel.app/api).

**Live site:** https://gd-goc-hacker-frontend.vercel.app/

**Video walkthrough:** https://drive.google.com/drive/folders/1GdVxb7LS3WA8P20ldp_uTqqDWPPzxpEB?usp=sharing

| Page     | Route                                                             |
| -------- | ----------------------------------------------------------------- |
| Home     | [`/`](https://gd-goc-hacker-frontend.vercel.app/)                 |
| About    | [`/About`](https://gd-goc-hacker-frontend.vercel.app/About)       |
| Overview | [`/Overview`](https://gd-goc-hacker-frontend.vercel.app/Overview) |
| Contact  | [`/Contact`](https://gd-goc-hacker-frontend.vercel.app/Contact)   |

---

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** — Figma colours defined as design tokens in `app/globals.css`
- **shadcn/ui** (Base UI) — Accordion for the FAQ
- **lucide-react** and **Font Awesome** — icons
- **next/font** — Google Sans and Inter, matching the Figma typography
- **ESLint** — linting
- Deployed on **Vercel**

---

## Getting started

```bash
git clone https://github.com/Lamberto673/GdGOC_Hacker_Frontend.git
cd GdGOC_Hacker_Frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | What it does             |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Run the production build |
| `npm run lint`  | Run ESLint               |

No environment variables are needed — the API is public.

---

## Project structure

```
app/
├── layout.tsx              Root layout: fonts, metadata, <html>/<body>
├── globals.css             Tailwind + design tokens (ink, subtle, brand, line, tints…)
├── page.tsx                Home
├── About/                  page.tsx + layout.tsx
├── Overview/               page.tsx + layout.tsx
├── Contact/                page.tsx + layout.tsx
└── components/
    ├── Landing/            Home sections + shared Navbar, Footer, Curiosity
    ├── About/              Heroes, Purpose, Values, Roles, Commitment
    ├── Overview/           Heroes, SectionNav, Tracks, TrackDetail, Outcomes, Formats, Journey, StartingPoint
    ├── Contact/            Heroes, Workspace, Categories, Updates, MessageForm, Guidance
    ├── Loading.tsx         Shared skeleton (loading state)
    └── StatusMessage.tsx   Shared error / empty state with optional "Try again"
lib/
├── api.ts                  API types + generic getData<T>() fetch helper
└── useFetch.ts             Custom hook: data / loading / error / retry
components/ui/              shadcn Accordion
public/assets/              SVG and PNG artwork exported from Figma
```

**Component architecture:** every section of the Figma is its own component, grouped by page. Each route's `page.tsx` only composes those sections, so a page reads top-to-bottom like the design. Shared pieces (`Navbar`, `Footer`, `Curiosity`, `TrackCard`, `Loading`, `StatusMessage`) are reused across pages.

---

## API usage

All 10 endpoints are used. Data flows through three layers:

```
lib/api.ts (getData<T>)  →  lib/useFetch.ts (state)  →  section component (UI)
```

| Endpoint                      | Where it's used                                      |
| ----------------------------- | ---------------------------------------------------- |
| `GET /api/tracks`             | Overview → learning track cards                      |
| `GET /api/tracks/:id`         | Overview → track detail panel ("Explore this track") |
| `GET /api/formats`            | Overview → learning format cards                     |
| `GET /api/journey`            | Overview → learning journey steps 01–04              |
| `GET /api/values`             | About → community value cards                        |
| `GET /api/roles`              | About → ways to contribute                           |
| `GET /api/inquiry-categories` | Contact → category cards + form dropdown             |
| `GET /api/faqs?category=`     | Home → FAQ with category filter                      |
| `GET /api/navigation`         | Footer → Explore links                               |
| `GET /api/stats`              | Footer → Instagram handle and tagline                |

### Loading, error and empty states

Every section that fetches handles all three states:

- **Loading** — pulsing skeleton blocks shaped like the content (`Loading.tsx`)
- **Error** — a message with a **Try again** button that refetches (`StatusMessage.tsx` + `retry` from `useFetch`)
- **Empty** — a friendly message instead of a blank space

Where hardcoded content already existed (FAQ, Footer), it is kept as a **fallback**, so the section still shows useful content if the API is down.

---

## State management

Plain React state — no global store is needed because no state is shared app-wide.

| Where               | State                      | Purpose                                                              |
| ------------------- | -------------------------- | -------------------------------------------------------------------- |
| `useFetch`          | `data`, `loading`, `error` | API results for each section                                         |
| FAQ                 | `category`                 | Selected FAQ filter                                                  |
| Overview `Tracks`   | `selected`                 | Which track's detail panel is open                                   |
| `SectionNav`        | `active`                   | Highlighted section link                                             |
| Contact `Workspace` | `selected` category        | **Lifted up** and shared by the category cards and the form dropdown |
| `MessageForm`       | `form`, `errors`, `sent`   | Controlled inputs, validation, success screen                        |
| `Navbar`            | `open` + `usePathname()`   | Mobile menu and active page pill                                     |

---

## Features

- 4 pages sliced from the Figma design (desktop layout matches the 1440px frames)
- **Responsive** — single-column layouts and a hamburger menu on mobile
- **FAQ category filter** using the API's `?category=` query parameter
- **Track detail panel** fetched by id, showing what you'll do, skills and whether the track is open
- **Synced Contact categories** — clicking a card updates the form dropdown and vice versa
- **Form validation** — required fields, email format and consent, with inline errors and a success screen
- **Active navbar pill** based on the current route
- **Section jump links** on the Overview page

---

## Additional challenges

| Challenge               | How it's covered                                                                                                                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Advanced frontend logic | Client-side FAQ filtering by category; Overview track detail selection                                                                                                                   |
| Code quality            | Typed API responses, a generic typed fetch helper, a reusable custom hook, ESLint passing, `next build` passing                                                                          |
| Data understanding      | Track detail panel (uses `what_you_do`, `skills`, `open`, `color`), value accents from the API `color`, journey numbers formatted from `step`, Contact form categories driven by the API |

---

## Notes

- The API text sometimes differs from the Figma copy. The site shows what the API returns, using the Figma styling.
- The Overview hero artwork is a PNG export, because Figma's background-blur (glass) effect is lost in SVG exports.
- The API has no endpoint for sending messages, so the contact form validates and shows a confirmation without submitting anywhere.
