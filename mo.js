const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', () =>{
    const visibility = primaryNav.getAnimations("data-opened");
    alert(visibility);
});