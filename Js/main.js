import { renderCartCount } from "./components/menu/menu.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const socialIcons = document.querySelector(".social-icons");
const ctaHome = document.querySelector(".cta-home");
const homeLogo = document.querySelector(".home-logo");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("showmenu");
	socialIcons.classList.toggle("hidesocial");
	ctaHome.classList.toggle("hidesocial");
	homeLogo.classList.toggle("hidesocial");
});

renderCartCount();
