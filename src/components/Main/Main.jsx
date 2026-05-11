import FilterList from "./FilterList.jsx";
import ProductList from "./ProductList.jsx";
import fetchProducts from "../../utils/fetchProducts.js";
import { useEffect } from "react";

function Main() {

    useEffect(
        () => {
            fetchProducts()
            .then(
                products => console.log(products)
            )
            .catch(error => console.error(error));
        },[]
    );

    return (
        <main>
            <div>Main</div>
            <FilterList></FilterList>
            <ProductList></ProductList>
        </main>
    )
}


export default Main