import { Button } from "react-bootstrap";
import FinancesCards from "../components/FinancesCards";
import MobileTitleBar from "../components/MobileTitleBar";
import { useFicoScoreDetails, usePageTitle } from "../hooks";
import "../styles/finances.css";

export default function Finances() {
    const baseURL = import.meta.env.BASE_URL.includes("#") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}#/`;

    /* Change the page title on page load */
    usePageTitle("Finances");

    const scoreDetails = useFicoScoreDetails();

    return (
        <div className="finances-page ">
            <MobileTitleBar pageTitle="Finances" backButton />
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <Button href={`${baseURL}finances/fico`} variant="outline-secondary" className="align-items-center justify-content-center d-flex flex-column" style={{ borderRadius: "50vh", height: "25vh", width: "25vh", border: "2px var(--secondary) solid" }}>
                <h4 className="text-center " style={{ fontSize: "2vh", paddingInline: "2vw" }}>Your FICO Score:</h4>
                {isNaN(parseInt(scoreDetails.score)) ? 
                    <p className="p-0">{scoreDetails.score}</p> :
                    <h2 className="p-0" style={{ fontSize: "7vh"}}>{scoreDetails.score}</h2>
                }
                </Button>
                <FinancesCards /> 
            </div>
        </div>
    );
}
