import { Container, Nav, Navbar } from "react-bootstrap";
import { Archive, House, PersonVcard } from "react-bootstrap-icons";

export default function MobileNavbar() {
    const baseURL = import.meta.env.BASE_URL.includes("#") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}#/`;

    return (
        <Navbar bg="primary" expand="lg" className="d-lg-none mt-3 mobile-navbar p-3" fixed="bottom">
            <Container className="justify-content-around text-center" fluid>
                <Nav.Link href={baseURL}>
                    <House />
                </Nav.Link>
                <Nav.Link href={`${baseURL}finances`}>
                    <Archive />
                </Nav.Link>
                <Nav.Link href={`${baseURL}account`}>
                    <PersonVcard />
                </Nav.Link>
            </Container>
        </Navbar>
    );
}