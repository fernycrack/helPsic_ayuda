const nav = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // cuando haces scroll >50px
    nav.classList.add("solid-nav");
  } else { // cuando vuelves al top
    nav.classList.remove("solid-nav");
  }
});
