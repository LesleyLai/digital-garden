---
tags:
  - writing
  - opinion
created: 2025-04-01
modified: 2025-05-13
publish: true
---
For the past few years, I have tried my best to bury my mind under the sand in regard to "AI", which is pretty atypical for me, as I used to enjoy trying various new technologies and despise old guards when objecting to them without solid reasons. I do use LLM for various non-coding tasks. However,  whenever people hype this technology (which is pretty much a day-to-day experience now), I find it extremely uncomfortable.

Recently, I was forced to do "vibe coding" using tools like Cursor and Windsurf for **two separate** university courses. It's become increasingly clear that some faculties no longer even pretend to care about teaching; as long as students pay their fees, it seems acceptable to designing a whole course letting students building CRUD apps with "AI" and call it education.

So I will ramble some of my experiences below. My opinions may change in the future, and I will reevaluate those technologies once in a while, but I don't think I will use them for anything in the near future.

## Positive Experiences
It can actually teach me things. I learned that I can use [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to make persistent conversation sessions, and Rust's [axum](https://docs.rs/axum/latest/axum/) frameworks, for a few examples

## Negative Experiences
### Low Quality Generated Code
The generated code is **bad**. For example, LLMs will invent redundant code instead of using existing infrastructure (which is more pronounced when the project gets larger, but will happen even when the function is right there in the same file). There is dead code everywhere, and not all dead code can be cleaned up by static analysis since some of it will be called (but just either in a dead branch or not implement any functionality).

LLMs also won't introduce many abstractions, such as functions, unless explicitly asked. Instead, they will be perfectly happy with 300-line functions with tons of states.

### Understanding and Debugging
I've read my past projects. I could explain most lines of my handwritten code even after years (unless I was doing some cursed code-golfing stuff). When a machine generates 200 lines of blobs using multiple features and dependencies you don't know, this understanding is lost. You can read and understand all of it properly, but at this stage, you probably spend more time than writing all the code from scratch yourself.

Without the understanding of the code, when a bug comes (which is a constant occurrence of LLM), you will have no idea how to fix it. A true "vibe coder" will say that you just let the AI agent fix bugs in a loop. My experience is that if LLM can't fix a bug in the first iteration, asking it to fix it again won't help at all (and will just have more generated dead code).

Some people say that when you inherit a legacy code base, you are exactly facing the same situation, and in that sense, reading AI slops is a useful skill. However, when you have a legacy code base, you probably will stop and understand it first (and optionally add tests) before starting to prototype on top of it rapidly.

### Scalability
LLMs are known to have a "context window" problem and struggle to handle projects as they become larger. I notice that LLMs have trouble handling `import` from different files, for example.

### Security
LLMs are known to generate insecure code. I've caught them generating obvious SQL injection vulnerabilities, and there are likely many other issues that someone without formal security training, like me, wouldn't even notice. These tools are also quite dependency-happy and often suggest running scripts directly on my machine. To me, all of these seem like significant risks.

### Getting in Your way
LLM sometimes makes irrelevant changes. Asking it to implement one functionality will break another somewhere else. And they often delete your handwritten code. Sometimes, it will delete your logging code and comments, and other times, it will delete your bugfix and go back to its buggy ways.

The UI of those "AI-powered IDEs" often feels unintuitive and violates my basic expectations of "if I don't do anything, then nothing will be broken automatically." With the "agent" often popping up doing its own thing and the berserk autocomplete, I often need to stop and fix its mess.

LLM will also make design decisions that you may not like for you unless you explicitly give instructions not to. It will choose tech stack, and every website will be React, next.js, and tailwind by default, for example (LLM seems to **really** love tailwind, and will add it to projects where there are existing CSS files and don't use tailwind)

### Cost
"Vibe coding" proponents often claim that they "democratize" coding, but they rarely mention that these tools depend on increasingly expensive services. On the free tier, one will get rated as limited very soon. Even to finish those two project assignments, I need to pay the subscription fee. I can't see how this is "democratizing" when you need wealth to afford it.

I've also talked to multiple people who are more warmed up with "vibe coding," where they seem to burn through the Claude Code fee _even with a subscription already_. It just feels ridiculous that one needs to continuously pay those "trustworthy" companies, such as OpenAI or Claude, to develop things now.

## Final Reflection
Using those things has a negative impact on my mental health. Typing some prompts and waiting for a long time is *incredibly boring*. It makes me feel like a type monkey. Further, my joy of programming got deprived. An analogy I made was comparing that to forcing a drawer to use image generators to generate slops and then fixing the obvious bad spot.

Some "AI enthusiasts" claim that if you encounter a problem with AI, "you just upgrade your prompt engineering skill." I don't know why I should invest time in this when I can learn or create more interesting stuff. Other people claim that you encounter problems because you need to use the latest, better models. See my cost section above for a reply to this.

And then there is the ethical concern, especially about how all those models depend on massive theft on the Internet with no data provenance.

## Continue Experiments
I tried to let it implement some simple functionalities for the rewrite of [my blog](https://lesleylai.info/), but the result is atrocious. It seems to struggle a lot more in a largely human-written code base compared to its own slops (or maybe just because I am not using its "favorite" tech stacks like Next.js).