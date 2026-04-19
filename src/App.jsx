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
        <div className="app mb-5 mb-lg-3">
            <DesktopNavbar />
            <Routes>
                <Route path="iteration-2-build-with-style-group-2">
                    <Route index element={<Home />} />
                    <Route path="finances" element={<Finances />} />
                    <Route path="finances/fico" element={<FICO />} />
                    <Route path="account" element={<Account />} />
                </Route>
            </Routes>
            <MobileNavbar />
        </div>
    );
}
