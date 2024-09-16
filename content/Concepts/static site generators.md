---
aliases:
  - "#computer/webdev/StaticSiteGenerator"
created: 2024-04-01
modified: 2024-04-07
publish: true
tags:
  - "#computer/webdev/StaticSiteGenerator"
---

There are two camps of static site generators - the traditional one generate a multi-paged static site, and some others generates [[single-page application|SPA]] that pretended to be a static site. The later camp need to use techniques such as the [[PRPL Pattern|PRPL Pattern]] to address some short-comings of SPA.

## Generate static HTML
- Jekyll
- Hugo

## Generates SPA
- [[./GatsbyJS|GatsbyJS]]
- Next.js

## Hybrid
- [[./Astro|Astro]] (static HTML by default, but adding [view transition](https://docs.astro.build/en/guides/view-transitions) makes it SSA)