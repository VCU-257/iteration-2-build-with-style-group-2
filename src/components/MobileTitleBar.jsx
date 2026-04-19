import { Container, Navbar, Nav } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

export default function MobileTitleBar({ pageTitle, backButtonHref }) {
    return (
        <Navbar bg="light" expand="lg" className="d-lg-none" fixed="top">
            <Container fluid>
                {backButtonHref ? 
                    <Nav.Link href={backButtonHref} color="var(--text)">
                        <ArrowLeft />
                    </Nav.Link>
                : ""}
                
                <h5 class="page m-auto">{pageTitle}</h5>
            </Container>
        </Navbar>
    )
}