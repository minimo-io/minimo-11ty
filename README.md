# minimo-11ty
An 11tyzed minimo.io theme

# ToDo

* Configure markdownItAnchor, from this example https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
* Manually list all GPX stuff, maybe load with plain js.
* Add primal logo and link in menu and author boxes.
* BUG: Build styles are being loaded from /assets/css/style.css which is not the minified created version. Must be the style.css. Also styles from /assets/css/* are being exported which is not necesary.
* Only article worth sending to new site, https://minimo.io/en/swapping-trc-20-tether-tokens-to-bitcoin-tether-using-fixedfloat-2023032157/ 
---
* Add get in touch button at the bottom of articles (with a custo front matter) and at the top menu
* Download a CV button in homepage
* Biking: List all articles tagged with "biking". This should not appear within biking articles.
* Biking: Design where can I show my current gear.
* Start biking app on github while learning Svelte 4, even if it is not perfect: List all gpx files and load map.
* Use the library leaflet-gpx via npm and eleventy.config.js, instead of hard-coding it.
* Think about implementing esbuild to bundle javascript, [Bundle JavaScript with Eleventy and esbuild](https://blog.r0b.io/post/bundle-javascript-with-eleventy-and-esbuild/). This will need changing the currect pipeline (for the better). Check [esbuild](https://github.com/evanw/esbuild).