const API_URL = "https://fakestoreapi.com/products";
function fetchProducts(){
    const productsPromise = fetch(API_URL)
    .then (response => response.json());

    return productsPromise;
}

export default fetchProducts;