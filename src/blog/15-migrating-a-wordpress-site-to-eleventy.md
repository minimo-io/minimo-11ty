---
title: Migrating a +800 pages Wordpress site to Eleventy
description: 'How to successfully migrate an iGaming site for performance'
date: 2024-04-04T18:10:00-03:00
tags: [eleventy, wordpress, jamstack]
---

### The scenario

The site in question supports reviews, articles, pages and categories in 3 different languages: pt-br, es, and en.

It has a total of 809 urls with unique content, behind a DigitalOcean Droplet (2 GB Memory / 2 AMD vCPUs / 60 GB Disk).

Wordpress is a great tool, I love it and love my clients who use it even more (I specialize in [WP translations and performance](/blog/understanding-wordpress-translation-system/)) but it can quickly become a pain in the a#@ to maintain.

[Betizen.org](https://www.betizen.org/), the site provides reliable listings of online casinos, games, bonuses and affiliate programs, without scams or BS! Receiving lots of junk traffic, which overlows the lazy apache server.

For this project Wordpress was an obvious bad choice. Specially for a warrior with many open fronts (clients, an e-commerce to maintain, new [bitcoin projects](/work) in the horizon, learning [Nostr](http://localhost:8080/blog/nostrification-101/), etc).

So after some time dealing with it, I decided moving to greener pastures, to a light, clean, simple static site using the one and only SSG: [Eleventy](https://www.11ty.dev/).

Some thoughts went through my head about using [Svelte as a SSG](/blog/svelte-and-vite-devops/), buy hey, why not use a (great) and more specific tool for the task, while using the experience to improve on my 11ty's skills?

So here I go.

## The challenge

Convert Betizen.org in a Static Site.<br>
👇 With a Headless CMS.

508 urls for games reviews.
<br>
43 blog articles.
<br>
21 pages.
<br>
126 casino reviews.
<br>
28 categories.
<br>
83 game provider pages.
<br>
**= 809 unique and indexable urls.**

### Ideas & Requirements

1. The first idea was to progresively migrate pages one by one. Making tests with low traffic (and low authority) pages and them slowly moving high traffic pages one by one. Two different structures should coexist until all pages are migrated.
2. Another idea is to create a dev-tool that uses the Wordpress Rest API to fetch all content and create all necessary Markdown entries at once. Comparing outputs and migrate!

A basic structure was needed. And as always, the [11ty base blog](https://github.com/11ty/eleventy-base-blog) seemed as a great start.

Also i18n and l10n were a must.

For deployment Vercel, as I had some other projects hosted at Netlify, consuming quota.

As many examples in 11ty's documentation are foused on Netlify, this [Migrate to Vercel from Netlify](https://vercel.com/guides/migrate-to-vercel-from-netlify) guide was useful.

### Steps

1. Backup the Digital Ocean wordpress site.
2. Use [httrack](https://www.httrack.com/) website copier to backup betizen.org as a pure static site (no Eleventy) to build on top of.
