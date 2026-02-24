# How to Make a Lot of Money (Through Webdev) — Full Course Plan

> **Cohort Format:** Weekly live Saturday lecture (~2hrs speaking + 3-4hrs interactive) + daily self-study (~3hrs/day, Sun–Fri) + weekly take-home assignment (due Friday)  
> **Elimination Rule:** Miss the weekly assignment deadline → you're out, no exceptions  
> **Starting class:** ~20-25 students | **Target:** Students can realistically approach $10k/mo USD within 12 months of graduating  
> **Week 0 (completed):** Students shipped a basic HTML/CSS/JS webapp of their choice

---

## Course Philosophy

Every week has **two pillars**:

| Pillar | Focus |
|---|---|
| 🔧 **Technical** | Hard skills — the code, the tools, the systems |
| 🗣️ **Hustle** | Soft skills — marketing yourself, networking, pitching, cold outreach, building in public, understanding the market |

The hustle pillar is NOT an afterthought. It runs in parallel because **the best developer who can't sell is broke, and the best salesman who can't code is a fraud.** We build both muscles simultaneously.

**AI & Emerging Tech:** Every week has a "Pulse Check" section — a 10-minute segment at the start of each lecture where you discuss the most important thing that happened in AI/tech that week and how it affects their career. This keeps the course alive and adaptive.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PHASE 1: THE FOUNDATION (Weeks 1–4)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

### Week 1 — CSS Mastery & Your Digital Identity

> You already built a basic site. Now make it *beautiful.* And make yourself *findable.*

#### 🔧 Technical Side

