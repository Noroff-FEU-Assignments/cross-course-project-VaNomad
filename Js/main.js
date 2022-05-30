const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const socialIcons = document.querySelector(".social-icons");


hamburger.addEventListener("click", function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('showmenu');
  socialIcons.classList.toggle('hidesocial')

});




