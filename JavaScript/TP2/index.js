// const nav = document.querySelector("nav");
const navbar = document.querySelector("nav");
let lastScroll = 0;
window.addEventListener("scroll", (e) => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-80px";
  }
  lastScroll = window.scrollY;
});
