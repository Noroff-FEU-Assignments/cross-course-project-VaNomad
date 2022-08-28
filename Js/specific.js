const detailsContainer = document.querySelector(".details");
const result = document.querySelector(".result");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);


const url = `https://rainydays.sjur.io/wp-json/wc/store/products/${id}`;
console.log(url);

function createHTML(result) {
  detailsContainer.innerHTML = `
    <a class="productName" href="${result.id}">
        <h1>${result.name}</h1>
        <img src="${result.images[0].src}" alt="${result.name}">
        <h4>${result.discription}</h4>
        `;
}


async function getJacket() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    createHTML(data)

  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "The API call failed";
  }
}

getJacket(url);