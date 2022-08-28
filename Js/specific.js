const detailsContainer = document.querySelector(".details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://rainydays.sjur.io/wp-json/wc/store/products/${id}`;
console.log(url);

async function getJacket() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    detailsContainer.innerHTML =
    `<a href="specific.html?id>
     <h1>${products.name}</h1>
     <div class="productImg" ${products.images}</div>
     <div class="detailsDiscription" ${products.discription}</div>
     </a>
    `
  }
  
  catch (error) {
    console.log(error);
    // detailsContainer.innerHTML = "The API call failed";
  }

}

getJacket(url);