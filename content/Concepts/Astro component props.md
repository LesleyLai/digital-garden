---
created: 2024-04-04
modified: 2024-04-04
parent:
  - "[[Astro|Astro]]"
publish: true
tags:
  - computing/webdev/ssg/astro
---
## Typing
To add TypeScript Types for props, we can add a TypeScript `Props` interface to the component frontmatter.
```astro
---
interface Props {
  name: string;
  greeting?: string;
}
const { greeting = 'Hello', name } = Astro.props;
---
<h2>{greeting}, {name}!</h2>
```

If the component must be passed children to its default slot, we can enforce this by using `type Props = { children: any; };`.

## References
[TypeScript | Docs](https://docs.astro.build/en/guides/typescript/#component-props)
## See Also
- [[React props|React props]]