---
title: "Zamesh is open — come build it with us"
description: "Our fork of Cloudflare's Workers templates is now our featured open-source project. Here's what it is and how to send your first PR."
pubDate: "2026-10-02"
heroImage: "/images/hero-zamesh.svg"
tags: ["zamesh", "open-source", "cloudflare"]
---

**Zamesh** is the Republic's working copy of [Cloudflare's Workers templates](https://github.com/cloudflare/templates): **36 full-stack starter apps** in one pnpm monorepo. We use them to stage customer sites, labs and internal tools — **this blog is literally `astro-blog-starter-template`, rebranded.**

Today we're making it our **featured project to contribute on.**

## What's inside

| Area | Examples |
| --- | --- |
| **Starters** | Astro blog, Next.js, React Router, Vite + React |
| **Storage** | D1, R2 explorer, KV to-do list, Hyperdrive (Postgres / MySQL) |
| **AI** | LLM chat app, text-to-image |
| **Realtime** | Durable Objects chat, multiplayer globe |
| **Platform** | Workflows, Containers, OpenAuth, Workers for Platforms |

## How to help

1. **Fix** — bugs, outdated deps, broken docs
2. **Harden** — secure defaults, headers, Zero Trust-friendly auth *(our speciality)*
3. **Test** — extend the Playwright E2E suite
4. **Add** — new templates that combine bindings like D1 + Workers AI + Queues

## Your first PR in four commands

```bash
git clone https://github.com/danielrichardbornagain-bot/zamesh.git
cd zamesh && pnpm install
pnpm run fix && pnpm run check
git checkout -b fix/my-first-change
```

Then open a pull request and **tick the checklist** in the PR template — it covers `package.json` metadata, the README, `.gitignore` and lockfiles.

👉 **Full guide:** [blog.custompcrepublic.com/zamesh](/zamesh)
