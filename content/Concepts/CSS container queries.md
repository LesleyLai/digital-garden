---
parent:
  - "[[CSS|CSS]]"
tags:
  - computing/css
aliases:
  - container queries
created: 2024-03-11
modified: 2024-03-14
publish: true
---
**Container queries** is a relatively new addition for [[responsive design|responsive design]] in CSS as an alternative to [[CSS media queries|@media queries]]. [^mdn] It allow us to style an element with regard to its parent or container size.

![[../assets/container queries.jpg|container queries.jpg]]
## Motivation

Media queries are based on "when the browser's viewport exceeds certain width and height". However, if a component doesn't match the width of the viewport, container queries can often be a better choice. [^2] 

Examples where a container queries can be useful including card components, pagination, and sidebars that may become full-width on mobile but only occupy a small part on wide screen. [^3]

## How it Works

We can have something like the following [^css-tricks]:

```css
.parent {
  container: layout inline-size;
}

@container (min-width: 400px) {
  .child {
    display: flex;
    flex-wrap: wrap;
  }
}
```

`container: layout inline-size` tells the parent that a child needs to change size. The `container` property is a shorthand for `container-name` and `container-type`.

## See also
- [[CSS media queries|Media queries]]

[^mdn]: [CSS container queries - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
[^2]: [On container queries. — Ethan Marcotte](https://ethanmarcotte.com/wrote/on-container-queries/)
[^3]: [Say Hello To CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/)
[^css-tricks]: [Say Hello to CSS Container Queries | CSS-Tricks](https://css-tricks.com/say-hello-to-css-container-queries/)