import { Card } from "react-bootstrap";

function Product({ product }) {
    return (
        <Card className="product-card">
            <Card.Img variant="top" src={product.image} className="product-img" />
            <Card.Header className="product-title">
                <Card.Title>{product.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="product-description">
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <hr />
                <Card.Text>
                    <strong>Rating: {product.rating.rate}/5 <br /> {product.rating.count} recensioni</strong>
                </Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default Product