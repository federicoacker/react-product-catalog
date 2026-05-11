import { Card, CardBody, Container } from "react-bootstrap";

function LoadingState() {
    return (
        <Container>
            <Card>
                <CardBody>
                    <Card.Title>Stiamo caricando il nostro shop</Card.Title>
                    <Card.Text>Per favore attendere</Card.Text>
                </CardBody>
            </Card>
        </Container>
    )
}

export default LoadingState