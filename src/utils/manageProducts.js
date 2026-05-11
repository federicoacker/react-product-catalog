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

function filterProducts(searchObject, products, setFilteredProducts, setCount, count) {
    setCount(0);
    setFilteredProducts(
        products.filter(
            product => {
                const nameSearch = searchObject.nameSearch.trim().toLowerCase();
                const categorySearch = searchObject.categorySearch
                let result;

                if (nameSearch === "" && categorySearch === "") {
                    result = true;
                }
                else if (nameSearch !== "" && categorySearch === "") {
                    result = product.title.toLowerCase().startsWith(nameSearch);
                }
                else if (categorySearch !== "" && nameSearch === "") {
                    result = product.category === categorySearch;
                }
                else {
                    result = product.category === categorySearch && product.title.toLowerCase().startsWith(nameSearch);
                }

                if (result) {
                    setCount(count => count + 1);
                }

                return result;
            }
        )
    );
}

export default fetchProducts;
export {
    calculateCategories,
    filterProducts
}