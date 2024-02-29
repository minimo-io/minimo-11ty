---
date: 2024-02-19T16:12:00-03:00
title: "Understanding Wordpress & Woocommerce translation system"
description: "A practical guide of the common errors (and solutions) when translating Wordpress & Woocommerce"
image: "/assets/images/blog/vite-svelte-dev-v2.webp"
tags:
  - wordpress
  - woocommerce
  - coding
---

<div class="wrapper">
    1. Site language was configured to "nb_NO" in order for Woocommerce and all other plugins to pick the right translations files (previously was configured to en_US), (remembering that all translations must be kept in the /wp/wp-content/langauges/ directory, to avoid resets on updates).

    I have fixed this. With the fix many translations are now displayed correctly (see screenshot 1), but not all (why below).

    2. In Wordpress not all translations are handled by the theme. Each plugin has its own translations files. Many plugins participate in the front-end screen rendering in this case, so their translations files must also be translated. One example of this is the whishlist plugin I detected "WPC Smart Wishlist for WooCommerce (Premium)" (see screenshot 2). It was not translated with the change previously mentioned because its translations files for the "nb_NO" language do not exist. We must create it, translated them and upload it in the correct folder with the correct naming. Let me know if you want me to translate these other files, or if you that know the language will do it for me to install them (I will have to charge a little extra for the extra hours).

    3. Other texts are not part of translation files but part of the content. In this cases we must detect and change the text from each individual content piece (article or block), using the Elementor interface. If you allow me I can change the ones I detect for you (see screenshot 3).

    4. Finally I need to know if you also want the admin interface translated too, to "nb_NO" language or if you want to keep it in english.
</div>