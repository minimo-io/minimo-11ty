function $(s){ return document.querySelector(s); }

let theme = localStorage.getItem("theme") ?? "theme-light"; // defaults

const primaryNav = $(".nav");
const navToggle = $(".nav-toggle");
const profileImage = $(".img-profile");
const darkModeToggle = $(".dark-mode-toggle");


// dom + sync js loaded - simply RnR!
window.addEventListener('DOMContentLoaded', function () {
    profileImage.style.setProperty('--animate-duration', '0.5s');
    // profile image effect
    profileImage.addEventListener('click', () => animateProfileImage() );
    profileImage.click();
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
                darkModeToggle.click();
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
            //document.body.prepend(navToggle);

            primaryNav.setAttribute("data-opened", "true");
            navToggle.setAttribute("aria-expanded", "true");

            primaryNav.style.display = "flex";
            navToggle.classList.add("cross");
            animateCSS(".nav", 'rubberBand').then((message) => {

            });

        }else if (visibility == "true"){

            $(".header").append(primaryNav);
            $(".header").append(navToggle);

            primaryNav.setAttribute("data-opened", "false");
            navToggle.setAttribute("aria-expanded", "false");
            
            navToggle.classList.remove("cross");
            // slideOutLeft, zoomOutDown
            animateCSS(".nav", 'flipOutY').then((message) => {
                // Do something after the animation
                primaryNav.style.display = "none";
            });        
        }
    });      
    // theme switcher
    switchTheme(theme);
    darkModeToggle.addEventListener('click', () => {
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
    removeClassByPrefix(document.body, 'theme-');
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
// Credit to https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/
const removeClassByPrefix = (node, prefix) => {
	var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
	node.className = node.className.replace(regx, '');
	return node;
}