import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import FICO from "./pages/FICO";
import Account from "./pages/Account";
/* The order of the following imports is very important! */
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import "./styles/global.css";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { Container } from "react-bootstrap";

export default function App() {
    return (
        <Container fluid className="app p-0 pb-4 mb-lg-3">
            <Container fluid className="p-0 mb-5">
                <DesktopNavbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="finances" element={<Finances />} />
                    <Route path="finances/fico" element={<FICO />} />
                    <Route path="account" element={<Account />} />
                </Routes>
                <MobileNavbar />
            </Container>
        </Container>
    );
}
