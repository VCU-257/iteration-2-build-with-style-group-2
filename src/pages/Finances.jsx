import { useEffect } from "react";
import MobileTitleBar from "../components/MobileTitleBar";
import FinancesCards from "../components/FinancesCards";
import { Button } from "react-bootstrap";
import "../styles/finances.css";

export default function Finances() {
    const baseURL = import.meta.env.BASE_URL.includes("#") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}#/`;

    /* Change the page title on page load */
    useEffect(() => {
        document.title = "Finances";
    }, []);

    return (
        <div className="finances-page ">
            <MobileTitleBar pageTitle="Finances" backButton />
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <Button href={`${baseURL}/finances/fico`} variant="outline-secondary" className="align-items-center justify-content-center d-flex flex-column" style={{ borderRadius: "50vh", height: "25vh", width: "25vh", border: "2px var(--secondary) solid" }}>
                <h4 className="text-center " style={{ fontSize: "2vh", paddingInline: "2vw" }}>Your FICO Score:</h4>
                <h2 className="p-0" style={{ fontSize: "7vh"}}>760</h2>
                </Button>
                <FinancesCards /> 
            </div>
        </div>
    );
}
