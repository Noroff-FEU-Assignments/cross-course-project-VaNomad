import getCart, { saveCart } from "./utils/storage.js";
import { renderCartCount } from "./components/menu/menu.js";
import { productsArray } from "./constants/productList.js";
const productBox = document.querySelector(".products");

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
	};
});

/* <div class="box">
//             <div class="img-box">
//               <img src="${jackets.imgSrc}" alt="${jackets.description}">
//             </div>
//             <div class="options-box flex-column">
//               <div class="colours-box">
//                 <div class="flex-row">
//                   <h1 class="title-text">choose your jacket color</h1>
//                 </div>
//                 <div class="flex-row">
//                   <div class="swatch one"></div>
//                   <div class="swatch two"></div>
//                   <div class="swatch three"></div>
//                 </div>
//               </div>
//               <div class="sizes-box flex-column">
//                 <div class="flex-row">
//                   <h1 class="title-text">choose your jacket size</h1>
//                 </div>
//                 <div class="flex-row">
//                   <div class="size"><h2>xs</h2></div>
//                   <div class="size"><h2>s</h2></div>
//                   <div class="size"><h2>m</h2></div>
//                   <div class="size"><h2>l</h2></div>
//                   <div class="size"><h2>xl</h2></div>
//                 </div>
//               </div>
//             </div>
//           </div> */
