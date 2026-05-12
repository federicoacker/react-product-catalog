import FilterList from "./FilterList.jsx";
import ProductList from "./ProductList.jsx";
import { filterProducts } from "../../utils/manageProducts.js";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import LoadingState from "./LoadingState.jsx";
import ErrorState from "./ErrorState.jsx";
import useFetch from "../hooks/useFetch.js";

const API_URL = "https://fakestoreapi.com/products";

const templateSearch = {
    nameSearch: '',
    categorySearch: '',
    sorting: 'descending'
}

function Main() {

    const [search, setSearch] = useState(templateSearch);
    const [count, setCount] = useState(0);
    const {data, loadingError, loaded} = useFetch(API_URL);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(
        () => {
            filterProducts(search, data, setFilteredProducts, setCount, count);
        }, [search, data, count]
    );

    return (

        <main data-bs-theme="dark">
            {(!loaded && loadingError) &&
                <ErrorState />
            }
            {(!loaded && !loadingError) &&
                <LoadingState />
            }
            {(loaded && !loadingError) &&
                <Container fluid="xl">
                    <Row>
                        <Col xs={4} md={3} className="filter-list-wrapper">
                            <FilterList products={data} setSearch={setSearch} search={search} count={count}></FilterList>
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