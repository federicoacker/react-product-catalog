import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

function ProductList({ products }) {
    return (
        <>
            <h3 className="text-center">Prodotti</h3>
            <Container className="border rounded py-5">
                <Row className="row-gap-3">
                    {products.map(product =>
                        <Col xs={12} md={6} lg={4} key={product.id}>
                            <Product
                                product={product} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default ProductList