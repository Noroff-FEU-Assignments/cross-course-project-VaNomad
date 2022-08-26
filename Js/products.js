// —————————‡————————— URL Endpoint
const url = "https://rainydays.sjur.io/wp-json/wc/v3/products?consumer_key=ck_860965e394b6a0175412be6785610116914579cb&consumer_secret=cs_f6787c7046e3067c193fb6d7cac1aea67e148816"

// —————————‡————————— Element selections
const jacketContainer = document.querySelector(".jackets");
const result = document.querySelector(".result");


// —————————‡————————— Functions
async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    createHTML(results);
  } catch (error) {
    console.log("error occurred", error);
    result.innerHTML = "An error occurred "
  }
}
getProducts();

function createHTML(jackets) {
  jackets.forEach(function (product) {
    jacketContainer.innerHTML += `
      <a href="${product.id}">
        <h4>${product.name}</h4>
      </a>
      <a href="${product.id}">
        <img src="${product.images[0].src}" alt="${product.name}">
      </a>

    `
  });
}

// function createHTML(jackets) {
//   jackets.forEach(function (products) {
//     jacketContainer.innerHTML +=
//       `
//       <a href="specific.html?id=${product.id}"></a>
//       <div class="title">
// 				<h1 class="title-text">choose the one jacket you can trust</h1>
// 			</div>
// 			<div class="content products">
// 			</div>
// 			<div class="cart">
// 				<div class="cart-list"></div>
// 				<div class="total">
// 					<h4>Total:</h4>
// 				</div>
// 				<a href="cart.html">
// 					<p>Checkout</p>
// 				</a>
// 			</div>
//       `
//   })
// }