# minimo-11ty

An 11tyzed minimo.io theme [![Netlify Status](https://api.netlify.com/api/v1/badges/f84a1fda-72ce-4e3f-bd8e-4edaa693026d/deploy-status)](https://app.netlify.com/sites/minimo-io/deploys)

# ToDo

-   Add an effect to the call to action button, With 3 stages: 1) Any Wordpress problem? 2) Woocommerce API Integration need? 3) +11 clients problems solved! 4) Let's Work Together! or Get a Quote! With a fast blink and more delay!

-   Nice 4 images metro showcase!
    https://www.granite.ie/work/ to rapidly showcase work for the work section.

-   Hiring button must redirect to a form, and that form be the end of my conversion funnel.
    https://skyward.digital/contact
-   Avoid flickering dark mode: https://dev.to/ayc0/light-dark-mode-avoid-flickering-on-reload-1567
-   Create more case studies in Work, not just an image. Check this out: https://vanholtz.co/work/studiomega/
    I can do that for Braaay for example.
-   BUG: Biking map error on mobile, ride data overflows to the right (not on desktop emulator).
-   Add primal logo and link in menu and author boxes.
-   Create a reusable grid system to list posts like gpx rides so I can clearly show some metadata for each (for later use in posts list)
-   Sometimes, like in the Wordpress i18n one, markdown articles need a wider space. Have a front-end matter property to choose, `wrapper-wide`.
-   Add Fiverr block, to include into articles for which I do have a freelance service to offer.
-   New: Reading progress
-   New: Add a visit project button on work listing and on each project page.
-   New: Configure markdownItAnchor, from this example https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
-   Add get in touch button at the bottom of articles (with a custo front matter) and at the top menu
-   Download a CV button in homepage
-   Biking: List all articles tagged with "biking". This should not appear within biking articles.
-   Biking: Design where can I show my current gear.
-   Biking: Being able to group bikepacking trips.
-   Biking: Create an async function using Eleventy event "on" "eleventy.before", to fetch via the Strava API my stats (now are being hardcoded and regularly updated). I've allowed this app to create an rss feed from me: https://feedmyride.net/activities/71907777 (use this to parse if possible)
-   Biking: Design and deploy the biking gear section with current gear specs, photos and links
-   Use the library leaflet-gpx via npm and eleventy.config.js, instead of hard-coding it.
-   Think about implementing esbuild to bundle javascript, [Bundle JavaScript with Eleventy and esbuild](https://blog.r0b.io/post/bundle-javascript-with-eleventy-and-esbuild/). This will need changing the currect pipeline (for the better). Check [esbuild](https://github.com/evanw/esbuild).
-   Add functionality: Load prism-light or prism-dark depending on the mode selected (not it's fixed dark).
-   Rebuild the "Diccionario del Lunfardo" in Alpine.js or Svelte.
-   Load all gpx files data with an eleventyComputed property that lists them.
-   Rocket animation, https://cargo2support.cargo.site/Make-an-Image-Fly-Across-the-Screen
