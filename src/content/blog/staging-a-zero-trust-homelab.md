---
title: "Staging a Zero Trust homelab"
description: "How we take a homelab from 'everything on one flat LAN' to identity-first access — without killing your ping."
pubDate: "2026-09-24"
heroImage: "/images/hero-zerotrust.svg"
tags: ["security", "homelab", "zero-trust"]
---

Most homelabs start the same way: **one router, one flat network, everything can talk to everything.** It works — until a smart plug, a cracked game launcher or a guest's laptop can see your NAS.

## The Republic approach

**Zero Trust** boils down to one rule: *never trust the network, always verify the identity.*

- 🔑 **Identity first** — every admin panel sits behind a login you control, not an open port
- 🧱 **Segment** — gaming rig, IoT, servers and guests each get their own lane
- 🚪 **No inbound holes** — use an outbound tunnel instead of port-forwarding
- 📜 **Log it** — if you can't see who connected, you can't secure it

## A sane staging order

1. **Inventory** every device. You'll find at least one you forgot.
2. **Split the network** — VLANs or separate SSIDs for IoT and guests.
3. **Close port-forwards** and publish services through a tunnel with an access policy.
4. **Add MFA** to anything with an admin page.
5. **Test from outside** — phone on mobile data, try every service.

> **Gaming tip:** keep your main rig on wired Ethernet in its own segment. Segmentation adds *no* meaningful latency to games — open ports add risk.

Want us to stage it for you? Ask in the [forum](https://forum.custompcrepublic.com) or visit the [lab](https://lab.custompcrepublic.com).
