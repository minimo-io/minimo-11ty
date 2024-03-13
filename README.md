# minimo-11ty
An 11tyzed minimo.io theme

# ToDo
* Upload Mínimo to Netlify
---
* There seems to be a non-documented page.templateSyntax data value, that could replace the current solution for detecting Markdown vs Nunjucks blog posts
* Add primal logo and link in menu and author boxes.
* Create a reusable grid system to list posts like gpx rides so I can clearly show some metadata for each (for later use in posts list)
* Sometimes, like in the Wordpress i18n one, markdown articles need a wider space. Have a front-end matter property to choose, `wrapper-wide`.
* Add Fiverr block, to include into articles for which I do have a freelance service to offer.
* New: Reading progress
* New: Add a visit project button on work listing and on each project page.
* New: Configure markdownItAnchor, from this example https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
* Add get in touch button at the bottom of articles (with a custo front matter) and at the top menu
* Download a CV button in homepage
* Biking: List all articles tagged with "biking". This should not appear within biking articles.
* Biking: Design where can I show my current gear.
* Biking: Being able to group bikepacking trips.
* Biking: Create an async function using Eleventy event "on" "eleventy.before", to fetch via the Strava API my stats (now are being hardcoded and regularly updated). I've allowed this app to create an rss feed from me: https://feedmyride.net/activities/71907777 (use this to parse if possible)
* Biking: Design and deploy the biking gear section with current gear specs, photos and links
* Use the library leaflet-gpx via npm and eleventy.config.js, instead of hard-coding it.
* Think about implementing esbuild to bundle javascript, [Bundle JavaScript with Eleventy and esbuild](https://blog.r0b.io/post/bundle-javascript-with-eleventy-and-esbuild/). This will need changing the currect pipeline (for the better). Check [esbuild](https://github.com/evanw/esbuild).
* Add functionality: Load prism-light or prism-dark depending on the mode selected (not it's fixed dark).
* Rebuild the "Diccionario del Lunfardo" in Alpine.js or Svelte.
* Load all gpx files data with an eleventyComputed property that lists them.