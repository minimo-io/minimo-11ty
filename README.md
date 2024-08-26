# minimo-11ty

An 11tyzed minimo.io theme.

[![Netlify Status](https://api.netlify.com/api/v1/badges/f84a1fda-72ce-4e3f-bd8e-4edaa693026d/deploy-status)](https://app.netlify.com/sites/minimo-io/deploys)

# ToDo

-   EleventyImage plugins for gallery: https://darthmall.net/weblog/2024/11ty-photo-gallery/ and https://www.11ty.dev/docs/plugins/image/ and https://darekkay.com/blog/photography-website/
-   Toogle years in articles (and date grid): https://jamstackthemes.dev/demo/theme/11ty-bliss/ also https://rauchg.com/
-   Create a sitemap like the one I created for Betizen.org
-   Correct canonicals
-   Nostr
    -   Add nostr (primal), Nostr logo (mempool) and https://boltz.exchange/
    -   Show the last Nostr note, (in the header ticker?)
-   Add a Ctrl + K, command for tools and other stuff
-   Rebuild the "Diccionario del Lunfardo" in Alpine.js or Svelte.
-   Add micro-apps like the Nostr Followback at /work and homepage (also Diccionario del Lunfardo)
-   For hard-work appticles or microapps have a different footer where i kindly ask for tips!
-   Nice way to show shortcuts, https://app.routickr.com/habits (keyboard bottom right)
-   Self-host, minimized js deps + make all styles inline like https://www.mattknight.io/blog/migrating-from-nextjs-to-eleventy.
-   Nice 4 images metro showcase! or a hero with more visual impact for the first (featured) work.
    https://www.granite.ie/work/ to rapidly showcase work for the work section.
-   Services/Clients page: - Create a clear statement of my services and clients, on the /services page. Like here with 4 clear buttons https://sustainablewebdesign.org/ - Clients logos and construct https://zackkass.com/
-   Hiring button must redirect to a landing page with a form be the end of my conversion funnel.
    https://skyward.digital/contact
-   Avoid flickering dark mode: https://dev.to/ayc0/light-dark-mode-avoid-flickering-on-reload-1567
-   Create more complete case studies in Work, not just an image. Check this out: https://vanholtz.co/work/studiomega/
    I can do that for Braaay for example.
-   Create a reusable grid system to list posts like gpx rides so I can clearly show some metadata for each (for later use in posts list)
-   Sometimes, like in the Wordpress i18n one, markdown articles need a wider space. Have a front-end matter property to choose, `wrapper-wide`.
-   Add Fiverr block, to include into articles for which I do have a freelance service to offer.
-   New: Reading progress
-   New: Add a visit project button on work listing and on each project page.
-   New: Configure markdownItAnchor, from this example https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
-   Download a CV button in homepage. "See skill set below" - CV must not be boring.
-   Create a design section for my front-end & brand designs using Figma (maybe even link to a ready only Figma workspace)
-   Create an button for Affiliate Manager trying to reach out.
    Will a very basic and well design card with numbers (present only in the iGaming category?).
-   Biking: List all articles tagged with "biking". This should not appear within work articles.
-   Biking: Design where can I show my current gear.
-   Biking: Being able to group bikepacking trips.
-   Biking: Create an async function using Eleventy event "on" "eleventy.before", to fetch via the Strava API my stats (now are being hardcoded and regularly updated). I've allowed this app to create an rss feed from me: https://feedmyride.net/activities/71907777 (use this to parse if possible)
-   Biking: Design and deploy the biking gear section with current gear specs, photos and links
-   Use the library leaflet-gpx via npm and eleventy.config.js, instead of hard-coding it.
-   Think about implementing esbuild to bundle javascript, [Bundle JavaScript with Eleventy and esbuild](https://blog.r0b.io/post/bundle-javascript-with-eleventy-and-esbuild/). This will need changing the currect pipeline (for the better). Check [esbuild](https://github.com/evanw/esbuild).
-   Add functionality: Load prism-light or prism-dark depending on the mode selected (not it's fixed dark).
-   Load all gpx files data with an eleventyComputed property that lists them.
-   Add an effect to the call to action button, With 3 stages: 1) Any Wordpress problem? 2) Woocommerce API Integration need? 3) +11 clients problems solved! 4) Let's Work Together! or Get a Quote! With a fast blink and more delay!

-   (v2) Add pagination for blog posts.
-   (v2) Markup article files must be more isolated from pure html. Ideally they should be pure, simple, minimal markup.

### Bugs

-   There is a shortcut conflict with "D" (black-mode) in Forms.
-   Hash conflict js error when linking to hashed links: https://kit.svelte.dev/docs/page-options#prerende
