---
title: "Technical notes: coming soon"
description: "We're preparing in-depth technical write-ups from our lab notes. This is a preview of the format."
pubDate: "2026-09-29"
heroImage: "/images/blog/placeholder.jpg"
tags: ["technical", "coming-soon"]
---

> **Placeholder post.** In-depth technical articles from our notes are on the way. This page shows the format they'll use.

## What's coming

- 🧩 **Microsoft 365 & Intune** baselines and step-by-step configs
- 🌐 **Cloudflare** setups: DNS, WAF rules, Workers and Access policies
- ✉️ **DMARC rollouts** with real report examples
- 🛡️ **Endpoint hardening** checklists for Windows

## Format for technical posts

Each technical article will follow the same structure:

1. **Summary**: what the post solves, in two lines.
2. **Applies to**: products, versions and licence requirements.
3. **Before you start**: access, prerequisites and risks.
4. **Steps**: numbered, with code or screenshots.
5. **Verify**: how to confirm it worked.
6. **Roll back**: how to undo it safely.
7. **References**: vendor documentation links.

```bash
# Example: check a domain's DMARC record
dig +short TXT _dmarc.example.com
```

Want a topic covered first? [Tell us](/contact).
