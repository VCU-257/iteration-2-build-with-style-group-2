import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import FICO from "./pages/FICO";
import Account from "./pages/Account";
import { Container, Nav, Navbar } from "react-bootstrap";
/* The order of the following imports is very important! */
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import "./styles/global.css";

export default function App() {
    return (
        <div className="app">
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand href="/">CreditBrand</Navbar.Brand>
                    <Nav className="navigation-buttons">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">Plans</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/finances">Finances</Nav.Link>
                        <Nav.Link href="#">Learning</Nav.Link>
                        <Nav.Link href="#">Customer Service</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/finances" element={<Finances />} />
                <Route path="/finances/fico" element={<FICO />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>
    );
}
