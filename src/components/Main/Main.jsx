import FilterList from "./FilterList.jsx";
import ProductList from "./ProductList.jsx";
import fetchProducts from "../../utils/manageProducts.js";
import { filterProducts } from "../../utils/manageProducts.js";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import LoadingState from "./LoadingState.jsx";
import ErrorState from "./ErrorState.jsx";

const templateSearch = {
    nameSearch: '',
    categorySearch: '',
    sorting: 'descending'
}

function Main() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [search, setSearch] = useState(templateSearch);
    const [loaded, setLoaded] = useState(false);
    const [count, setCount] = useState(0);
    const [loadError, setLoadError] = useState(false);

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
                        filterProducts(search, result, setFilteredProducts, setCount, count);
                        setLoaded(true);
                    }
                )
                .catch(error =>{
                    setLoadError(true);
                    console.error(error)
                    });
        }, [search]
    );

    return (

        <main data-bs-theme="dark">
            {(!loaded && loadError) &&
            <ErrorState/>
            }
            {(!loaded && !loadError) &&
            <LoadingState />
            }
            {(loaded && !loadError) &&
            <Container fluid="xl">
                <Row>
                    <Col xs={4} md={3} className="filter-list-wrapper">
                        <FilterList products={products} setSearch={setSearch} search={search} count={count}></FilterList>
                    </Col>
                    <Col xs={8} md={9}>
                        <ProductList products={filteredProducts}></ProductList>
                    </Col>
                </Row>
            </Container>
            }
        </main>
    )
}


export default Main