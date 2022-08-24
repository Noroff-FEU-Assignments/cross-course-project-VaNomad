// —————————‡————————— Imports
import {
  productsArray
} from "./productList.js";

// —————————‡————————— Element Selections
const jacketBox = document.querySelector(".container");

// —————————‡————————— Element Selections
productsArray.forEach(function (jackets) {
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