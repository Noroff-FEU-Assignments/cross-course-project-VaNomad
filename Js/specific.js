// —————————‡————————— Selectors

const detailsContainer = document.querySelector(".details");

const querySelector = document.location.search;

const params = new URLSearchParams(querystring);

const id = params.get("id");

if (!id) {
  location.href = "jackets.html"
}

const url = "https://rainydays.sjur.io/wp-json/wc/v3/products/" + id + "?consumer_key=ck_860965e394b6a0175412be6785610116914579cb&consumer_secret=cs_f6787c7046e3067c193fb6d7cac1aea67e148816";

console.log(url);

async function getJacket() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    createHTML(data);

  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "The API call failed";
  }

}

getJacket();

function createHTML(data) {
  detailsContainer.innerHTML =
    `<h1>${products.name}</h1>
     <div class="productImg" ${products.images}</div>
     <div class="detailsDiscription" ${products.discription}</div>
    `
}

// // —————————‡————————— URL Endpoint
// const url = "https://rainydays.sjur.io/wp-json/wc/v3/products?consumer_key=ck_860965e394b6a0175412be6785610116914579cb&consumer_secret=cs_f6787c7046e3067c193fb6d7cac1aea67e148816"

// // —————————‡————————— Element selections
// const detailsContainer = document.querySelector(".details");
// const result = document.querySelector(".result");

// // —————————‡————————— Async Function
// async function getProducts() {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();
//     createHTML(results);
//   } catch (error) {
//     console.log("error occurred", error);
//     result.innerHTML = "An error occurred "
//   }
// }
// getProducts();

// function createHTML(details) {
//   details.forEach(function (product) {
// detailsContainer.innerHTML = `

//         <div>
//           <h4>${product.name}</h4>
//           <img src="${product.images[0].src}" alt="${product.name}">
//         </div>


//     `
//   });
// }