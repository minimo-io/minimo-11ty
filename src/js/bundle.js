'use strict';

function $(s){ return document.querySelector(s); }

let theme = localStorage.getItem("theme") || "theme-light"; // defaults

const navButtons = $(".nav-buttons")
const primaryNav = $(".nav");
const themeToggle = $(".theme-toggle");
const navToggle = $(".nav-toggle");
const profileImage = $(".img-profile");
const goToHashed = () => {
    if (window.location.hash && window.location.hash.length) {
        const hashedElem = $(window.location.hash);
        console.log("Going to hash: " + window.location.hash);
        if (hashedElem){
            hashedElem.style.scrollMarginTop = "10px";
            hashedElem.scrollIntoView({ behavior: "smooth", block: "start" });
        } 
    
    }
}
// dom + sync js loaded - simply RnR!
window.addEventListener('DOMContentLoaded', function () {


    // anchor internal links smooth-scrolling
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors && anchors.forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            // console.log("Hashing link");
            const goToHash = $(this.getAttribute("href"));

            goToHash.style.scrollMarginTop = "10px";
            goToHash.scrollIntoView({ behavior: "smooth", block: "start" });
      
            window.history && history.replaceState(undefined, undefined, this.getAttribute("href"));
        });
    });

    // process on-page-load hashes (go to anchor, smoothly)
    goToHashed();
    // process manual hash changes
    window.addEventListener('hashchange', (e)=>{
        e.preventDefault(); 
        goToHashed();
     }, false);

    // homepage animations
    if (profileImage){
        profileImage.style.setProperty('--animate-duration', '0.5s');
        profileImage.addEventListener('click', () => animateProfileImage() );
        profileImage.click();
        // waving hand
        let heyHand = $(".hey-hand");
        if (heyHand){
            heyHand.style.setProperty('--animate-duration', '0.8s');
            heyHand.addEventListener('click', () => animateCSS(heyHand, "shakeX"));
            this.setTimeout(()=>{ heyHand.click(); }, 500);
            const handInterval = setInterval(function(){
                heyHand.click();
            }, 5000);
        }
    } 
    // keysdown for menu
    document.onkeydown = function (e) {
        if (e.defaultPrevented) return;
        if (e.repeat) return;
        switch (e.key) {
            case "Escape":
                if ("true" == primaryNav.getAttribute("data-opened")){
                    navToggle.click();
                }
                break;
            case "m":
                navToggle.click();
                break;
            case "d":
                themeToggle.click();
            break;
        }
    };
    // nav
    navToggle.addEventListener('click', () =>{
        const visibility = primaryNav.getAttribute("data-opened");
        primaryNav.style.setProperty('--animate-duration', '0.2s');

        if (visibility == "false"){

            // move menu items to the body in order to avoid clipping problems.
            document.body.prepend(primaryNav);
            primaryNav.prepend(navToggle);
            navButtons.style.display = "none";

            primaryNav.setAttribute("data-opened", "true");
            
            navToggle.setAttribute("aria-expanded", "true");

            primaryNav.style.display = "flex";
            navToggle.classList.add("cross");
            animateCSS(".nav", 'rubberBand').then((message) => {
                navToggle.focus(); // for accessibility
            });

        }else if (visibility == "true"){

            $(".header").append(primaryNav);
            $(".nav-buttons").append(navToggle);

            primaryNav.setAttribute("data-opened", "false");
            navToggle.setAttribute("aria-expanded", "false");
            navButtons.style.display = "";
            
            navToggle.classList.remove("cross");
            // slideOutLeft, zoomOutDown
            animateCSS(".nav", 'flipOutY').then((message) => {
                // Do something after the animation
                primaryNav.style.display = "none";
            });        
        }
    });      
    // theme toggler
    switchTheme(theme);
    themeToggle.addEventListener('click', () => {
        // in the future I could implement not just dark mode
        // buy more themes.
        if (document.body.classList.contains("theme-dark")){
            switchTheme("theme-light");
        }else{
            switchTheme("theme-dark");
        }
        
    });

    // read more button. Note! Arrow functions do not have a "this" context, so avoid
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_value_of_this_within_the_handler
    if ($(".read-more-btn")){
        $(".read-more-btn").addEventListener('click', function(e){
            
            let readMoreText = $(".read-more-text");

            if (false === readMoreText.classList.contains("read-more-text-active")){
                // show text
                // first get the height of the hidden text,
                // it must be visible for the browser first in order to have a height
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
                readMoreText.classList.add("read-more-text-active");
                readMoreText.style.height = 'auto';
                let height = readMoreText.clientHeight + 'px';
                
                // reset the height and animate, via configured css styles
                readMoreText.style.height = '0px';
                setTimeout(function(){ readMoreText.style.height = height; }, 0);

                // change button text and icon
                this.querySelector("svg:nth-child(1)").classList.add("d-none");
                this.querySelector("svg:nth-child(2)").classList.remove("d-none");
                this.querySelector("span").textContent = "Read less";
                

            }else{
                // hide text
                // smart use of: https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event
                // thanks to Ciprian Popescu, https://github.com/wolffe
                readMoreText.style.height = '0px';
                readMoreText.addEventListener("transitionend", function(){
                    readMoreText.classList.remove("read-more-text-active");
                },{
                    once: true
                });
                this.querySelector("svg:nth-child(1)").classList.remove("d-none");
                this.querySelector("svg:nth-child(2)").classList.add("d-none");
                this.querySelector("span").textContent = "Read more";
            }
        
            e.preventDefault();

        });
    }

}, false);

// functions
const animateProfileImage = () => animateCSS(profileImage, "rubberBand");
const switchTheme = (themeClassName) => {
    // Credit to https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/
    let prefix = "theme-";
	let regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
	document.body.className = document.body.className.replace(regx, '');

    document.body.classList.add(themeClassName);
    theme = localStorage.setItem("theme", themeClassName);
};

// function to user the animate.css lib from js
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    if (typeof element == "string") element = $(element);

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    element.addEventListener('animationend', handleAnimationEnd, {once: true});
});