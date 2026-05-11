
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

    return (
        <>
            <div className="filter-list">
                <h3 className="text-center"> Filtri </h3>
                <Container className="border rounded">
                    <Row>
                        <Col xs={12}>
                            <Filter
                                label="Cerca"
                                type="text"
                                value={search.nameSearch}
                                name="nameSearch"
                                changeHandler={changeHandler}
                            />
                        </Col>
                        <Col xs={12}>
                            <Filter
                                label="Categorie"
                                type="select"
                                value={search.categorySearch}
                                name="categorySearch"
                                changeHandler={changeHandler}
                                options={options}
                            />
                        </Col>
                        <Col xs={12}>
                            <Filter
                                label="Ordinamento"
                                type="select"
                                value={search.sorting}
                                name="sorting"
                                changeHandler={changeHandler}
                                options={
                                    [
                                        {
                                            id:1,
                                            name:"Prezzo Discendente",
                                            value:"descending"
                                        },
                                        {
                                            id:2,
                                            name:"Prezzo Ascendente",
                                            value:"ascending"
                                        }
                                    ]
                                }
                            />
                        </Col>
                    </Row>
                    {(count !== 20 && count !== 0) && 
                    <h5>Trovati {count} risultati!</h5>
                    }
                    {count === 0 &&
                    <h5>Ci dispiace, non sono stati trovati articoli che rispettino i tuoi criteri di ricerca</h5>
                    }
                </Container>
            </div>
        </>
    )
}

export default FilterList