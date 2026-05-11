import FilterList from "./FilterList.jsx";
import ProductList from "./ProductList.jsx";
import fetchProducts from "../../utils/manageProducts.js";
import { filterProducts } from "../../utils/manageProducts.js";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

const templateSearch = {
    nameSearch: '',
    categorySearch: ''
}

function Main() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [search, setSearch] = useState(templateSearch);
    const [loaded, setLoaded] = useState(false);

    useEffect(
        () => {
            fetchProducts()
                .then(
                    products => {
                        setProducts(products);
                        return products;
                    }
                ).then(
                    result => {
                        filterProducts(search, result, setFilteredProducts);
                        setLoaded(true);
                    }
                )
                .catch(error => console.error(error));
        }, [search]
    );

    return (
        loaded &&
        <main>
            <Container fluid="xl">
                <Row>
                    <Col xs={4} md={3} className="filter-list-wrapper">
                        <FilterList products={products} setSearch={setSearch} search={search}></FilterList>
                    </Col>
                    <Col xs={8} md={9}>
                        <ProductList products={filteredProducts}></ProductList>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}


export default Main