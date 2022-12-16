// header menu
const menu = document.querySelector(".header__menu");
const menuBar = document.querySelector(".header__menu_bar");
const nav = document.querySelector(".main__nav");
const navLinks = document.querySelectorAll(".main__nav_link");
menu.addEventListener("click", () =>{
  menuBar.classList.toggle("header__menu_bar-open")
  nav.classList.toggle("main__nav-open");
})
navLinks.forEach(e => {
  e.addEventListener("click", () => {
    menuBar.classList.toggle("header__menu_bar-open")
    nav.classList.toggle("main__nav-open");
  })
});
// ------

// observer show elements
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);

let about = document.querySelector('.about__content');
let projectTop = document.querySelector('.project__wrapper');
let projectBottom = document.querySelector('.project__info');
let support = document.querySelector('.support__form');
let contetnt = document.querySelector('.contests__wrapp');

observer.observe(about);
observer.observe(projectTop);
observer.observe(projectBottom);
observer.observe(support);
observer.observe(contetnt);

// ------