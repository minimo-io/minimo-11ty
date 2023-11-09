const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const profileImage = document.querySelector(".img-profile");

// dom + sync js loaded
window.addEventListener('DOMContentLoaded', function () {
    profileImage.style.setProperty('--animate-duration', '0.5s');
    // profile image effect
    profileImage.addEventListener('click', () => animateProfileImage() );
    profileImage.click();

    this.document.querySelector("img").addEventListener('click', ()=> animateCSS('img', 'rubberBand'));

    // keysdown
    document.onkeydown = function (e) {
        if (e.defaultPrevented) return;
        i
        switch (e.key) {
          case "Escape":
              console.log('Opened?' + primaryNav.getAttribute("data-opened"));
              if ("true" == primaryNav.getAttribute("data-opened")){
                navToggle.click();
              }
              break;
          case "m":
              navToggle.click();
              break;
        //   default:
        //       return; // Do nothing for the rest
        }
      };    

}, false);

const animateProfileImage = () => animateCSS(profileImage, "rubberBand");

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

        document.querySelector(".header").append(primaryNav);
        document.querySelector(".header").append(navToggle);

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

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    //if (typeof(element) == "string") 
    console.log(typeof element);
    if (typeof element == "string") element = document.querySelector(element);
    // const node = document.querySelector(element);
    const node = element;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});