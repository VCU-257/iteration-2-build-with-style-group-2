import { Container, Nav, Navbar } from "react-bootstrap";
import Breadcrumbs from "./Breadcrumbs";
import { useLocation } from "react-router";

export default function DesktopNavbar() {
    const params = useLocation();
    const titleAndHrefArray = [{title: "Home", href: "/"}]
    let activePage = "home"

    switch(params.pathname) {
        case "/finances":
            titleAndHrefArray.push({title: "Finances"});
            activePage = "finances";
            break;
        case "/finances/fico":
            titleAndHrefArray.push({title: "Finances", href: "/finances"});
            titleAndHrefArray.push({title: "FICO"});
            activePage = "finances";
            break;
        case "/account":
            titleAndHrefArray.push({title: "Account"});
            activePage = "account";
            break;
    }

    return (
        <div className="sticky-top">
            <Navbar bg="primary" expand="lg" className="d-none d-lg-block">
                <Container fluid>
                    <Navbar.Brand href="/">CreditBrand</Navbar.Brand>
                    <Nav className="navigation-buttons">
                        <Nav.Link href="/" active={activePage === "home"}>Home</Nav.Link>
                        <Nav.Link href="#">Plans</Nav.Link>
                        <Nav.Link href="/account" active={activePage === "account"}>Account</Nav.Link>
                        <Nav.Link href="/finances" active={activePage === "finances"}>Finances</Nav.Link>
                        <Nav.Link href="#">Learning</Nav.Link>
                        <Nav.Link href="#">Customer Service</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Breadcrumbs titleAndHrefArray={titleAndHrefArray} />
        </div>
    );
}