const CART = "cart";

export default function getCart() {
	const cart = localStorage.getItem(CART);

	if (cart === null) {
		return [];
	} else {
		return JSON.parse(cart);
	}
}

export function saveCart(cartArray) {
	localStorage.setItem(CART, JSON.stringify(cartArray));
}

export function clearCart() {
	localStorage.removeItem(CART);
}

export function countCartItems() {
	const cartCount = getCart().length;

	if (cartCount === 0) {
		return "";
	}

	return cartCount;
}
