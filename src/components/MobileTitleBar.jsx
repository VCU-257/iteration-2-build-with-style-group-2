import { Container, Navbar, Nav } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function MobileTitleBar({ pageTitle, backButton }) {
    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg" className="d-lg-none" sticky="top">
            <Container fluid>
                {backButton ? 
                    <Nav.Link onClick={() => navigate(-1)} color="var(--text)">
                        <ArrowLeft />
                    </Nav.Link>
                : ""}
                
                <h5 className="page m-auto py-4">{pageTitle}</h5>
            </Container>
        </Navbar>
    )
}