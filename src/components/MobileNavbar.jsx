import { Container, Nav, Navbar } from "react-bootstrap";
import { Archive, House, PersonVcard } from "react-bootstrap-icons";

export default function MobileNavbar() {
    return (
        <Navbar bg="primary" expand="lg" className="d-lg-none" fixed="bottom">
            <Container className="justify-content-around text-center" fluid>
                <Nav.Link href="/">
                    <House />
                </Nav.Link>
                <Nav.Link href="/finances">
                    <Archive />
                </Nav.Link>
                <Nav.Link href="/account">
                    <PersonVcard />
                </Nav.Link>
            </Container>
        </Navbar>
    );
}