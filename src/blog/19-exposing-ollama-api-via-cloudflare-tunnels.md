---
title: Fine-tunning open-source AI models for fun and profit in 2025
permalink: /blog/how-to-fine-tune-open-source-ai-models-for-fun-and-profit/
description: 'Open-source AI tiny models? Self-hosted services? What could go wrong? 😈 A pledge for 2025.'
date: 2024-11-21T00:20:00-03:00
image: /assets/images/blog/coding-ai-agents.webp
imageCaption: 'Image generated using Flux'
tags: [ai, docker, ollama, experiment]
---

### Intro.

This 2025 I'm launching a couple of new experiments (plus a payments project) 🤖 ₿ 🚀! **Let this be the pledge that holds me accountable.**

---

The first experiment it's called _[Futurewise](http://futurewise.lat)_.
An automated AI training platform, with curated AI tools, news & courses for the LATAM market. Minimal, simple, to the point. A sort of BensBites for low GDP countries.

Of course that could be fairly described as just another shitty newsletter, but in this case, the experiment, (as all experiments should) has a goal.

The goal is to determine whether it is possible for me to automate the whole process of creating & maintaining such a project.
<br>
From content, to images, to code, to operations, using AI & [Playwright](https://playwright.dev/).

The idea is to see the extent in which I can handle this challenge, and to learn more about artificial intelligence (mostly) open-source models in the way.

Also, trying to automate this process will lead me to understanding, using and maybe creating **AI agents** in 2025. Apart from skill-up my Machine learning, [HuggingFace](https://huggingface.co/) & Python skills.

On the other hand, as CTO of [Braaay.com](https://braaay.com) I am learning about wine, driking wine (and craft-beers), a quite lot of them.
By result of embracing this commitment to the project, I became acquainted with the subject and the challenges of running a wine e-Commerce & Showroom in São Paulo & Uruguay.

So in 2025 I will be moving the site, from Woocommerce to a lean and clean Svelte + Tailwind front-end (with a headless Woocommerce in the back, to avoid scaring the crap of the now familiarized editors with the admin interface). Additionally I will use that [Svelte 5](https://svelte.dev/) project to lever a [Tauri](https://tauri.app/) mobile app, for the store's Fidelity & Cashback Club.

I would prefer [Ghost](https://ghost.org/) as a CMS, but life's, unfair as it is sometimes, it's about tradeoffs. So there is mine. I will have to learn to live with that!

And... what does all that have to do with LLM's fine-tunning?

Well, at Braaay, we need to elevante the game. The wine market is crowded but growing.

My way to elevante the game is to contribute with technology, plus a lot of deep transcendental breathing, with sparse [bike rides](/biking/).

So in 2025 I will have to learn how to fine-tune an agent (probably a version of Llama, via [replicate.com](https://replicate.com/)), train it with wine data (already collected from the site), create an [Ollama](https://ollama.com/) version of it and locally host it, using [Cloudflare tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) and a Dockerized reverse proxy server.

The result will be our own in-house AI wine _sommelier_. Like buscawine.com on steroids.

I will use that agent to create several things:

- A Wordpress admin plugin for writting AI enhanced content for the site, with internal links.
- Another (useless) AI chatbot for the site, just to join the hype.
- A wine recommendation system for our app.
- An internal training agent.

I will be posting all stages of both challenges from [Futurewise](/work/futurewise/) & [Braaay](/work/braaay-store/) below at the experiment changelog.
Please (don't) stay tunned, I might just forget to update.

Code for the experiments is already open-sourced at Github [here](https://github.com/minimo-io), so feel free to say hi.
<br>As for payments project I will post an update (and maybe the project itself) sometime Q2 of 2025, it's called [ViiVPay](/work/viivpay/).

Bike around and be safe!

<br>

### Changelog.

- (pending) Create a Nodejs script for retrieving the latest 3 emails from a Gmail account, using [DeepSeek](https://www.deepseek.com/), will later use this to get the latest emails from top AI newsletters.
- Summarize the last week email newsletters retrieved from the email getter script.
- Ollama tunnel but via Dockerized reverse proxy server for more control, security and rate-limiting:

    - https://github.com/kesor/ollama-proxy
    - https://gitlab.informatik.uni-halle.de/ambcj/ollama/-/blob/ad897080a299bf86aee16b498edb5ddb250edd35/docs/faq.md

- Create the wine dataset.
- Choose a base open-source AI model to fine-tune.

- ✅ Create the basic Web UI for the project, using [ChatGPT](https://chatgpt.com/) by OpenAI, and upload it to Vercel.
- ✅ Configure a Cloudflare tunnel, and link it to the Ollama server, using [Claude](https://claude.ai/) by Anthropic.
