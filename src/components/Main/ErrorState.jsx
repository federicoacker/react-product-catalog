import {Container, Card, CardBody} from "react-bootstrap"
function ErrorState() {
    return (
        <Container>
            <Card data-bs-theme="dark" className="text-danger">
                <CardBody>
                    <Card.Title>C'è stato un errore durante il caricamento</Card.Title>
                    <Card.Text>Per favore aprire una issue a <a href="https://github.com/federicoacker/react-product-catalog/issues">Questo Link</a></Card.Text>
                </CardBody>
            </Card>
        </Container>
    )
}

export default ErrorState