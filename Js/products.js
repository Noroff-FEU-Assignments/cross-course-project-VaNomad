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
    result.innerHTML = "An error occurred calling the API! "
  }
}
getProducts();

function createHTML(jackets) {
  jackets.forEach(function (product) {
    jacketContainer.innerHTML += `
      
        <a href="specific.html?id=${product.id}">
          <h4 class="productName">${product.name}</h4>
          <div class="productImg" >
          <img src="${product.images[0].src}" alt="${product.name}">
          </div>
        </a>

    `
  });
}