const menu = document.querySelector("header .menu");
const section = document.querySelector("section");
const header = document.querySelector("header");
const navItems = document.querySelector(".nav-items");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  header.classList.toggle("active");
  section.classList.toggle("active");
  navItems.classList.toggle("active");
});
