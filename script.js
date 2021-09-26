nav = document.querySelector(".navbar");
window.addEventListener("scroll", (nav) => {
  nav.classList.toggle("scrolling", window.scrollY > 0);
});
