const menu     = document.querySelector(".header__menu"),
      menuBar  = document.querySelector(".header__menu_bar"),
      nav      = document.querySelector(".main__nav"),
      navLinks = document.querySelectorAll(".main__nav_link"),
      lngBtn   = document.querySelector(".header__language_btn"),
      lngList  = document.querySelector(".header__language_list");
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
lngBtn.addEventListener("click", () => {
  lngList.classList.toggle("header__language_list-active")
})


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}
let options       = {threshold: [0.1]},
    observer      = new IntersectionObserver(onEntry, options),
    about         = document.querySelector('.about__content'),
    projectTop    = document.querySelector('.project__wrapper'),
    projectBottom = document.querySelector('.project__info'),
    support       = document.querySelector('.support__form'),
    contetnt      = document.querySelector('.contests__wrapp')
observer.observe(about);
observer.observe(projectTop);
observer.observe(projectBottom);
observer.observe(support);


let supportLink  = document.querySelector('.support__link'),
    contactsLink = document.querySelector('.contacts__item_link_info'),
    contactsText = contactsLink.querySelector('.contacts__text');
supportLink.addEventListener('click',e => supportLink.setAttribute('href',('mailto:'+supportLink.innerText)));
contactsLink.addEventListener('click',e => contactsLink.setAttribute('href',('mailto:'+contactsText.innerText)));

