import { useEffect, useState } from "react";
import MobileTitleBar from "../components/MobileTitleBar";
import Card from "react-bootstrap/Card";
import "../styles/fico.css";
import { useFicoScoreDetails, usePageTitle } from "../hooks";

// SCORE CARD
function FICOScoreCard({ ficoScore }) {

    // calculate marker position based on score
    const markerLeft = `${((ficoScore - 380) / (850 - 380)) * 100}%`;

    // determine fico category label
    const getLabel = (score) => {
        if (score < 580) return "Poor";
        if (score < 670) return "Fair";
        if (score < 740) return "Good";
        if (score < 800) return "Very Good";
        return "Exceptional";
    };

    return (
        <div className="card p-4 shadow-sm h-100">

            {/* score value and label */}
            <div className="text-center mb-2">
                <h2>{ficoScore}</h2>
                <p>{getLabel(ficoScore)}</p>
            </div>

            {/* fico scale labels */}
            <div className="fico-labels">
                <span className="label-380">380</span>
                <span className="label-580">580</span>
                <span className="label-670">670</span>
                <span className="label-740">740</span>
                <span className="label-800">800</span>
                <span className="label-850">850</span>
            </div>

            {/* colored score bar */}
            <div className="fico-bar position-relative mb-2">

                {/* vertical marker showing exact score */}
                <div className="fico-marker" style={{ left: markerLeft }}></div>
            </div>
        </div>
    );
}

// HISTORY CARD
function FicoScoreHistory({ newScore, lastScore }) {

    // determine score trend
    let trend = "";

    if (newScore > lastScore) {
        trend = "increasing";
    } else if (newScore < lastScore) {
        trend = "decreasing";
    } else {
        trend = "stable";
    }

    return (
        <Card className="shadow-sm p-3 h-100">
            <Card.Body>

                {/* title */}
                <Card.Title>FICO History</Card.Title>

                {/* previous vs current score */}
                <Card.Subtitle className="mb-2 text-muted">
                    Previous: {lastScore} → Current: {newScore}
                </Card.Subtitle>

                {/* trend display */}
                <Card.Text>
                    Your credit score has been <strong>{trend}</strong>.
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

// LOWEST FACTOR CARD
function CreditImprovementCard({ ficoDetails }) {

    // find lowest impacting factor
    let label = "";

    if (ficoDetails.mostNegativeImpact === "paymentHistoryImpact") {
        label = "Payment History";
    } else if (ficoDetails.mostNegativeImpact === "utilizationImpact") {
        label = "Credit Utilization";
    } else if (ficoDetails.mostNegativeImpact === "historyImpact") {
        label = "Credit Age";
    } else if (ficoDetails.mostNegativeImpact === "mixImpact") {
        label = "Credit Mix";
    } else if (ficoDetails.mostNegativeImpact === "inquiryImpact") {
        label = "New Credit";
    }

    return (
        <Card className="p-3 shadow-sm h-100">
            <Card.Body>

                {/* title */}
                <Card.Title>Needs Improvement</Card.Title>

                {/* lowest factor */}
                <h5 className="text-danger">{label}</h5>

            </Card.Body>
        </Card>
    );
}

// HIGHEST FACTOR CARD
function CreditStrengthCard({ ficoDetails }) {

    // find strongest contributing factor
    let label = "";

    if (ficoDetails.mostPositiveImpact === "paymentHistoryImpact") {
        label = "Payment History";
    } else if (ficoDetails.mostPositiveImpact === "utilizationImpact") {
        label = "Credit Utilization";
    } else if (ficoDetails.mostPositiveImpact === "historyImpact") {
        label = "Credit Age";
    } else if (ficoDetails.mostPositiveImpact === "mixImpact") {
        label = "Credit Mix";
    } else if (ficoDetails.mostPositiveImpact === "inquiryImpact") {
        label = "New Credit";
    }

    return (
        <Card className="p-3 shadow-sm h-100">
            <Card.Body>

                {/* title */}
                <Card.Title>Strongest Factor</Card.Title>

                {/* highest factor */}
                <h5 className="text-success">{label}</h5>

            </Card.Body>
        </Card>
    );
}

// MAIN PAGE
export default function FICO() {
    /* Change the page title on page load */
    usePageTitle("FICO Score Detail");

    // get full fico details from hook

  
    const ficoDetails = useFicoScoreDetails();
    
      //fallback value change later! 
      //if no fico details sets score to 720
    const currentScore = ficoDetails.score;

    // load history from localStorage
    const [ficoHistory, setFicoHistory] = useState(() => {
        const saved = localStorage.getItem("ficoHistory");
        if (saved){
            return saved ? JSON.parse(saved) : [];
        }
        return[300];      
    });

    // update history when score changes
    useEffect(() => {
        if (isNaN(parseInt(currentScore))) return;

        setFicoHistory((prev) => {

            // avoid duplicate entries
            if (prev[prev.length - 1] === currentScore) return prev;

            const updated = [...prev, currentScore];

            // keep only last 15 scores
            if (updated.length > 15) {
                updated.shift();
            }

            return updated;
        });
    }, [currentScore]);

    // save history to localStorage
    useEffect(() => {
        localStorage.setItem("ficoHistory", JSON.stringify(ficoHistory));
    }, [ficoHistory]);

    // get previous score safely
    const lastScore =
        ficoHistory.length > 1
            ? ficoHistory[ficoHistory.length - 2]
            : (isNaN(parseInt(currentScore)) ? 0 : currentScore);

    return (
        <div className="FICO-page">

            <MobileTitleBar pageTitle="FICO Score" />

            <div className="container py-4">
                <div className="row g-4 justify-content-center">

                    {/* main score card */}
                    <div className="col-12 col-lg-8">
                        {typeof currentScore === "number" && (
                            <FICOScoreCard ficoScore={currentScore} />
                        )}
                    </div>

                    {/* right / below section */}
                    <div className="col-12 col-lg-4">
                        <div className="row g-4 justify-content-center">

                            {/* history card */}
                            <div className="col-12 col-md-8 col-lg-12">
                                <FicoScoreHistory
                                    newScore={currentScore}
                                    lastScore={lastScore}
                                />
                            </div>

                            {/* lowest factor */}
                            <div className="col-12 col-md-6 col-lg-6">
                                <CreditImprovementCard ficoDetails={ficoDetails} />
                            </div>

                            {/* highest factor */}
                            <div className="col-12 col-md-6 col-lg-6">
                                <CreditStrengthCard ficoDetails={ficoDetails} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}