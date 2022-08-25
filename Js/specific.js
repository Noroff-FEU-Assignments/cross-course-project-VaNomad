// —————————‡————————— Imports
// import { productsArray } from "./constants/productList.js";

// —————————‡————————— URL Endpoint
const url = "https://rainydays.sjur.io/wp-json/wc/v3/products?consumer_key=ck_860965e394b6a0175412be6785610116914579cb&consumer_secret=cs_f6787c7046e3067c193fb6d7cac1aea67e148816"


// —————————‡————————— Functions
async function getProducts() {
  //fetch

  console.log(fetch);

}
getProducts();
// // —————————‡————————— Element Selections
// const jacketBox = document.querySelector(".container");

// // —————————‡————————— Element Selections
productsArray.forEach(function (jackets) {
  console.log(jackets);
  jacketBox.innerHTML =
`
   <div class="box">
             <div class="img-box">
               <img src="${jackets.imgSrc}" alt="${jackets.description}">
             </div>
             <div class="options-box flex-column">
               <div class="colours-box">
                 <div class="flex-row">
                   <h1 class="title-text">choose your jacket color</h1>
                 </div>
                 <div class="flex-row">
                   <div class="swatch one"></div>
                   <div class="swatch two"></div>
                   <div class="swatch three"></div>
                 </div>
               </div>
               <div class="sizes-box flex-column">
                 <div class="flex-row">
                   <h1 class="title-text">choose your jacket size</h1>
                 </div>
                 <div class="flex-row">
                   <div class="size"><h2>xs</h2></div>
                   <div class="size"><h2>s</h2></div>
                   <div class="size"><h2>m</h2></div>
                   <div class="size"><h2>l</h2></div>
                   <div class="size"><h2>xl</h2></div>
                 </div>
               </div>
             </div>
           </div>
   `

});