**Lecture Topics:**
- The CSS Box Model — really understanding it (margin collapse, border-box, containing blocks)
- Flexbox and CSS Grid as layout engines — when to use which
- Responsive design with mobile-first methodology (media queries, clamp(), container queries)
- CSS custom properties (variables) and systematic design tokens
- Web fonts, typography scale, spacing systems
- Recreating a real-world landing page pixel-perfectly (target: [Linear.app](https://linear.app) or [Vercel.com](https://vercel.com/home))

**Daily Study Plan (Sat–Fri, ~3hrs/day):**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day — attend + review notes | 2hr lecture + 1hr review |
| Sun | Complete [Flexbox Froggy](https://flexboxfroggy.com/) + [Grid Garden](https://cssgridgarden.com/) | 1.5hr |
| Sun | Read MDN Box Model + Layout guides (links below) | 1.5hr |
| Mon | Study the target site (Linear/Vercel) — screenshot every section, annotate spacings | 1hr |
| Mon | Start building the clone — header + hero section | 2hr |
| Tue | Continue clone — feature sections, responsive breakpoints | 3hr |
| Wed | Finish clone — footer, animations, polish | 2hr |
| Wed | Hustle homework (see below) | 1hr |
| Thu | Final QA, deploy | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [MDN: CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout) — The single best CSS layout reference
- 📖 [MDN: The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) — Required reading
- 🎮 [Flexbox Froggy](https://flexboxfroggy.com/) — Interactive flexbox tutorial (30 min)
- 🎮 [Grid Garden](https://cssgridgarden.com/) — Interactive CSS Grid tutorial (30 min)
- 📖 [Every Layout](https://every-layout.dev/) — Layout primitives (free articles)
- 🎥 [Kevin Powell's CSS YouTube](https://www.youtube.com/@KevinPowell) — The best CSS teacher on the internet
- 📖 [CSS-Tricks Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Bookmark-worthy reference
- 📖 [CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) — Bookmark-worthy reference
- 📖 [Google Fonts](https://fonts.google.com/) — Free web fonts
- 🔧 [Responsively App](https://responsively.app/) — FOSS browser for responsive testing

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Why your online presence is your resume now — nobody reads PDFs
- Setting up GitHub properly: profile README, pinned repos, contribution graph
- Setting up a minimal portfolio site (can be a single page on their new clone)
- Why Twitter/X matters for developers — it's the developer watercooler

**Hustle Homework:**
- Create a polished GitHub profile with a [profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- Follow 20 developers/founders in the webdev space on Twitter/X
- Write your first tweet/post: "I'm learning web development. Here's what I built this week:" + screenshot

**Resources:**
- 📖 [GitHub Profile README Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/) — Quick start
- 📖 [Awesome GitHub Profile READMEs](https://github.com/abhisheknaiidu/awesome-github-profile-readme) — Inspiration
- 📖 [Patrick McKenzie: Don't Call Yourself a Programmer](https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/) — **MUST READ**

#### 📝 Weekly Assignment (Elimination Gate)
> Pixel-perfect responsive clone of a modern SaaS landing page (Linear, Vercel, Raycast, or Arc — student picks one). Must be deployed on [GitHub Pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/). Must look good on mobile.

---

### Week 2 — JavaScript: The Real Language & The Art of the DM

> Stop thinking of JS as "the scripting language." It IS the platform.

#### 🔧 Technical Side

**Lecture Topics:**
- JavaScript fundamentals that actually matter: closures, prototypes, `this`
- The Event Loop — how JS actually runs (Philip Roberts' talk is canon)
- DOM manipulation without frameworks — why it matters before React
- `fetch()`, Promises, async/await — the real mental model
- Error handling that doesn't suck
- Building a real interactive app: a task manager / Kanban board in vanilla JS

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | Eloquent JavaScript Ch. 1-4 (Values, Program Structure, Functions, Data Structures) | 3hr |
| Mon | Eloquent JavaScript Ch. 5-6 (Higher-Order Functions, Objects) | 2hr |
| Mon | Watch Philip Roberts Event Loop talk | 0.5hr |
| Mon | Practice: Build a simple todo app from scratch (no tutorial) | 0.5hr |
| Tue | Eloquent JavaScript Ch. 8, 11 (Bugs/Errors, Async Programming) | 2hr |
| Tue | Practice: Add fetch() to pull data from a public API | 1hr |
| Wed | Build the Kanban board — drag & drop, localStorage persistence | 3hr |
| Thu | Polish, deploy | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [Eloquent JavaScript](https://eloquentjavascript.net/) — Free online book, gold standard for learners
- 🎥 [What the heck is the Event Loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) — Philip Roberts, **MANDATORY WATCH**
- 🔧 [Loupe](http://latentflip.com/loupe/) — Event Loop visualizer tool
- 📖 [JavaScript.info](https://javascript.info/) — Modern JS tutorial, incredibly thorough
- 📖 [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — Official reference
- 📖 [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS) — Free on GitHub, deep dive
- 📖 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — Free fake API for testing fetch
- 📖 [Public APIs list](https://github.com/public-apis/public-apis) — Massive list of free APIs

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- The anatomy of a cold DM that gets a response
- How to find people to DM — local businesses, startups, indie founders
- Value-first outreach: "I noticed X about your site, here's how I'd fix it" (with a screenshot/loom)
- The psychology of reciprocity — give before you ask
- Building a "hit list" of 50 potential clients/employers

**Hustle Homework:**
- Build a "Hit List" spreadsheet: 50 people/businesses who might need a developer (local businesses with bad websites, startups hiring, indie hackers with ugly MVPs)
- Send 5 cold DMs on Twitter/LinkedIn with genuine, specific value (not "I'm a developer looking for work")
- Screenshot the DMs and the responses (or non-responses) for next week's debrief

**Resources:**
- 📖 [Alex Hormozi: $100M Offers (summary)](https://www.youtube.com/@AlexHormozi) — Grand Slam Offers framework
- 📖 [Cold Email Masterclass by lemlist](https://www.lemlist.com/blog/cold-email) — Frameworks that work
- 📖 [SaaS Landing Page Examples](https://saaslandingpage.com/) — Study what businesses look like online

#### 📝 Weekly Assignment (Elimination Gate)
> Build a fully functional Kanban/task board in vanilla JS (no frameworks). It must have drag-and-drop, localStorage persistence, and the ability to create/edit/delete tasks. **Bonus:** Deploy it as a Chrome New Tab extension.

---

### Week 3 — Git, Terminal & Developer Tooling + Cold Email That Works

> The tools define the craftsman. Learn the terminal or stay amateur.

#### 🔧 Technical Side

**Lecture Topics:**
- Git beyond `add/commit/push` — branching strategies, rebase, cherry-pick, stash, bisect
- Deliberate merge conflict resolution exercise (paired)
- The terminal as your primary IDE: navigating, piping, scripting basics
- Shell scripting fundamentals (bash/zsh) — automate the boring stuff
- Package managers (npm/yarn/pnpm), `.gitignore`, `.editorconfig`, ESLint, Prettier
- VS Code power-user setup: keybindings, extensions, debugger, integrated terminal

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [The Missing Semester](https://missing.csail.mit.edu/) — Lectures 1-3 (Shell, Shell Tools, Editors) | 3hr |
| Mon | [The Missing Semester](https://missing.csail.mit.edu/) — Lectures 4-6 (Data Wrangling, Command-line, Version Control) | 3hr |
| Tue | [Oh Shit, Git!](https://ohshitgit.com/) — read through all scenarios | 0.5hr |
| Tue | Practice: Create a repo, make 10 commits with branches, practice rebasing | 1.5hr |
| Tue | [Pro Git Book](https://git-scm.com/book/en/v2) Ch. 2-3 | 1hr |
| Wed | Write a shell script that automates something in your workflow | 1.5hr |
| Wed | Hustle homework — cold emails | 1.5hr |
| Thu | Final polish | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [The Missing Semester of CS Education (MIT)](https://missing.csail.mit.edu/) — **SINGLE MOST IMPORTANT RESOURCE THIS WEEK**, free course from MIT
- 📖 [Pro Git Book](https://git-scm.com/book/en/v2) — The definitive Git book, free
- 📖 [Oh Shit, Git!?](https://ohshitgit.com/) — Quick reference for when things go wrong
- 🎮 [Learn Git Branching](https://learngitbranching.js.org/) — Interactive visual Git tutorial
- 📖 [Conventional Commits](https://www.conventionalcommits.org/) — Commit message standard
- 📖 [tldr-pages](https://tldr.sh/) — Simplified man pages
- 📖 [Bash Guide for Beginners](https://tldp.org/LDP/Bash-Beginners-Guide/html/) — Free, thorough
- 🔧 [VS Code Docs](https://code.visualstudio.com/docs) — Tips and tricks

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Cold email that works — subject lines, the PAS framework (Problem-Agitate-Solve)
- Tools for finding emails: Hunter.io (free tier), LinkedIn, company websites
- The "free audit" strategy: record a 2-minute Loom video reviewing someone's website
- How to follow up without being annoying (the 3-touch rule)
- Tracking outreach in a simple spreadsheet (CRM for broke people)

**Hustle Homework:**
- Send 10 cold emails to local businesses or startups with bad websites
- Each email must include a specific observation about THEIR site and a suggestion
- Use the PAS framework (Problem, Agitate, Solve)
- Track everything in a spreadsheet: who, what you said, when, response

**Resources:**
- 📖 [Hunter.io](https://hunter.io/) — Email finder (free tier: 25 searches/mo)
- 🔧 [Loom](https://www.loom.com/) — Free screen recording for personalized outreach
- 📖 [How to Cold Email (by Sam Parr)](https://www.youtube.com/watch?v=V_8bwPBjjuE) — Frameworks from someone who built a media company from cold emails

#### 📝 Weekly Assignment (Elimination Gate)
> **Part A (Technical):** Fork a purposely broken repo (you provide it), fix 5 different types of merge conflicts and issues using git tools (rebase, cherry-pick, bisect, stash), submit the PR with clean commit history.  
> **Part B (Hustle):** Submit your cold outreach tracker spreadsheet with proof of 10 emails sent. Screenshot any replies you got. Write a 200-word reflection on what worked and what didn't.

---

### Week 4 — React: UI as a Function of State + Personal Branding

> Frameworks exist for a reason. Now you'll understand why — because you've suffered without one.

#### 🔧 Technical Side

**Lecture Topics:**
- Why React? — The problem it solves (after suffering with vanilla DOM manipulation)
- Components, Props, State — the mental model
- `useState`, `useEffect` — and why `useEffect` is usually the wrong answer
- Conditional rendering, lists, keys
- React Developer Tools
- Thinking in React: breaking UI into a component tree
- Build a live weather dashboard or crypto tracker (fetching real API data)

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [React.dev: Quick Start](https://react.dev/learn) — work through the entire "Learn" section | 3hr |
| Mon | [React.dev: Thinking in React](https://react.dev/learn/thinking-in-react) | 1hr |
| Mon | [React.dev: Managing State](https://react.dev/learn/managing-state) | 2hr |
| Tue | Build: Weather dashboard using [OpenWeatherMap API](https://openweathermap.org/api) (free tier) | 3hr |
| Wed | Add features: search by city, loading states, error handling | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Polish, deploy on [Vercel](https://vercel.com) | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [React.dev — Learn](https://react.dev/learn) — **Official docs, start here, they're genuinely excellent now**
- 📖 [Thinking in React](https://react.dev/learn/thinking-in-react) — THE mental model article
- 🎥 [React in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=Tn6-PIqc4UM) — Quick context
- 📖 [Vite.js](https://vite.dev/) — Use this to scaffold React projects (`npm create vite@latest`)
- 📖 [OpenWeatherMap API](https://openweathermap.org/api) — Free weather API
- 📖 [React Developer Tools](https://react.dev/learn/react-developer-tools) — Browser extension
- 📖 [Bulletproof React](https://github.com/alan2207/bulletproof-react) — Project structure reference (read, don't clone)

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Personal branding 101 — you ARE a brand whether you like it or not
- Building in public: tweet your progress, share your learning, show your work
- The portfolio that actually gets jobs — 3 real projects > 30 tutorial clones
- LinkedIn optimization: headline formula, banner, about section, featured posts
- How to write about your projects so non-technical people understand the value

**Hustle Homework:**
- Update LinkedIn: professional photo, headline as "Web Developer | Building [specific thing]", compelling About section
- Write a LinkedIn post or Twitter thread about what you've built in the last 4 weeks
- Start a simple blog/notes site (can be a GitHub README or Notion page) documenting your learning journey

**Resources:**
- 📖 [How to Build an Outstanding Developer Portfolio](https://www.joshwcomeau.com/effective-portfolio/) — Josh W Comeau (excellent, practical advice)
- 📖 [Danny Thompson: LinkedIn for Developers](https://www.youtube.com/@DThompsonDev) — Amazing free content on tech career branding
- 📖 [swyx: Learn in Public](https://www.swyx.io/learn-in-public) — **MUST READ** — the biggest career accelerator

#### 📝 Weekly Assignment (Elimination Gate)
> Build a React app that fetches from a real public API and displays data in an interactive, well-designed UI. It must have: search/filter functionality, loading states, error handling, and at least 3 components. Deploy on Vercel. Share it publicly on Twitter/LinkedIn with a writeup.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PHASE 2: ENGINEERING RIGOR (Weeks 5–8)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

### Week 5 — Advanced React & Tailwind CSS + Freelancing 101

> Now you can build. Let's build things that people will actually pay for.

#### 🔧 Technical Side

**Lecture Topics:**
- Custom hooks — extracting reusable logic
- Context API — when (and when NOT) to use global state
- React patterns: compound components, render props, higher-order components
- Tailwind CSS deep dive — utility-first philosophy, responsive design, dark mode
- Component library thinking: building reusable, composable UI primitives
- Introduction to [shadcn/ui](https://ui.shadcn.com/) — not a dependency, a copy-paste pattern
- Build: A multi-page portfolio/agency website using React + Tailwind

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [Tailwind CSS Docs](https://tailwindcss.com/docs) — spend time actually reading them | 2hr |
| Sun | [shadcn/ui](https://ui.shadcn.com/) — explore components, read the source code | 1hr |
| Mon | React.dev: [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) | 1.5hr |
| Mon | React.dev: [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context) | 1.5hr |
| Tue | Build: Agency/portfolio site — homepage, about, services, contact | 3hr |
| Wed | Add: dark mode toggle, animations, responsive polish | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Deploy | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [Tailwind CSS Docs](https://tailwindcss.com/docs/installation) — Official docs, well-written
- 📖 [shadcn/ui](https://ui.shadcn.com/) — Beautiful accessible components you own
- 📖 [Headless UI](https://headlessui.com/) — Unstyled, accessible components
- 📖 [Radix UI](https://www.radix-ui.com/) — Low-level UI primitives
- 📖 [React.dev: Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- 🔧 [Tailwind Play](https://play.tailwindcss.com/) — Online playground
- 📖 [Refactoring UI](https://www.refactoringui.com/) — Design tips for developers (free content on Twitter/book)
- 📖 [Realtime Colors](https://www.realtimecolors.com/) — Visualize color palettes on a real UI

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Freelancing 101 — how to structure a freelance offer
- Pricing: hourly vs. project-based vs. value-based (and why hourly is a trap)
- Where the money is: Upwork (how to actually win), direct outreach, agency subcontracting
- Creating a "productized service" — repeatable deliverable at a fixed price
- Indian freelancer advantages: timezone overlap with EU/Middle East, cost arbitrage

**Hustle Homework:**
- Create an Upwork profile (or similar: Toptal, Contra, Freelancer)
- Write 3 proposal templates for different types of projects (landing page, web app, redesign)
- Apply to 5 real jobs on Upwork with personalized proposals (use the value-first approach)

**Resources:**
- 📖 [The Futur: How to Price Design](https://www.youtube.com/watch?v=RKXZ7t_RiOE) — Chris Do, pricing mastery
- 📖 [Upwork Profile Optimization Guide](https://www.upwork.com/resources/how-to-optimize-your-freelancer-profile) — Free
- 📖 [Freelancing Guide by freeCodeCamp](https://www.freecodecamp.org/news/how-to-start-freelancing/) — Practical overview

#### 📝 Weekly Assignment (Elimination Gate)
> Build a professional agency/portfolio website using React + Tailwind. It must look like something a real agency would have. Include: hero, services, portfolio/case studies, testimonials (can be fictional), contact form (functional with [Formspree](https://formspree.io/) or similar), dark mode. Deploy on Vercel.

---

### Week 6 — Next.js & Full-Stack Thinking + Networking that Works

> Client-side React is a toy. Next.js is the professional toolkit.

#### 🔧 Technical Side

**Lecture Topics:**
- Why Next.js? — File-based routing, SSR vs. CSR vs. SSG vs. ISR
- Server Components vs. Client Components — the new mental model
- App Router deep dive: layouts, loading states, error boundaries
- API routes — building your own backend endpoints
- Environment variables, middleware
- Build: A blog with MDX, dynamic routes, and SEO optimization

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [Next.js Learn course](https://nextjs.org/learn) — Chapters 1-8 | 3hr |
| Mon | [Next.js Learn course](https://nextjs.org/learn) — Chapters 9-16 | 3hr |
| Tue | Build: Blog with MDX — set up project, create layouts, dynamic routes | 3hr |
| Wed | Add SEO (meta tags, OG images, sitemap), deploy to Vercel | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Polish | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [Next.js Learn Course](https://nextjs.org/learn) — **Official interactive course, genuinely excellent**
- 📖 [Next.js Documentation](https://nextjs.org/docs) — Comprehensive reference
- 📖 [Vercel](https://vercel.com) — Free hosting for Next.js apps
- 📖 [MDX](https://mdxjs.com/) — Markdown + JSX
- 📖 [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) — MDX for Next.js
- 📖 [next-seo](https://github.com/garmeeh/next-seo) — SEO management for Next.js
- 📖 [Lee Robinson's Blog](https://leerob.io/) — VP of Product at Vercel, his blog IS a Next.js tutorial
- 📖 [Contentlayer](https://contentlayer.dev/) — Type-safe content for Next.js (if still maintained; check at lecture time)

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Networking that actually works — the "give first" philosophy
- How to approach developers, founders, and potential mentors online
- Discord/Slack communities that matter: Reactiflux, Next.js Discord, local Indian dev communities
- Making warm introductions vs. cold ones
- The "5 people you spend the most time with" — curating your circle intentionally
- How to get value from tech Twitter/X without doom-scrolling

**Hustle Homework:**
- Join 3 developer communities (Discord/Slack) and introduce yourself with a value-adding first message
- Help someone in each community — answer a question, review their code, share a resource
- Reach out to 3 developers you admire with a genuine message (not "can you mentor me" — something specific)

**Resources:**
- 📖 [Reactiflux Discord](https://www.reactiflux.com/) — Largest React community
- 📖 [Next.js Discord](https://nextjs.org/discord) — Official Next.js community
- 📖 [Dev.to](https://dev.to/) — Developer blogging platform
- 📖 [Hashnode](https://hashnode.com/) — Developer blogging with custom domains
- 📖 [Never Eat Alone (summary)](https://www.youtube.com/results?search_query=never+eat+alone+summary) — Networking philosophy

#### 📝 Weekly Assignment (Elimination Gate)
> Build and deploy a personal blog using Next.js App Router. Must have: at least 3 blog posts (write about your learning journey), dynamic routes, SEO meta tags, good typography, responsive design. Deploy on Vercel with a custom domain (free .is or similar domains via [Freenom](https://www.freenom.com/) alternatives, or use Vercel's built-in `.vercel.app` subdomain).

---

### Week 7 — Backend & Databases + Pitching & Proposals

> A frontend without a backend is a brochure. Time to build real products.

#### 🔧 Technical Side

**Lecture Topics:**
- How the internet actually works (deeper): HTTP methods, status codes, headers, CORS
- Node.js/Express basics — or using Next.js API routes as your backend
- Databases 101: SQL vs. NoSQL, when to use what
- PostgreSQL fundamentals: tables, relations, joins, indexes
- Prisma ORM: type-safe database access
- Supabase as a BaaS (Backend as a Service): auth, database, storage, realtime — all free tier
- Build: A full-stack CRUD app (bookmarks manager, expense tracker, etc.)

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [SQLBolt](https://sqlbolt.com/) — complete all lessons (interactive SQL) | 2hr |
| Sun | [How DNS Works](https://howdns.works/) + [How HTTPS Works](https://howhttps.works/) (comics) | 1hr |
| Mon | [Prisma: Getting Started](https://www.prisma.io/docs/getting-started) — follow the quickstart | 2hr |
| Mon | [Supabase Quickstart](https://supabase.com/docs/guides/getting-started) — set up a project | 1hr |
| Tue | Build full-stack app — set up database schema, API routes | 3hr |
| Wed | Build full-stack app — frontend CRUD UI, connect everything | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Deploy | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 🎮 [SQLBolt](https://sqlbolt.com/) — **Interactive SQL tutorial, best way to learn SQL**
- 📖 [How DNS Works](https://howdns.works/) — Visual comic explainer
- 📖 [How HTTPS Works](https://howhttps.works/) — Visual comic explainer
- 📖 [Prisma Docs](https://www.prisma.io/docs) — ORM of choice, excellent docs
- 📖 [Supabase Docs](https://supabase.com/docs) — Free tier is incredibly generous
- 📖 [PostgreSQL Tutorial](https://www.postgresqltutorial.com/) — Comprehensive free reference
- 📖 [HTTP Status Dogs](https://httpstatusdogs.com/) / [HTTP Cats](https://http.cat/) — Fun way to learn status codes
- 📖 [REST API Best Practices](https://restfulapi.net/) — Reference
- 📖 [Backend Roadmap](https://roadmap.sh/backend) — Context for where everything fits

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- How to pitch a project to a client (the 60-second pitch)
- Writing proposals that win: structure, pricing, timelines, scope
- Scope creep: how to identify it, how to say "that's a change order"
- Contracts 101: what to include even for small freelance jobs
- Invoice tools and getting paid internationally (Wise, Payoneer, Razorpay for Indian clients)

**Hustle Homework:**
- Write a full proposal for a fictional project: "A local gym wants a website with class schedules, trainer profiles, and a contact form"
- Include: scope of work, timeline, pricing (use value-based pricing), what's NOT included
- Set up a [Wise](https://wise.com/) or [Payoneer](https://www.payoneer.com/) account for international payments

**Resources:**
- 📖 [Wise](https://wise.com/) — Best for receiving USD in India
- 📖 [Payoneer](https://www.payoneer.com/) — Alternative international payments
- 📖 [AND CO (free proposal/invoice tool by Fiverr)](https://www.and.co/) — Professional proposals
- 🎥 [The Futur: Proposal Writing](https://www.youtube.com/watch?v=dQw4w9WgXcQ) — Search "The Futur proposal" on YouTube for latest

#### 📝 Weekly Assignment (Elimination Gate)
> Build a full-stack CRUD application using Next.js + Prisma + Supabase (or Postgres). Must have: user-facing forms, data display with filtering/sorting, proper error handling, loading states. Ideas: expense tracker, bookmark manager, recipe book, habit tracker. Deploy on Vercel with Supabase backend.

---

### Week 8 — Authentication, Payments & Going Live + Your First Dollar

> The two hardest problems in web dev: auth and getting paid. We solve both this week.

#### 🔧 Technical Side

**Lecture Topics:**
- Authentication deep dive: sessions vs. JWTs vs. OAuth
- Implementing auth with [NextAuth.js](https://next-auth.js.org/) / [Auth.js](https://authjs.dev/) or Supabase Auth
- Protected routes, middleware, role-based access
- Payments with Stripe: Checkout, Customer Portal, Webhooks
- Deploying for real: environment variables, database migrations, error monitoring
- Build: A SaaS starter template with auth + payments + dashboard

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [Auth.js Docs](https://authjs.dev/) — Getting Started + Providers | 2hr |
| Sun | Implement auth in your Week 7 app (Google/GitHub OAuth at minimum) | 1hr |
| Mon | [Stripe Docs: Quickstart](https://docs.stripe.com/checkout/quickstart) — Checkout integration | 2hr |
| Mon | Implement Stripe Checkout in test mode | 1hr |
| Tue | Build SaaS template: auth + Stripe + protected dashboard | 3hr |
| Wed | Polish: proper loading states, error handling, email on signup | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Deploy | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [Auth.js (NextAuth.js v5)](https://authjs.dev/) — The go-to auth solution for Next.js
- 📖 [Supabase Auth](https://supabase.com/docs/guides/auth) — Alternative: built into Supabase
- 📖 [Stripe Docs](https://docs.stripe.com/) — Best API docs on the internet, period
- 📖 [Stripe Checkout Quickstart](https://docs.stripe.com/checkout/quickstart) — Start here
- 📖 [Razorpay Docs](https://razorpay.com/docs/) — For Indian payment processing
- 🔧 [Stripe CLI](https://docs.stripe.com/stripe-cli) — Test webhooks locally
- 📖 [T3 Stack](https://create.t3.gg/) — Reference architecture: Next.js + tRPC + Prisma + NextAuth
- 📖 [Taxonomy by shadcn](https://github.com/shadcn-ui/taxonomy) — Production-ready Next.js app with auth + payments
- 📖 [Sentry](https://sentry.io/) — Error monitoring (generous free tier)

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Making your first dollar online — it's a psychological barrier, not a technical one
- Micro-SaaS: simple tools that solve specific problems for $9-29/mo
- Where to find SaaS ideas: X (Twitter), Reddit, Product Hunt, Indie Hackers
- Landing page → Waitlist → Build — validation before coding
- The "launch on Product Hunt" playbook
- Pricing psychology: anchoring, decoy pricing, free tier strategy

**Hustle Homework:**
- Find 3 micro-SaaS ideas by browsing: Reddit complaints, Twitter feature requests, your own pain points
- For each idea: write a one-paragraph pitch (what it does, who it's for, why they'd pay)
- Create a landing page for your favorite idea using the SaaS template you just built
- Optional but powerful: share the landing page and ask for signups to validate

**Resources:**
- 📖 [Indie Hackers](https://www.indiehackers.com/) — Community of bootstrapped founders
- 📖 [Product Hunt](https://www.producthunt.com/) — See what's shipping
- 📖 [Marc Lou YouTube](https://www.youtube.com/@marclou) — Ships micro-SaaS products at insane speed, **STUDY HIM**
- 📖 [Pieter Levels (@levelsio)](https://twitter.com/levelsio) — Built NomadList, RemoteOK, PhotoAI — the solopreneur god
- 📖 [Startup Ideas Reddit](https://www.reddit.com/r/SaaS/) — r/SaaS, r/microsaas, r/startups

#### 📝 Weekly Assignment (Elimination Gate)
> Ship a complete SaaS boilerplate with: Google/GitHub OAuth, Stripe checkout (test mode), protected dashboard, user settings, landing page. This is your template for every future project. Deploy on Vercel. **Bonus:** Actually launch a waitlist landing page for a micro-SaaS idea and get real signups.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PHASE 3: THE REAL WORLD (Weeks 9–12)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

### Week 9 — AI-Augmented Development + Building an AI-Powered Product

> AI isn't replacing developers. Developers who use AI are replacing developers who don't.

#### 🔧 Technical Side

**Lecture Topics:**
- The AI-enhanced developer workflow: Cursor, GitHub Copilot, Claude, ChatGPT as pair programmers
- Prompt engineering for code: system prompts, context management, chain-of-thought
- Building with AI APIs: OpenAI, Anthropic, together.ai, Groq
- RAG 101: embeddings, vector databases, retrieval-augmented generation
- The [Vercel AI SDK](https://sdk.vercel.ai/) — streaming AI responses in Next.js
- Build: An AI-powered tool (chatbot, content generator, document analyzer, etc.)

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) — Getting Started + Streaming | 2hr |
| Sun | [OpenAI API Docs](https://platform.openai.com/docs) — Introduction + Chat Completions | 1hr |
| Mon | Build: AI chatbot with streaming in Next.js using Vercel AI SDK | 3hr |
| Tue | Extend: Add real functionality — PDF analysis, URL summarizer, or code explainer | 3hr |
| Wed | Polish UI, add conversation history, deploy | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Final QA | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [Vercel AI SDK](https://sdk.vercel.ai/) — **THE easiest way to build AI apps with Next.js**
- 📖 [OpenAI API Docs](https://platform.openai.com/docs) — API reference
- 📖 [Anthropic API Docs](https://docs.anthropic.com/) — Claude API
- 📖 [Groq](https://groq.com/) — Fastest inference, generous free tier
- 📖 [together.ai](https://www.together.ai/) — Open-source model inference, affordable
- 📖 [Ollama](https://ollama.com/) — Run LLMs locally for free
- 📖 [LangChain.js](https://js.langchain.com/) — LLM framework (use sparingly, understand what it abstracts)
- 📖 [Hugging Face](https://huggingface.co/) — Open-source models and datasets
- 📖 [Prompt Engineering Guide](https://www.promptingguide.ai/) — Comprehensive, free
- 🔧 [Cursor](https://cursor.com/) — AI-native code editor

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- AI is the biggest land grab since mobile. The window is NOW.
- How to position yourself as an "AI developer" — the premium is real
- AI wrappers vs. actual AI products — where the real value is
- Selling AI solutions to businesses: "I can automate your X" (customer support, content, data entry)
- The AI agency model: build AI-powered tools as a service

**Hustle Homework:**
- Identify 3 businesses that could benefit from a custom AI tool (e.g., a restaurant wanting an AI menu recommender, a law firm wanting document analysis)
- Write a pitch for one of them: what would you build, how long would it take, what's it worth to them
- Post about your AI project on social media — AI content gets insane engagement right now

**Resources:**
- 📖 [Greg Isenberg YouTube](https://www.youtube.com/@GregIsenberg) — AI startup ideas, constantly shipping
- 📖 [All-in Podcast](https://www.allinpodcast.co/) — Stay informed on AI business trends
- 📖 [Simon Willison's Blog](https://simonwillison.net/) — Best source for practical AI dev insights

#### 📝 Weekly Assignment (Elimination Gate)
> Build and deploy an AI-powered web application using the Vercel AI SDK + any LLM provider. Must have: streaming responses, good UX (not just a text box), some form of memory/context. Ideas: AI resume reviewer, meal planner, code explainer, study buddy, interview prep tool. Deploy on Vercel.

---

### Week 10 — TypeScript & Professional Codebases + Getting Hired

> JavaScript is a fun language. TypeScript is a serious one. Companies pay for serious.

#### 🔧 Technical Side

**Lecture Topics:**
- Why TypeScript: catching bugs at compile time, self-documenting code, team collaboration
- TypeScript essentials: types, interfaces, generics, union/intersection types, type guards
- Migrating a JS project to TS — practical walkthrough
- Reading large codebases: how to navigate, search, trace execution flow
- Open source contribution 101: finding issues, understanding contribution guidelines
- Code review culture: giving and receiving feedback
- Refactoring patterns: when to refactor and when to ship

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) — The Basics through Narrowing | 3hr |
| Mon | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) — Functions through Classes | 2hr |
| Mon | [Type Challenges (Easy)](https://github.com/type-challenges/type-challenges) — Do 5-10 easy challenges | 1hr |
| Tue | Convert your Week 7 or Week 8 project to TypeScript | 3hr |
| Wed | Find an open-source project, read its contributing guide, fix a `good first issue` | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Submit PR, final polish | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) — **Official docs, start here**
- 📖 [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) — Free online book
- 🎮 [Type Challenges](https://github.com/type-challenges/type-challenges) — Learn TS by solving puzzles
- 📖 [Total TypeScript (free tutorials)](https://www.totaltypescript.com/tutorials) — Matt Pocock, the TS teacher
- 🎥 [No BS TS by Jack Herrington](https://www.youtube.com/playlist?list=PLNqp92_EXZBJ4CBrQjsa7BN0xFCHVRGEP) — Free YouTube series
- 📖 [Good First Issues](https://goodfirstissues.com/) — Find beginner-friendly open-source issues
- 📖 [First Contributions](https://github.com/firstcontributions/first-contributions) — Learn the contribution workflow
- 📖 [Sourcegraph](https://sourcegraph.com/) — Code search across open-source repos

#### 🗣️ Hustle Side

**Lecture Topics (20 min segment):**
- Getting hired as a developer in India — the real landscape
- Remote jobs: where to find them (We Work Remotely, RemoteOK, Arc.dev, Turing)
- Startup jobs on AngelList/Wellfound — often more accessible than FAANG
- The interview process: what to expect (coding rounds, system design, culture fit)
- How to negotiate salary — the science (never give a number first, BATNA)
- Contract work vs. full-time — pros and cons for each life stage

**Hustle Homework:**
- Apply to 5 real remote jobs (even if underqualified — the point is getting reps in)
- For 2 of them, include a personalized Loom video showing a quick project you built
- Start a "job prep" tracker: companies, roles, application date, status, notes

**Resources:**
- 📖 [We Work Remotely](https://weworkremotely.com/) — Remote job board
- 📖 [RemoteOK](https://remoteok.com/) — By @levelsio
- 📖 [Arc.dev](https://arc.dev/) — Remote developer jobs (vetted)
- 📖 [Wellfound (AngelList)](https://wellfound.com/) — Startup jobs
- 📖 [Levels.fyi](https://www.levels.fyi/) — Salary data
- 📖 [Neetcode.io](https://neetcode.io/) — If they need DSA prep (free)
- 📖 [How to Negotiate (by Patrick McKenzie)](https://www.kalzumeus.com/2012/01/23/salary-negotiation/) — **MUST READ** before any negotiation

#### 📝 Weekly Assignment (Elimination Gate)
> **Part A:** Convert one of your previous projects to full TypeScript with strict mode. No `any` types except where genuinely needed (and documented why).  
> **Part B:** Submit a pull request to any open-source project. Can be documentation, a bug fix, or even a typo — the point is experiencing the workflow. Share the PR link.

---

### Week 11 — Testing, Performance & DevOps + The $10k/mo Playbook

> Amateurs ship code. Professionals ship tested, monitored, performant code.

#### 🔧 Technical Side

**Lecture Topics:**
- Testing philosophy: what to test, what not to test, the testing trophy
- Unit tests with Vitest — testing React components
- Integration testing with Playwright — E2E testing
- Web performance: Core Web Vitals (LCP, FID, CLS), Lighthouse, bundle analysis
- Image optimization, lazy loading, code splitting
- Basic DevOps: CI/CD with GitHub Actions, preview deployments
- Monitoring: Sentry for errors, Vercel Analytics for performance

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture day | 2hr + 1hr review |
| Sun | [Vitest Docs](https://vitest.dev/) — Getting Started + Writing Tests | 2hr |
| Sun | Write tests for your Week 8 SaaS template — at least 5 meaningful tests | 1hr |
| Mon | [Playwright Docs](https://playwright.dev/) — Getting Started | 1.5hr |
| Mon | Write an E2E test: user signup → navigate dashboard → create item | 1.5hr |
| Tue | [web.dev: Performance](https://web.dev/performance/) — Core Web Vitals articles | 1.5hr |
| Tue | Run Lighthouse on your projects, fix the top 3 issues | 1.5hr |
| Wed | Set up GitHub Actions: lint + test + deploy on push to main | 2hr |
| Wed | Hustle homework | 1hr |
| Thu | Final polish | 2hr |
| Fri | Submit assignment (deadline) | — |

**FOSS Resources & Links:**
- 📖 [Vitest](https://vitest.dev/) — Fast unit testing for Vite/React projects
- 📖 [Playwright](https://playwright.dev/) — E2E testing (by Microsoft, FOSS)
- 📖 [Testing Library](https://testing-library.com/) — DOM testing utilities
- 📖 [web.dev Performance](https://web.dev/performance/) — Google's performance guides
- 📖 [Lighthouse](https://developer.chrome.com/docs/lighthouse/) — Built into Chrome DevTools
- 📖 [GitHub Actions Docs](https://docs.github.com/en/actions) — Free CI/CD for public repos
- 📖 [Sentry](https://sentry.io/) — Error tracking (generous free tier)
- 📖 [Bundlephobia](https://bundlephobia.com/) — Check npm package sizes before installing
- 📖 [Kent C. Dodds: Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) — Testing philosophy

#### 🗣️ Hustle Side

**Lecture Topics (30 min segment — this one's bigger):**
- **The $10k/mo Playbook** — multiple paths, pick the one that fits your temperament:
  - **Path 1: Remote Job** — $2,000-5,000/mo to start, scale with experience. Safe, predictable.
  - **Path 2: Freelancing** — $1,000-3,000/project, build to $10k/mo with 2-3 monthly clients.  
  - **Path 3: Productized Service** — "I'll build you a [specific thing] for $[fixed price]" — scale by templating.
  - **Path 4: Micro-SaaS** — Build once, sell forever. Hardest but highest ceiling.
  - **Path 5: Agency** — Get good, hire juniors, take on bigger projects. Hard to start, very scalable.
- Building multiple income streams — don't bet everything on one path
- The math: ₹8.3L/mo ($10k) is absolutely achievable from India with global clients
- Case studies: Indians making $10k+ through webdev (real examples)

**Hustle Homework:**
- Choose your primary path (or a combination)
- Create a 90-day action plan: what specific steps will you take in the next 90 days to start earning?
- Share your plan with the cohort for peer feedback

**Resources:**
- 📖 [Naval Ravikant: How to Get Rich](https://nav.al/rich) — Leverage, specific knowledge, accountability
- 📖 [Paul Graham: Do Things That Don't Scale](https://paulgraham.com/ds.html) — **MUST READ**
- 📖 [Alex Hormozi: $100M Offers](https://www.youtube.com/@AlexHormozi) — How to make offers so good people feel stupid saying no
- 📖 [The Ladders of Wealth Creation](https://nathanbarry.com/wealth-creation/) — Nathan Barry's framework

#### 📝 Weekly Assignment (Elimination Gate)
> **Part A:** Add a CI/CD pipeline (GitHub Actions) to your best project: lint, test, deploy. Must have at least 3 unit tests and 1 E2E test that pass in CI.  
> **Part B:** Write your 90-day earning plan (1–2 pages). Include: your chosen path(s), specific weekly actions, income targets per month, and how you'll measure progress.

---

### Week 12 — Capstone: Ship Something Real + Demo Day

> The final gate. Build something real, deploy it, and present it like a professional.

#### 🔧 Technical Side

**Lecture Topics (first half):**
- Architecture review: how to plan a project from idea to deploy
- The tech stack decision framework: choosing the right tools for the job
- Monorepo vs. multi-repo, project structure at scale
- Performance optimization checklist
- Security basics: OWASP Top 10, input validation, rate limiting
- What to learn next after this cohort: the roadmap forward

**Capstone Project (second half):**
- Students work on their capstone projects with live office hours / pair programming
- 1-on-1 code reviews with instructor during the week

**Daily Study Plan:**

| Day | What to Study | Time |
|---|---|---|
| Sat | Lecture + start capstone planning | 3hr |
| Sun | Build capstone | 3hr |
| Mon | Build capstone | 3hr |
| Tue | Build capstone | 3hr |
| Wed | Polish, test, deploy | 3hr |
| Thu | Prep demo, record video | 3hr |
| Fri | Submit capstone (final deadline) | — |

**FOSS Resources & Links:**
- 📖 [System Design Primer](https://github.com/donnemartin/system-design-primer) — Overview of how systems work
- 📖 [OWASP Top 10](https://owasp.org/www-project-top-ten/) — Web security fundamentals
- 📖 [roadmap.sh](https://roadmap.sh/) — Interactive roadmaps for every tech career path
- 📖 [Patterns.dev](https://www.patterns.dev/) — Modern web app design patterns (free)
- 📖 [Web Security Academy](https://portswigger.net/web-security) — Free, by PortSwigger
- 📖 [High Scalability](http://highscalability.com/) — How real systems are built
- 📖 [Paul Graham: Maker's Schedule, Manager's Schedule](https://paulgraham.com/makersschedule.html) — Time management for builders

#### 🗣️ Hustle Side — Demo Day Prep

**Lecture Topics (20 min segment):**
- Presenting your work: the 3-minute demo format
- Storytelling: problem → solution → impact — not "I used React and Tailwind"
- How to talk about your technical decisions to non-technical clients
- The "portfolio walkthrough" pitch: what to say in a client/hiring call
- Next steps: the personal coaching program and what to expect

**Hustle Homework:**
- Prepare a 3-minute demo video of your capstone project
- The video must explain: the problem, the solution, your tech choices (briefly), and a live demo
- Share it publicly on LinkedIn, Twitter, and YouTube
- Reach out to 5 people (potential clients/employers) with a link to your demo

#### 📝 Final Capstone Assignment (Elimination Gate)

> **Build and ship a complete, production-quality web application.** This is your magnum opus.

**Requirements:**
1. **Original idea** — solves a real problem (not a todo app, not a tutorial clone)
2. **Full-stack** — Next.js frontend + backend (API routes or separate service)
3. **Database** — PostgreSQL via Prisma/Supabase
4. **Authentication** — OAuth or email/password
5. **Deployment** — Live on Vercel with a real URL
6. **TypeScript** — Strict mode, no `any` types
7. **Testing** — At least 5 tests (unit + E2E)
8. **CI/CD** — GitHub Actions pipeline
9. **3-minute demo video** — Professional quality, publicly shared
10. **Source code** — Clean, well-documented GitHub repo

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## POST-COHORT: PERSONAL COACHING
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Students who survive all 12 weeks enter the personal coaching phase. The structure shifts:

- **Weekly 1-on-1:** 30-minute calls focused on their specific path (freelancing, job hunting, SaaS)
- **Accountability:** Weekly revenue/progress check-ins
- **Deal review:** You review their proposals, pitches, and client communications
- **Code review:** Ongoing code quality feedback on their real projects
- **Warm intros:** Connect surviving students with your network as appropriate

---

## MASTER RESOURCE LIST

### 📚 Foundation & Systems
| Resource | URL | Type |
|---|---|---|
| MDN Web Docs | https://developer.mozilla.org/ | Reference |
| The Missing Semester (MIT) | https://missing.csail.mit.edu/ | Course |
| Linux Journey | https://linuxjourney.com/ | Course |
| How DNS Works | https://howdns.works/ | Visual |
| How HTTPS Works | https://howhttps.works/ | Visual |
| Eloquent JavaScript | https://eloquentjavascript.net/ | Book |
| JavaScript.info | https://javascript.info/ | Book |
| You Don't Know JS | https://github.com/getify/You-Dont-Know-JS | Book |

### ⚛️ Modern Stack
| Resource | URL | Type |
|---|---|---|
| React.dev | https://react.dev/learn | Docs |
| Next.js Learn | https://nextjs.org/learn | Course |
| Next.js Docs | https://nextjs.org/docs | Docs |
| Tailwind CSS Docs | https://tailwindcss.com/docs | Docs |
| shadcn/ui | https://ui.shadcn.com/ | Components |
| Prisma Docs | https://www.prisma.io/docs | ORM |
| Supabase Docs | https://supabase.com/docs | BaaS |
| Vercel AI SDK | https://sdk.vercel.ai/ | AI |
| TypeScript Handbook | https://www.typescriptlang.org/docs/handbook/ | Docs |

### 🧪 Quality & DevOps
| Resource | URL | Type |
|---|---|---|
| Vitest | https://vitest.dev/ | Testing |
| Playwright | https://playwright.dev/ | E2E Testing |
| GitHub Actions | https://docs.github.com/en/actions | CI/CD |
| web.dev Performance | https://web.dev/performance/ | Performance |
| OWASP Top 10 | https://owasp.org/www-project-top-ten/ | Security |

### 🧠 Career, Mindset & Business
| Resource | URL | Type |
|---|---|---|
| Patrick McKenzie: Don't Call Yourself A Programmer | https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/ | Essay |
| Patrick McKenzie: Salary Negotiation | https://www.kalzumeus.com/2012/01/23/salary-negotiation/ | Essay |
| Paul Graham: Essays | https://paulgraham.com/articles.html | Essays |
| swyx: Learn in Public | https://www.swyx.io/learn-in-public | Essay |
| Naval: How to Get Rich | https://nav.al/rich | Thread |
| Josh Comeau: Portfolio Guide | https://www.joshwcomeau.com/effective-portfolio/ | Guide |
| Nathan Barry: Ladders of Wealth | https://nathanbarry.com/wealth-creation/ | Essay |
| Indie Hackers | https://www.indiehackers.com/ | Community |
| Marc Lou | https://www.youtube.com/@marclou | YouTube |
| Pieter Levels (@levelsio) | https://twitter.com/levelsio | Twitter |

### 💰 Freelancing & Jobs
| Resource | URL | Type |
|---|---|---|
| Upwork | https://www.upwork.com/ | Platform |
| We Work Remotely | https://weworkremotely.com/ | Jobs |
| RemoteOK | https://remoteok.com/ | Jobs |
| Arc.dev | https://arc.dev/ | Jobs |
| Wellfound (AngelList) | https://wellfound.com/ | Startup Jobs |
| Wise | https://wise.com/ | Payments |
| Payoneer | https://www.payoneer.com/ | Payments |

### 🤖 AI Development
| Resource | URL | Type |
|---|---|---|
| OpenAI API Docs | https://platform.openai.com/docs | API |
| Anthropic Docs | https://docs.anthropic.com/ | API |
| Ollama | https://ollama.com/ | Local LLMs |
| Prompt Engineering Guide | https://www.promptingguide.ai/ | Guide |
| Cursor | https://cursor.com/ | IDE |
| Groq | https://groq.com/ | Inference |

---

## WEEKLY PULSE CHECK TEMPLATE

At the start of every lecture (10 min):
1. **What happened this week in AI/tech?** — one headline, one takeaway
2. **How does it affect YOU?** — new tool, new opportunity, new threat?
3. **What did you ship this week?** — quick wins, public posts, client work
4. **Shoutouts** — who in the cohort did something impressive?

---

## ATTRITION EXPECTATIONS

Based on the Week 0 →  Week 1 drop (70 → 20-25), expect:

| Phase | Expected Students | Vibe |
|---|---|---|
| Weeks 1–4 | 20-25 → ~12-15 | CSS/JS will filter the lazy |
| Weeks 5–8 | 12-15 → ~8-10 | Full-stack is where many break |
| Weeks 9–12 | 8-10 → ~5-7 | The survivors. These are your people. |
| Coaching | 5-7 | Personal, high-touch, high-ROI |

This is fine. **You're not building a bootcamp. You're building a filter.** The 5-7 who survive are the ones who will actually make money. Focus your energy on them.

---

> *"The best time to plant a tree was 20 years ago. The second best time is right now. But the tree doesn't grow if you keep digging it up to check the roots."*  
> — Ship, iterate, repeat.
