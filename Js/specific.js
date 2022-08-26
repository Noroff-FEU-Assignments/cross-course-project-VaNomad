// —————————‡————————— URL Endpoint
const url = "https://rainydays.sjur.io/wp-json/wc/v3/products?consumer_key=ck_860965e394b6a0175412be6785610116914579cb&consumer_secret=cs_f6787c7046e3067c193fb6d7cac1aea67e148816"

// —————————‡————————— Element selections
const detailsContainer = document.querySelector(".details");
const result = document.querySelector(".result");

// —————————‡————————— Arrow Promise Syntax
fetch(url)
  .then(response => response.json())
  .then(results => createHTML(results))
  .catch(error => detailsContainer.innerHTML = ("An error occured when calling the API!"));

function createHTML(results) {
  const details = results;
  detailsContainer.innerHTML = `
  <a class="productName" href="${product.id}">
          <h4>${product.name}</h4>
        </a>
        <a class="productImg" href="${product.id}">
          <img src="${product.images[0].src}" alt="${product.name}">
        </a>
  `;
}
// —————————‡————————— Async Function
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

function createHTML(details) {
  details.forEach(function (product) {
detailsContainer.innerHTML = `
      
        <a class="productName" href="${product.id}">
          <h4>${product.name}</h4>
        </a>
        <a class="productImg" href="${product.id}">
          <img src="${product.images[0].src}" alt="${product.name}">
        </a>
      

    `
  });
}

// —————————‡————————— Connor Example
async function callApi() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  const results = json;

  results.forEach(function (results) {
    detailsContainer.innerHTML += `<div>${products._id}</div>`;
  });
  
}

callApi();