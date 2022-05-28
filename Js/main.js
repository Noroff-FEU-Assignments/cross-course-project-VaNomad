const menulogo = document.querySelector(".container");
const menu = document.querySelector(".menu");

menulogo.addEventListener("click", function () {
  menu.classList.toggle('showmenu');
  menulogo.classList.toggle('showmenu');
});


