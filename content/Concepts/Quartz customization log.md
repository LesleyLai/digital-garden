---
tags:
  - tools/obsidian
  - tools/quartz
created: 2024-09-17
modified: 2024-11-09
publish: true
---
Here are the changes I've made to my Quartz setup. While I can't promise to include everything or keep it constantly updated, this should give you a good idea of how I've customized this digital garden website.

The idea of document my customization comes from [Quartz customization log | Eilleen's e-Notebook](https://quartz.eilleeenz.com/Quartz-customization-log).

GitHub Repository: [LesleyLai/digital-garden](https://github.com/LesleyLai/digital-garden)

## Disable Buggy Obsidian Comment Parsing in Quartz
`quartz.config.ts`
```diff
-      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
+      Plugin.ObsidianFlavoredMarkdown({
+        comments: false,
+        enableInHtmlEmbed: false,
+      }),
```

## Make Page Titles Larger and also Capitalize Them
`quartz\styles\custom.scss`
```css
.article-title {
    font-size: 2rem;
    text-transform: capitalize;
}
```

## Adjust Style for the Recent Notes Component
Commit: [LesleyLai/digital-garden@2f28ac3](https://github.com/LesleyLai/digital-garden/commit/2f28ac34871d730950e74c3cabb97231de8f738a)

![[../assets/recently edited notes screenshot.png|recently edited notes screenshot.png]]
## Replaces Default Favicon and Og-image
In `quartz/static`

## Adds `robots.txt`
From [Robots.txt template - allowlist | DITig](https://www.ditig.com/publications/robots-txt-template)

The above `robots.txt` does not allow access from the [Internet Archive](https://archive.org/), so I add it back
```txt
# Archive
User-agent: archive.org_bot
Disallow:
```

TBH I don't really expect most scrappers to respect `robots.txt`, though.

## An `OnlyFor` Component
Copied from [Quartz customization log | Eilleen's e-Notebook](https://quartz.eilleeenz.com/Quartz-customization-log#onlyfor-component-and-in-layout).

### Use `OnlyFor` for `RecentNotes` Components in the Index Page
`quartz.layout.ts`
```ts
  afterBody: [
    Component.OnlyFor(
      { titles: ["Home"] },
      Component.RecentNotes({
        showTags: false,
        linkToMore: "/tags" as SimpleSlug,
        limit: 10,
        title: "Recently Edited Notes:",
        // do not include the home page itself in the recently edited notes
        filter: (f) => f.relativePath !== "index.md",
      }),
    ),
  ],
```
## Created & Modified Date
`lastmod.ts`
```js
} else if (source === "frontmatter" && file.data.frontmatter) {
  created ||= file.data.frontmatter.date as MaybeDate
+  created ||= file.data.frontmatter.created as MaybeDate
  modified ||= file.data.frontmatter.lastmod as MaybeDate
  modified ||= file.data.frontmatter.updated as MaybeDate
+  modified ||= file.data.frontmatter.modified as MaybeDate
  modified ||= file.data.frontmatter["last-modified"] as MaybeDate
  published ||= file.data.frontmatter.publishDate as MaybeDate
```

Show both created and modified date on the page

`ContentMeta.tsx`
```js
if (fileData.dates) {
-  segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
+  segments.push(`Created: ${formatDate(fileData.dates.created, cfg.locale)}`)
+
+  if (fileData.dates.created != fileData.dates.modified) {
+  segments.push(`Last Modified: ${formatDate(fileData.dates.modified, cfg.locale)}`)
+  }
}
```

## Use MathJax instead of KaTex
I use certain [MathJax](https://en.wikipedia.org/wiki/MathJax) plugins in my notes which is not supported by [KaTex](https://katex.org/).

`quartz.config.ts`
```js
-      Plugin.Latex({ renderEngine: "katex" }),
+      Plugin.Latex({ renderEngine: "mathjax" }),
```

## Disable Reading Time in Content Pages
[[../Writings/on estimated reading times|Reading time is useless IMHO]].

`quartz.layout.ts`
```js
-    Component.ContentMeta(),
+    Component.ContentMeta({ showReadingTime: false }),
```

## Adds Site name to Title
`quartz/components/Head.tsx`
```jsx
     return (
       <head>
-        <title>{title}</title>
+        <title>{title} | {cfg.pageTitle}</title>
```

## Adds Comments Support
`quartz.layout.ts`
```ts
// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
     ...
+    Component.Comments({
+      provider: "giscus",
+      options: {
+        repo: "LesleyLai/digital-garden",
+        repoId: "R_kgDOMyQ4bw",
+        category: "Announcements",
+        categoryId: "DIC_kwDOMyQ4b84CisbS",
+      },
+    }),
  ],
```

## Visible Properties
See [the commit](https://github.com/LesleyLai/digital-garden/commit/fc2e513565c46b6b0d67a4eaa921a144c6a23f00 "https://github.com/LesleyLai/digital-garden/commit/fc2e513565c46b6b0d67a4eaa921a144c6a23f00")

It is mostly copied from [michelepapucci/quartz-visible-obsidian-property](https://github.com/michelepapucci/quartz-visible-obsidian-property "https://github.com/michelepapucci/quartz-visible-obsidian-property"), but I also fixed some bugs and type errors, and made a few style adjustments. I also makes visible properties opt-in rather than opt-out.
![[../assets/visible properties.png|visible properties.png]]

## Making Sidebar Narrower on Tablet
By default, the sidebar occupies too much screen space on tablets.
```css
@media all and ($tablet) {
  .page {
    & > #quartz-body {
      grid-template-columns: 240px auto !important;

      & > .sidebar {
        padding-left: 0;
        padding-right: 1em;
      }
    }
  }
}
```

## Adds Background for Transparent Images in Dark Mode

Some images in my vault are transparent, which don't display well in dark mode. The following CSS snippet fixes this in Quartz and also slightly darkens all images when dark mode is enabled.

`quartz\styles\custom.scss`
```scss
:root[saved-theme="dark"] #quartz-body img {
  background-color: white;
  filter: brightness(.85) contrast(1.1);
}
```

| Before                                            | After                                     |
| ------------------------------------------------- | ----------------------------------------- |
| ![[../assets/Screenshot from 2024-10-13 18-34-44.png\|300]] | ![[../assets/Pasted image 20241013190345.png\|300]] |
## Make Font Size Larger on Large Desktop Screen
`quartz\styles\custom.scss`
```scss
@media all and (min-width: 1440px) {
  .page > #quartz-body > .center > article {
    font-size: 18px;
  }
}
```

## Distinguish Internal Links to Missing Pages
Obsidian (and Wikis like [MediaWiki](https://en.wikipedia.org/wiki/Wikipedia:Red_link)) will signify links to missing pages.

See [commit here](https://github.com/LesleyLai/digital-garden/commit/37e787f18f831667adc9058f5a058f1494677108)

![[../assets/red link.png|600]]

## Add Bottom Margin to Callout Content
`quartz/styles/custom.scss`
```scss
.callout {
  & > .callout-content {
      margin-bottom: 1em;
  }
}
```

| Before                               | After                                |
| ------------------------------------ | ------------------------------------ |
| ![[../assets/Pasted image 20241102021027.png|Pasted image 20241102021027.png]] | ![[../assets/Pasted image 20241102021107.png|Pasted image 20241102021107.png]] |

## Change Breakpoints Width
`quartz/styles/variables.scss`
```scss
$breakpoints: (
  mobile: 992px, // was 800
  desktop: 1400px, // was 1200
);
```