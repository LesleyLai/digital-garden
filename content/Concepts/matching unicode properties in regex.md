---
parent:
  - "[[regular expression|regex]]"
tags:
  - tools/regex
created: 2025-05-03
modified: 2025-05-03
publish: true
---
Test whether a string contains an emoji:
```js
/\p{Emoji}/u.test("🇰🇷");
```
Specific writing script:
```js
/\p{Script=Hangul}/u.test("안녕하세요");
```

## Reference
- [Unicode: flag "u" and class \p{...}](https://javascript.info/regexp-unicode#unicode-properties-p)
- [Notes – 07:02 Sat 3 May 2025 – David Bushell – Web Dev (UK)](https://dbushell.com/notes/2025-05-03T07:02Z/)