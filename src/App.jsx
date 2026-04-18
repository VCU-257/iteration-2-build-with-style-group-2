import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import FICO from "./pages/FICO";
import Account from "./pages/Account";
import "./styles/global.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/finances/fico" element={<FICO />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    );
}
