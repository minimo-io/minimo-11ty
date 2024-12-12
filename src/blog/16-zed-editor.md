---
title: My whirlwind romance with the Zed AI Editor
permalink: /blog/the-zed-ai-editor/
description: "Look, VS Code, it's not you, it's me. Well, actually... it's Zed 😬"
date: 2024-10-28T17:46:00-03:00
image: /assets/images/blog/zed-editor-2.png
imageCaption: 'Zed AI Editor'
tags: [ai, editors]
---

## Tha-Zed

I've been seeing this new editor, and things are getting pretty serious.

<blockquote>
    <p>
        Designed for high-performance collaboration with humans and AI.
    </p>
</blockquote>

After years of watching the CPU fan of my old MacBook Air (13-inch, early 2015) go crazy just to open a TypeScript file,
I stumbled upon Zed - a next-gen code editor written in Rust, _designed for high-performance collaboration with humans and AI_.

Yep, [Zed](https://zed.dev/) is another AI editor on the rise. There is also some [Cursor](https://www.cursor.com/) out there, for which I could not care less at the moment. But an open-source editor that [rises $10M](https://techcrunch.com/2023/03/15/zed-code-editor-raises-10m/), well, it just happens that I am.

But the real game-changer? I've hooked it up with [llama3.2-3b-instruct](https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct) through Ollama as my AI coding buddy (yep, i do like tiny open source models, and nope, they are not as good as Claude or ChatGPT),
and things are rolling just fine.

Of course you can configure Zed to work with Anthropic, GitHub Copilot or OpenAI. For this you will just need to upload your API keys in the corresponding Assistant config.

The editor is in v0.158.2 as the time of writing, has few useful extensions and basic snippets, but boy it's fast.

I've been switching my stack since 2023, focusing more and more on performance.
I still have a long way to go, but as was my interest in Eleventy and Static-Site-Generators, it's now time for editors like Zed and the Rust Language for my backend and AI related adventures.

(Stay tuned for my upcoming article about [Ollama](https://ollama.com/) - it's a whole other rabbit hole of local AI goodness).

Speaking of Rust - as someone diving into the world of zero-cost abstractions and fighting the borrow checker, Zed feels like the best choice.

Weekly updates tell me that the development is undergoing at a good rythm, and that the team is being quite open about decisions (check [their youtube channel](https://www.youtube.com/@zeddotdev) for more details).

So I am hopeful to fully substitute Visual Studio Code soon.

## Zed's Configuration, my setup

I'll be sharing my actual Zed config here that you can shamelessly copy.
Expect some carefully crafted settings for both Rust and (Svelte + TypeScript + Tailwind) development, plus my Ollama integration setup.

👉 [Check it out in Github](https://github.com/minimo-io/dev-config-files).

</div>
<div class="wrapper-wide">
    <center>
        <a href="/assets/images/blog/zed-editor-3.png">
            <img src="/assets/images/blog/zed-editor-3.png" alt="zed-editor-example" class="img-rounded Xd-none-mobile img-post">
        </a>
    </center>
</div>
<div class="wrapper">

## My verdict

Quite an ambitious piece of software that's in its early days, but if you're tired of your editor using more RAM than Chrome,
or if you're curious about integrating AI into your workflow without paying for tokens to get paid for groceries or selling your soul, give Zed a shot.
See if it fits your needs. Check its performance, its AI integration and Collaboration capabilities, and decide if its worth your time.

BTW: You can configure Zed to have the same base keymap as VSCode and it also includes "Vim Mode", check it out [here](https://zed.dev/docs/vim).

In any case, use its powers responsibly. Don't say I didn't warn you... Now go forth and may the code be with you!
<br><br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/JGz7Ou0Nwo8?si=YizD-YfWYuMIOo1h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Long format fans 👇
<br><br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/fV4aPy1bmY0?si=mDyyQ-NVF9rWOjP1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br>
Farewell you coders!
