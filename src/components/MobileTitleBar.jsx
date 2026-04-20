import { Container, Navbar, Nav } from "react-bootstrap";
import { ArrowLeft, Gear } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function MobileTitleBar({ pageTitle, backButton }) {
    const baseURL = import.meta.env.BASE_URL.includes("#") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}#/`;
    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg" className="d-lg-none" sticky="top">
            <Container fluid>
                {backButton ? 
                    <Nav.Link onClick={() => navigate(-1)} color="var(--text)" style={{ marginLeft: "2vw" }}>
                        <ArrowLeft />
                    </Nav.Link>
                : ""}
                
                <h5 className="page m-auto py-4">{pageTitle}</h5>

                {
                    pageTitle !== "Edit Account Information" ?
                    <Nav.Link href={`${baseURL}account`} style={{ marginRight: "2vw" }}>
                        <Gear />
                    </Nav.Link> : ""
                }
            </Container>
        </Navbar>
    )
}