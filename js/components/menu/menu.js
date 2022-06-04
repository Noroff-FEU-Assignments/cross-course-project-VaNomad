import { countCartItems } from "../../utils/storage.js";

export function renderCartCount() {
	const cartMenuItem = document.querySelector("#cart");
	const cartCount = countCartItems();
	cartMenuItem.innerHTML = cartCount;
}