

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
    categoryObjectArray.unshift({
        id:-1,
        name:"Tutti",
        value:""
    })
    return categoryObjectArray;
}

function filterProducts(searchObject, products, setFilteredProducts, setCount) {
    const sortedAndFilteredProductArray = filterProductsArray(searchObject, sortProducts(products, searchObject.sorting), setCount);
    setFilteredProducts(sortedAndFilteredProductArray);
}

function sortProducts(products, order){
    let sortedProducts;
    if(order === "descending"){
        sortedProducts = products.sort((product1, product2) => product2.price - product1.price);
    }
    else if(order === "ascending"){
        sortedProducts = products.sort((product1, product2) => product1.price - product2.price)
    }
    console.log(sortedProducts);

    return sortedProducts;
}

function filterProductsArray(searchObject, sortedProductsArray, setCount){
    setCount(0);
    const sortedAndFilteredProductArray = sortedProductsArray.filter(
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
        );
    return sortedAndFilteredProductArray;
}

export {
    calculateCategories,
    filterProducts
}