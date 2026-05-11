import { Container } from "react-bootstrap"
function Header() {
    return (
        <header className="header mb-5 py-5 border-bottom border-danger">
            <Container>
                <h1 className="text-center">React Product Catalog</h1>
            </Container>
        </header>
    )
}

export default Header