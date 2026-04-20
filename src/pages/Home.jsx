import { useEffect, useState } from "react";
import "../styles/home.css";

export default function Home() {

    const [score, setScore] = useState(720);

    useEffect(() => {
        document.title = "Home";
    }, []);

    function refreshScore() {
        const newScore = Math.floor(Math.random() * (850 - 600) + 600);
        setScore(newScore);
    }

    return (
        <div className="home-page">

            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">CreditBrand</a>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Plans</a></li>
                            <li className="nav-item"><a className="nav-link" href="account-info.html">Account</a></li>
                            <li className="nav-item"><a className="nav-link" href="Finances.html">Finances</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* main */}
            <div className="container py-5">
                
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Welcome Back</h1>
                    <p className="text-muted">Manage your credit and finances easily</p>
                </div>

                {/* action cards */}
                <div className="row g-4 mb-5 text-center">

                    <div className="col-6 col-md-3">
                        <a href="Finances.html" className="action-link">
                            <div className="card p-3 action-card">
                                <i className="bi bi-wallet fs-1 mb-2"></i>
                                <h6>Finances</h6>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-3">
                        <a href="account-info.html" className="action-link">
                            <div className="card p-3 action-card">
                                <i className="bi bi-person fs-1 mb-2"></i>
                                <h6>Accounts</h6>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-3">
                        <a href="#" className="action-link">
                            <div className="card p-3 action-card">
                                <i className="bi bi-credit-card fs-1 mb-2"></i>
                                <h6>Cards</h6>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-3">
                        <a href="#" className="action-link">
                            <div className="card p-3 action-card">
                                <i className="bi bi-cash fs-1 mb-2"></i>
                                <h6>Loans</h6>
                            </div>
                        </a>
                    </div>

                </div>

                {/* credit score */}
                <div className="card text-center shadow-sm p-4">

                    <h4 className="mb-3">Your Credit Score</h4>

                    <div className="display-1 fw-bold text-primary">
                        {score}
                    </div>

                    <p className="text-muted mb-3">Good standing</p>

                    <button className="btn btn-secondary" onClick={refreshScore}>
                        <i className="bi bi-arrow-repeat"></i> Refresh Score
                    </button>

                </div>

            </div>

            {/* mobile navigation */}
            <nav className="navbar fixed-bottom navbar-light bg-light d-lg-none border-top">
                <div className="container-fluid d-flex justify-content-around text-center">

                    <a href="#" className="text-dark">
                        <i className="bi bi-house fs-5"></i>
                    </a>

                    <a href="Finances.html" className="text-dark">
                        <i className="bi bi-wallet fs-5"></i>
                    </a>

                    <a href="account-info.html" className="text-dark">
                        <i className="bi bi-person fs-5"></i>
                    </a>

                </div>
            </nav>

        </div>
    );
}
