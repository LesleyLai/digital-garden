---
tags:
  - tools/obsidian
  - tools/quartz
created: 2024-09-17
modified: 2024-09-17
publish: true
---
Here are the changes I've made to my Quartz setup. While I can't promise to include everything or keep it constantly updated, this should give you a good idea of how I've customized this digital garden website.

The idea of document my customization comes from [Quartz customization log | Eilleen's e-Notebook](https://quartz.eilleeenz.com/Quartz-customization-log).

GitHub Repository: [LesleyLai/digital-garden](https://github.com/LesleyLai/digital-garden)

## An `OnlyFor` Component
Copied from [Quartz customization log | Eilleen's e-Notebook](https://quartz.eilleeenz.com/Quartz-customization-log#onlyfor-component-and-in-layout).

And then in the layout file the syntax is:
`quartz.layout.ts`
```ts
  afterBody: [
    Component.OnlyFor(
      { titles: ["index"] },
      Component.RecentNotes({ showTags: false, limit: 5, title: "Recently edited notes:" }),
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
Useless IMHO
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