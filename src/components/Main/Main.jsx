import FilterList from "./FilterList.jsx";
import ProductList from "./ProductList.jsx";
import fetchProducts from "../../utils/fetchProducts.js";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function Main() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products);
    console.log(products);
    useEffect(
        () => {
            fetchProducts()
                .then(
                    products => {
                        setProducts(products);
                        setFilteredProducts(products);
                    }
                )
                .catch(error => console.error(error));
        }, []
    );

    return (
        <main>
            <Container>
                <Row>
                    <Col xs={4} md={2}>
                        <FilterList products={products}></FilterList>
                    </Col>
                    <Col xs={8} md={10}>
                        <ProductList products={filteredProducts} setFilteredProducts={setFilteredProducts}></ProductList>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}


export default Main