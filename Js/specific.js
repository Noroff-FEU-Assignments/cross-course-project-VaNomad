const title = document.querySelector(".title");
const productImg = document.querySelector(".productImg");
const productDiscription = document.querySelector(".productDescription");


const detailsContainer = document.querySelector(".details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://rainydays.sjur.io/wp-json/wc/store/products" + id;
console.log(id);

async function getJacket() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    title.innerHTML = products.name;
    productImg.src = products.images[0].src;
    productDiscription.innerHTML = products.discription;

  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "The API call failed";
  }

}

getJacket(url);