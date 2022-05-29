const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle('showmenu');
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('showmenu');
  navMenu.classList.toggle('active');
});




