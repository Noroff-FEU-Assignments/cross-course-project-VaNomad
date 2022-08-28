const url = "https://rainydays.sjur.io/wp-json/wc/store/products/"

const jacketContainer = document.querySelector(".jackets");
const result = document.querySelector(".result");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    getProducts.innerHTML = "";
    results.forEach(function (product) {
      jacketContainer.innerHTML += `
          
            <a href="specific.html?id=${product.id}">
              <h4 class="productName">${product.name}</h4>
              <div class="productImg" >
              <img src="${product.images[0].src}" alt="${product.name}">
              </div>
            </a>
    
        `
    });

  } catch (error) {
    console.log("error occurred", error);
    result.innerHTML = "An error occurred calling the API! "
  }
}
getProducts(url);