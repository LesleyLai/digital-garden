---
aliases:
  - Anki optional reverse
created: 2024-04-09
modified: 2024-04-09
parent:
  - "[[Anki|Anki]]"
publish: true
tags:
  - tools/anki
---
```
{{#FieldName}}
    This text is only shown if FieldName has text in it
{{/FieldName}}

{{^FieldName}}
    This text is only shown if FieldName is empty
{{/FieldName}}
```

This functionality proves particularly handy when generating an "optional card" based on the presence of content in a field. For example, this is how Anki's "Basic (optional reversed card)" note type work.

## References
- [Card Generation - Anki Manual](https://docs.ankiweb.net/templates/generation.html#conditional-replacement)