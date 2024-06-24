---
title: Migrating a +800 pages affiliate Wordpress site to Eleventy
permalink: migrating-a-800-pages-wordpress-site-to-eleventy
description: 'How to successfully migrate an iGaming site to (dramatically) increase performance and security'
date: 2024-04-04T18:10:00-03:00
image: /assets/images/blog/betizen-wordpress-vs-eleventy-2.webp
imageCaption: 'Eleventy vs. Wordpress'
tags: [eleventy, wordpress, jamstack]
---

<blockquote>
    <p>
        🚀 <strong>Pitch</strong>: If you are an iGaming affiliate interested in lowering the costs of running your sites <a href="https://minimo.io">get in touch</a>.
    </p>
</blockquote>

## Results first

**The challenge:** Lowering costs, have better performance and security + forgetting about time-consuming Wordpress maintenance.

So I decided to migrate Betizen.org from my self-managed DigitalOcean Droplet (2 GB Memory / 2 AMD vCPUs / 60 GB Disk) to Vercel. From a dynamic Wordpress to a static site generated with 11ty.

✅ **Performance** measured by GTMetrix went from a lousy F (32%) to an A (96%)

✅ **Costs** for Vercel Hobbie plan is free so costs went from $39.57/mo to $0, checked

✅ **Security** is now close to ideal, since Vercel is a managed solution and a static site has very fewer attack vectors.

Plus maintenance went from solving plugin incompatibilities after an update on a weekend to literally zero time spent.

## The scenario

The site has reviews, articles, pages and categories in 3 different languages: pt-br, es, and en.

It has a total of 809 urls with unique content.

Wordpress is a great tool, I love it and love my clients who use it even more 😜
I do specialize in Woocommerce & Payments but the site, as a side thing, quickly became a pain in the a#@ to maintain.

[Betizen.org](https://www.betizen.org/), tries to provide reliable listings and extreme transparecny of and for online casinos, games and affiliate programs, without scams or BS! Receiving lots of junk traffic, which overlows the lazy DigitalOcean server.

For this project Wordpress was an obvious bad choice. It is thus, the standard all over the internet for affiliates, AND IT SHOULD NOT! Particularly if you are starting out and are bootstraping.

So after some time dealing with it, I decided moving to greener pastures, to a light, clean, simple static site using the one and only SSG: [Eleventy](https://www.11ty.dev/).

Some thoughts went through my head about using [Svelte as a SSG](/blog/svelte-and-vite-devops/), buy hey, why not use a (great) and more specific tool for the task, while using the experience to improve on my 11ty's skills?

So thre I went.

## The challenge

Convert Betizen.org in a Static Site.<br>

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
**= 809+ unique and indexable urls.**
<br><br>

1. The first idea was to progresively migrate categories of pages one by one. Making tests with low traffic (and low authority) pages and them slowly moving high traffic ones. Two different structures should coexist until all pages were migrated.
2. Another idea was to create a dev-tool that uses the Wordpress Rest API to fetch all content and create all necessary Markdown entries at once. Comparing outputs and migrate!
3. Third option was to download the whole dam thing via a website copier tool like [HTTrack](https://www.httrack.com/), work my bt locally and the ship the entire site at once.

A basic structure was needed. And as always, the [11ty base blog](https://github.com/11ty/eleventy-base-blog) seemed as a great start.

Also i18n and l10n functionalities were a must. Here is an interesting article about [i18n with Eleventy](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/) by [Lene Saile](https://www.lenesaile.com/en/about/) and here an Smashingmagazine article about [Internationalization And Localization For Static Sites](https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites/).

For deployment Vercel, as I had some other projects hosted at Netlify, consuming quota.

As many examples in 11ty's documentation are foused on Netlify, this [Migrate to Vercel from Netlify](https://vercel.com/guides/migrate-to-vercel-from-netlify) guide was useful.

After one month, many tests, lot's of importing/scrapping tools created and many hours during weekends invested, betizen.org went live as a static site with an **11ty template** inspired on Wordpress theme (that I also have created to customize and original template for the betting industry).

The idea is to continue to push 11ty for iGaming affiliates, maybe offer some free quality eleventy templates via minimo.io, ideally hooked up with a Headless CMS. As you can see in the results of this migration it makes all the sense, from costs, security and performance perspective.

And it was fun to keep learning the Eleventy SSG! BTW: What a great community.

<blockquote>
    <p>
        🚀 <strong>Pitch</strong>: If you are an iGaming affiliate interested in lowering the costs of running your sites <a href="https://minimo.io">get in touch</a>.
    </p>
</blockquote>
