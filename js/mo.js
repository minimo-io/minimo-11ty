'use strict';

function $(s){ return document.querySelector(s); }

let theme = localStorage.getItem("theme") || "theme-light"; // defaults

const navButtons = $(".nav-buttons")
const primaryNav = $(".nav");
const themeToggle = $(".theme-toggle");
const navToggle = $(".nav-toggle");
const profileImage = $(".img-profile");


// dom + sync js loaded - simply RnR!
window.addEventListener('DOMContentLoaded', function () {
    if (profileImage){
        profileImage.style.setProperty('--animate-duration', '0.5s');
        // profile image effect
        profileImage.addEventListener('click', () => animateProfileImage() );
        profileImage.click();
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