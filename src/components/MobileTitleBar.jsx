import { Container, Navbar, Nav } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

export default function MobileTitleBar({ pageTitle, backButtonHref }) {
    return (
        <Navbar bg="light" expand="lg" className="d-lg-none" sticky="top">
            <Container fluid>
                {backButtonHref ? 
                    <Nav.Link href={backButtonHref} color="var(--text)">
                        <ArrowLeft />
                    </Nav.Link>
                : ""}
                
                <h5 class="page m-auto py-4">{pageTitle}</h5>
            </Container>
        </Navbar>
    )
}