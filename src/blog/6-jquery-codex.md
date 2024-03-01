---
title: jQuery Codex
description: A plugin for sodomizing strings of text •̀ᴗ•́
image: /assets/images/projects/project-jquery-codex.gif
date: 2020-05-24T21:21:22-03:00
imageCaption: "jquery-codex"
star: true
stack: jQuery, Javascript, npm
status: Archived
period: 2020
permalink: /work/jquery-codex/
role: Developer
tags:
  - project
  - coding
  - jquery
---

<div class="wrapper">
    <p>
        jQuery-codex is a plugin for sodomizing strings of text. In newer versions there are several effects available. You can see the code examples on its <a href="https://github.com/minimo-io/jquery-codex">Github page</a>.
    </p>
    <p>
        The original idea for the first effect came from a CCC page that I couldn’t find again. So I code it myself. Many improvements are missing. Code them and share them via pull request!
    </p>
    <h2 id="examples" class="h3 font-italic">Examples.</h2>

    <p>
        These are the examples of how to use the jQuery Codex to achieve completely and absolutely unproductive text effects.
    </p>

    <div class="uncont">
        <div class="empty-space empty-single">
            <span class="empty-space-inner"></span>
        </div>
        <div class="wpb_raw_code wpb_content_element wpb_raw_html">
            <div class="wpb_wrapper">
                <h6 class="codex" id="codex5" style="font-size:24px;">Thomas Kennerly Wolfe Jr.</h6>
                <br>
                <button id="do5">The "Typewriter" effect</button>
            </div>
        </div>
            
    </div>
    <script src="https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/minimo-labs/jquery-codex/jquery.codex.js"></script>
    <script>
        $(function () {
            $('#do5').click(function () {
                alert('OOK');
                $('#codex5').codex({effect: 'typewriter', speed: 50, reveal: 50});
            });
        })
    </script>
</div>