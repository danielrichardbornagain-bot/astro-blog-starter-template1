---
title: "Stop domain spoofing: DNS and email security for every business"
description: "SPF, DKIM, DMARC, DNSSEC and registrar locks, explained simply, so criminals can't send email pretending to be you."
pubDate: "2026-10-02"
heroImage: "/images/blog/dns-email-security.jpg"
tags: ["security", "dns", "email"]
---

Your **domain name** is your identity online. It sits behind your website, your email, your data and every app your staff sign in to. If it isn't protected, criminals can **pretend to be you**.

## The common attacks

- 🎣 **Phishing & spoofing**: emails that *look* like they came from your domain, sent to your customers or staff.
- 🔀 **DNS hijacking**: records changed so your traffic or email goes somewhere else.
- 🏷️ **Domain theft**: a weakly protected registrar account is taken over and the domain is moved.

## The fixes (in plain English)

| Control | What it does |
| --- | --- |
| **SPF** | Lists which servers are allowed to send email for your domain. |
| **DKIM** | Signs your outgoing email so receivers can check it wasn't forged or changed. |
| **DMARC** | Tells receivers what to do with email that fails those checks, and sends you reports. |
| **DNSSEC** | Signs your DNS records so they can't be quietly tampered with. |
| **Registrar lock + MFA** | Stops your domain being transferred or changed without you. |

## Our approach

1. **Audit** your current DNS and email setup.
2. **Fix** SPF and DKIM for every service that sends as you (Microsoft 365, marketing tools, invoicing).
3. **Roll out DMARC** in stages, from monitoring to quarantine to reject, without breaking real email.
4. **Lock down** the registrar and turn on DNSSEC where it's supported.
5. **Monitor** the reports and flag anything odd.

This protects more than email. **Websites, blogs, SaaS apps and internal apps** all depend on the same DNS.

[Ask us for a DNS & email check](/contact?topic=security).
