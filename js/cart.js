import getCart, { saveCart } from "./utils/storage.js";
import { renderCartCount } from "./components/menu/menu.js";
import { productsArray } from "./constants/productList.js";

const cartItems = JSON.parse(localStorage.getItem("cart"));
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  cartList.innerHTML += `
  <div class="cart-item">
    <h4>${cartElement.name}</h4>
    <div class="cart-card">
      <div style="background-image: url(${cartElement.imgSrc})" class="cart-image"></div>
      <div class="cart-price">${cartElement.price}</div>
    </div>
  </div>
  `
});
cartTotal.innerHTML = `Total: ${total}`;
