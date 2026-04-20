import { useEffect, useState } from "react";
import MobileTitleBar from "../components/MobileTitleBar";
import Card from "react-bootstrap/Card";
import "../styles/fico.css";
import { useFicoScore, useFicoScoreDetails } from "../hooks";

// SCORE CARD
function FICOScoreCard({ ficoScore }) {
    const markerLeft = `${((ficoScore - 380) / (850 - 380)) * 100}%`;

    const getLabel = (score) => {
        if (score < 580) return "Poor";
        if (score < 670) return "Fair";
        if (score < 740) return "Good";
        if (score < 800) return "Very Good";
        return "Exceptional";
    };

    return (
        <div className="card p-4 shadow-sm h-100">
            <div className="text-center mb-2">
                <h2>{ficoScore}</h2>
                <p>{getLabel(ficoScore)}</p>
            </div>

            <div className="fico-labels">
                <span className="label-380">380</span>
                <span className="label-580">580</span>
                <span className="label-670">670</span>
                <span className="label-740">740</span>
                <span className="label-800">800</span>
                <span className="label-850">850</span>
            </div>

            <div className="fico-bar position-relative mb-2">
                <div className="fico-marker" style={{ left: markerLeft }}></div>
            </div>
        </div>
    );
}

// HISTORY CARD
function FicoScoreHistory({ newScore, lastScore }) {
    let trend = "";

    if (newScore > lastScore) {
        trend = "increasing";
    } else if (newScore < lastScore) {
        trend = "decreasing";
    } else {
        trend = "staying the same";
    }

    return (
        <Card className="shadow-sm p-3">
            <Card.Body>
                <Card.Title>FICO History</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Previous: {lastScore} → Current: {newScore}
                </Card.Subtitle>
                <Card.Text>
                    Your credit score has been <strong>{trend}</strong>.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function CreditImprovementCard({ficoDetails}) {

    //  get real calculated data
    const ficoDetails = useFicoScoreDetails();

    // map internal keys → user-friendly labels
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
        <Card className="p-3 shadow-sm">
            <Card.Body>
                <Card.Title>Needs Improvement</Card.Title>

                <h5 className="text-danger">{label}</h5>
            </Card.Body>
        </Card>
    );
}

export default CreditImprovementCard;
function highestImpact({ficoDetails}) {

    //  get real calculated data
    const ficoDetails = useFicoScoreDetails();

    // map internal keys → user-friendly labels
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
        <Card className="p-3 shadow-sm">
            <Card.Body>
                <Card.Title>Strongest Factor</Card.Title>

                <h5 className="text-success">{label}</h5>
            </Card.Body>
        </Card>
    );
}

export default highestImpact;

export default function FICO() {
    useEffect(() => {
        document.title = "FICO Score Detail";
    }, []);

    //full details from hook 
    const ficoDetails = useFicoScoreDetails();
    const currentScore = ficoDetails.score;
    

    // load history from localStorage
    const [ficoHistory, setFicoHistory] = useState(() => {
        const saved = localStorage.getItem("ficoHistory");
        return saved ? JSON.parse(saved) : [];
    });

    //update history when score changes
    useEffect(() => {
        if (!currentScore) return;

        setFicoHistory((prev) => {
            // avoid duplicate entries
            if (prev[prev.length - 1] === currentScore) return prev;

            const updated = [...prev, currentScore];

            //keep only last 15
            if (updated.length > 15) {
                updated.shift();
            }

            return updated;
        });
    }, [currentScore]);

    // save the history
    useEffect(() => {
        localStorage.setItem("ficoHistory", JSON.stringify(ficoHistory));
    }, [ficoHistory]);

    // get last score safely
    const lastScore =
        ficoHistory.length > 1
            ? ficoHistory[ficoHistory.length - 2]
            : currentScore;

return (
    <div className="FICO-page">
        <MobileTitleBar pageTitle="FICO Score" />

        <div className="container py-4">
            <div className="row g-4 justify-content-center">

                {/* SCORE CARD */}
                <div className="col-12 col-lg-8">
                    <FICOScoreCard FICOScore={currentScore} />
                </div>

                {/* below Section */}
                <div className="col-12 col-lg-4">
                    <div className="row g-4 justify-content-center">

                        {/* fico history */}
                        <div className="col-12 col-md-8 col-lg-12">
                            <FicoScoreHistory
                                NewScore={currentScore}
                                lastScore={lastScore}
                            />
                        </div>

                        {/* lowest stat */}
                        <div className="col-12 col-md-6 col-lg-6">
                            <CreditImprovementCard ficoDetails={ficoDetails} />
                        </div>

                        {/* highest stat */}
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