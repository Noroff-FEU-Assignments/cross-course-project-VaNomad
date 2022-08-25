// —————————‡————————— URL Endpoint
const url = "https://rainydays.sjur.io/wp-json/wc/v3/products?consumer_key=ck_860965e394b6a0175412be6785610116914579cb&consumer_secret=cs_f6787c7046e3067c193fb6d7cac1aea67e148816"


// —————————‡————————— Functions
async function getProducts() {

  const response = await fetch(url);

  const results = await response.json();

  console.log(results.all);
}
getProducts();