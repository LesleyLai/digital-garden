---
created: 2024-04-01
modified: 2024-04-07
parent:
  - "[[static site generators|static site generators]]"
publish: true
tags:
  - computer/webdev/ssg/astro
aliases:
  - "#computer/webdev/ssg/astro"
---
# Astro
A static-site generator. Astro use a template language `.astro` kind of similar to [[jsx|jsx]], though it separates a JavaScript-based "header" and the markup. Unlike 
Everything in Astro are compiled to 
- [[./Astro component props|component props]]

## Upgrade Astro
To upgrade Astro, we need to upgrade its integrations too
```sh
npm install astro@latest

# Example: upgrade the blog tutorial Preact integration
npm install @astrojs/preact@latest
```

## Getting markdown pages
e.g.
```js
const allPosts = await Astro.glob('../pages/posts/*.md');
```

For collections we need to use `getCollection` instead
```js
import { getCollection } from "astro:content";

const allPosts = await getCollection("posts");
```

## `getStaticPaths` function
returns an array of page routes

Used to generate multiple pages from a same file