# minimo-11ty
An 11tyzed minimo.io theme

# ToDo
* List all GPX stuff, maybe load with plain js or Alpinjs. Maybe a new data file.
* BUG: Build styles are being loaded from /assets/css/style.css which is not the minified created version. Must be the style.css. Also styles from /assets/css/* are being exported which is not necesary.
* Upload Mínimo to Netlify
---
* Add primal logo and link in menu and author boxes.
* Create a reusable grid system to list posts like gpx rides so I can clearly show some metadata for each (for later use in posts list)
* There seems to be a non-documented page.templateSyntax data value, that could replace the current solution for detecting Markdown vs Nunjucks blog posts
* Sometimes, like in the Wordpress i18n one, markdown articles need a wider space. Have a front-end matter property to choose, `wrapper-wide`.
* Add Fiverr block, to include into articles for which I do have a freelance service to offer.
* New: Reading progress
* New: Add a visit project button on work listing and on each project page.
* New: Configure markdownItAnchor, from this example https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
* Add get in touch button at the bottom of articles (with a custo front matter) and at the top menu
* Download a CV button in homepage
* Biking: List all articles tagged with "biking". This should not appear within biking articles.
* Biking: Design where can I show my current gear.
* Start biking app on github while learning Svelte 4, even if it is not perfect: List all gpx files and load map.
* Use the library leaflet-gpx via npm and eleventy.config.js, instead of hard-coding it.
* Think about implementing esbuild to bundle javascript, [Bundle JavaScript with Eleventy and esbuild](https://blog.r0b.io/post/bundle-javascript-with-eleventy-and-esbuild/). This will need changing the currect pipeline (for the better). Check [esbuild](https://github.com/evanw/esbuild).
* Add functionality: Load prism-light or prism-dark depending on the mode selected (not it's fixed dark).
* Rebuild the "Diccionario del Lunfardo" in Alpine.js or Svelte.