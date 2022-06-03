// —————————‡————————— Imports
import { productsArray } from "./productList.js";


// —————————‡————————— Element Selections
const productBox = document.querySelector(".products");

// —————————‡————————— Element renders

productsArray.forEach(function (product) {
  productBox.innerHTML += `
  <div class="item">
          <div class="box">
            <div class="img-box">
              <img src="${product.imgSrc}" alt="${product.description}">
            </div>
            <div class="text">
              <a href="product.html" class="btn">
                <h3>${product.name}</h3>
                <h4>${product.price},-</h4>
              </a>
            </div>
          </div>
        </div>
  `
});









