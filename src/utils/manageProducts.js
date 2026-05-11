const API_URL = "https://fakestoreapi.com/products";
function fetchProducts() {
    const productsPromise = fetch(API_URL)
        .then(response => response.json());

    return productsPromise;
}

function calculateCategories(products) {
    const categories = [];
    for (const product of products) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    }

    const categoryObjectArray = categories.map((category, categoryIndex) => {
        return {
            id: categoryIndex,
            value: category,
            name: category.charAt(0).toUpperCase() + category.slice(1)
        }
    })
    return categoryObjectArray;
}

function filterProducts(searchObject, products, setFilteredProducts) {
    console.log(searchObject);
    setFilteredProducts(
        products.filter(
            product => {
                const nameSearch = searchObject.nameSearch.trim().toLowerCase();
                const categorySearch = searchObject.categorySearch
                if (nameSearch === "" && categorySearch === "") {
                    return true;
                }
                else if (nameSearch !== "" && categorySearch === "") {
                    return product.title.toLowerCase().startsWith(nameSearch);
                }
                else if (categorySearch !== "" && nameSearch === "") {
                    return product.category === categorySearch;
                }
                else {
                    return product.category === categorySearch && product.title.toLowerCase().startsWith(nameSearch);
                }
            }
        )
    );
}

export default fetchProducts;
export {
    calculateCategories,
    filterProducts
}