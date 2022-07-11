var navToggle = document.querySelector(".toggle-btn");
var nav = document.querySelector(".headnavbar");
var hamburger = document.querySelector(".hamburger")
if (navToggle) {

    navToggle.addEventListener('click', () => {
        if (navToggle.getAttribute("aria-expanded") === 'false') {
            navToggle.setAttribute("aria-expanded", true);
            hamburger.setAttribute("src", "/images/icon-close.svg");
        } else {
            // nav.classList.toggle("headnavbar");
            navToggle.setAttribute("aria-expanded", false);
            hamburger.setAttribute("src", "/images/icon-hamburger.svg");
        }
        nav.classList.toggle('headnavbar--visible');
    });
};
