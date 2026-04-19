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

export default function App() {
    return (
        <div className="app">
            <DesktopNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/finances" element={<Finances />} />
                <Route path="/finances/fico" element={<FICO />} />
                <Route path="/account" element={<Account />} />
            </Routes>
            <MobileNavbar />
        </div>
    );
}
