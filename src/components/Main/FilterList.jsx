
import { Col, Container, Row } from "react-bootstrap"
import Filter from "./Filter";
import { calculateCategories } from "../../utils/manageProducts";


function FilterList({ products, setSearch, search, count }) {
    function changeHandler(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const newSearch = {
            ...search,
            [name]: value
        }

        setSearch(newSearch);
    }

    const options = calculateCategories(products);
    console.log(options);

    return (
        <>
            <div className="filter-list">
                <h3 className="text-center"> Filtri </h3>
                <Container className="border rounded">
                    <Row>
                        <Col xs={12}>
                            <Filter
                                type="text"
                                value={search.nameSearch}
                                name="nameSearch"
                                changeHandler={changeHandler}
                            />
                        </Col>
                        <Col xs={12}>
                            <Filter
                                type="select"
                                value={search.categorySearch}
                                name="categorySearch"
                                changeHandler={changeHandler}
                                options={options}
                            />
                        </Col>
                    </Row>
                    {count !== 20 && 
                    <Row>
                        <h5>Trovati {count} risultati!</h5>
                    </Row>
                    }
                </Container>
            </div>
        </>
    )
}

export default FilterList