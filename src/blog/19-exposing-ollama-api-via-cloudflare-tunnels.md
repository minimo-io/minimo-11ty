---
title: Fine-tunning open-source AI models & Agents for fun and profit
permalink: /blog/fine-tunning-tiny-ai-models-and-agents-for-fun-and-profit/
description: 'Open-source AI tiny models? Self-hosted services? What could go wrong? 😈'
date: 2024-11-21T00:20:00-03:00
image: /assets/images/blog/neural-article.jpeg
imageCaption: 'Image generated using Le Chat from Mistral'
tags: [ai, docker, ollama, experiment]
---

I'm launching a new experiment called [NeuralNinja.com.br](http://neuralninja.com.br),
tied to two simple premises:

<br>

1. The site should be an AI training platform in Portuguese, offering just 3 things: curated AI tools, curated trainings and courses (free & paid) and news.
2. The **whole** project should be created using open-source AI models, from code, to design, to images, to the content itself.

I plan to fine-tune some tiny models for different tasks,
like a content generating assistant specialized in uruguayan & brazilian wine reviews to consume via a Wordpress plugin at [BRAAAY](https://braaay.com)),
helping me out writting some Nodejs & Svelte code, generating a joker bot for [Nostr](https://minimo.io/app/nostr-followback/), etc.

As for NeuralNinja itself, I will need to create an AI Agent to do the following:

-   Get the weekly emails of the top english newsletters about Artificial Intelligence
    (Superhuman, Mindstream, AI Vallery, AI Art Weekly, etc)
-   Summarize their content.
-   Translate it to Portuguese.
-   Generate an image related to the content.
-   Generate the html code for the newsletter.
-   Publish the article at neuralninja.com.br
-   Fire the Beehiiv newsletter

All on a budget, on tiny models, self-hosted locally.

### First step: The API

I will expose some "fine-tuned" Ollama open-source AI models using Cloudflare tunnels,
exposing them via a Dockerized reverse proxy server,
that I will consume myself for the content gen side of things across several projects.

I currently have just the basic setup ready, running in a local machine exposed via a Cloudflare tunnel
(if the projects ends up generating any financial result I will have to setup a HomeLab for the task).

This article is a work in progress, aimed to record the experiment.
One that will (hopefully) end up unleashing a tiny new AI monster into the world, and letting me learn
some new cool stuff.

### Next steps

-   Ollama tunnel but via Dockerized reverse proxy server for more control, security and rate-limiting:
    -   https://github.com/kesor/ollama-proxy
    -   https://gitlab.informatik.uni-halle.de/ambcj/ollama/-/blob/ad897080a299bf86aee16b498edb5ddb250edd35/docs/faq.md
