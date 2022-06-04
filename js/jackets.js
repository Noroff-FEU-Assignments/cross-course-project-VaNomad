import getCart, { saveCart } from "./utils/storage.js";
import { renderCartCount } from "./components/menu/menu.js";
import { productsArray } from "./constants/productList.js";
const productBox = document.querySelector(".products");
const floatingCart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".total");




renderCartCount();

productsArray.forEach(function (product) {
	console.log(product);

	productBox.innerHTML += `
    <div class="item">
      <div class="box">
        <div class="flex-row">
          <button class="cart-icon">
            <i class="fa fa-shopping-bag" data-id="${product.id}" data-name="${product.name}"></i>
          </button>
          <div class="flex-row">
            <h3>${product.name}</h3>
            <p>${product.price},-</p>
          </div>
        </div>
        <div class="img-box">
          <img src="${product.imgSrc}" alt="${product.description}">
        </div>
        <div class="text">
          <h4>description</h4>
          <p>${product.description}</p>
        </div>
        <div class="options-box">
          <div class="colours-box">
            <div class="swatch one"></div>
            <div class="swatch two"></div>
            <div class="swatch three"></div>
            <div class="swatch four"></div>
            <div class="swatch five"></div>
          </div>
          <div class="sizes-box">
            <div class="flex-row">
              <div class="size"><h4>xs</h4></div>
              <div class="size"><h4>s</h4></div>
              <div class="size"><h4>m</h4></div>
              <div class="size"><h4>l</h4></div>
              <div class="size"><h4>xl</h4></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
});

const cartButton = document.querySelectorAll("i");

cartButton.forEach(function (cartButton) {
	cartButton.onclick = function (event) {
		const cartArray = getCart();

		const id = event.target.dataset.id;
		const name = event.target.dataset.name;

		const product = { id: id, name: name };

		cartArray.push(product);
		saveCart(cartArray);
    renderCartCount();
    showCart(cartArray);
    
	};
});

function showCart(cartItems) {
  floatingCart.style.display = "block";
  cartList.innerHTML = "";
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
  })
  cartTotal.innerHTML = `Total: ${total}`
}