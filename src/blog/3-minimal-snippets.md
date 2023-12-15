---
title: "Minimal snippets (reference)"
description: "Common patters and elements for the new minimo.io site"
date: 2023-11-20T20:00:00-03:00
---
<div class="wrapper text-justify mt-5">
    <h1>It's Huge!</h1>
    <h2 id="wow">The new minimo is out!</h2>
    <h4>This is yet another example article serving as a reference.</h4>
    <a href="#intro">Intro.</a>
    <a href="#lightning">Projects.</a>
    <p class="fs-400">Now let's imagine a text, like the profile one, that needs to be a litte bigger.
        Even as a paragraph. Here is the .fs-400 class.
    </p>
    <figure>
        <img src="/assets/images/project-lightning-beer.webp" alt="hops-project" class="img-rounded">
        <figcaption>A caption for the above image</figcaption> 
    </figure>
    <p>
        And as you might... wait, here some <code>window.onload</code>, see this one should be able to hold text the size of our main container max width variable... 
        We cannot say the same for everybody else around here... kkk. But fair enough, is this working or not?
    </p>
    <p>For <strong>all of them</strong> we need to solve their paddings!</p>
    <p>And <strong>after that, the font-sizes</strong>.</p>
    <p>So, solve:</p>
    <ul>
        <li>General paddings (except for profile).</li>
        <li>General font sizes (clamps?).</li>
    </ul>
    <br>
    <pre>
        <code>
const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const profileImage = document.querySelector(".img-profile");</code>
    </pre>
</div>

<div class="wrapper mt-2">

    Until here it is pure markup. From now on I will mix html tags with Markup in order
    to have some non-standard structure.

    - Ok one thing is this
    - And this is totally another thing

    <h2 id="intro" class="h3 font-italic">Intro.</h2>
    <p>
        This is some made out texxxxt, and i am re-learning css for the moment.
        But belive it or not, this is a Jekyll project!
    </p>       
    <p>
        And so here we will have more and more text, just stupid nonsense, nothing worthwhile but still something
        to read.
    </p>
    <p>Oh, by the way... <a href="/">here is a link to our $HOME</a>.</p>
</div>
<hr>
<div class="wrapper wrapper-wide">
    <h1 id="lightning" class="h2 text-center">⚡️ The Lightning Network</h1>
    <p>
        This is some made out texxxxt, and i am re-learning css for the moment.
        But belive it or not, this is a Jekyll project!
    </p>
    <blockquote cite="https://www.poetryfoundation.org/poems/45477/song-of-myself-1892-version">
        <p>
            I celebrate myself, and sing myself,
            And what I assume you shall assume...
        </p>
        <footer>Aldous Huxley, <cite>Brave New World</cite></footer>
    </blockquote>
    <p>
        And so here we will have more and more text, just stupid nonsense, nothing worthwhile but still something
        to read.
    </p>
    <figure class="full-width">
        <img src="/assets/images/project-betizen.webp" class="img-rounded">       
        <figcaption class="text-right">Credits to SomeRandomGuyAtUnsplash</figcaption> 
    </figure>            
    <h2>Ah by the way</h2>
    <p>Almost forgot about it. By the way... <a href="/blog/">here is a link</a>.</p>
    <h3>And finally a sub-item</h3>
    <p>This is just a sub-item, nothing fancy!</p>
    <h4 class="mb-0">Smaller stuff coming</h4>
    <p class="mt-0">Just testing things out, to see how a real text would look like, with all its elements.</p>
    <h5>Coming to an end</h5>
    <p>This is the end, beautiful friend!</p>
    <h6>THE END</h6>
    <p>Wonder what changed? Well just another silly text trying to make the point that having 
        an H6 is somehow relevant to anything!
        
        But you know what? It is not!
    
        So chill the fu**@ up!
    </p>
</div>
