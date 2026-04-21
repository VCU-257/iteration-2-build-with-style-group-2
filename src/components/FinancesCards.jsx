import "../styles/finances.css";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";

export default function FinancesCards(){
    return(
        <div className="finances-cards">
            <div className="container d-flex flex-column mt-4 gap-3">
                <div className="container d-flex flex-row gap-3">
                    <Card as={Col}>
                        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                            <div className="mb-3">
                                <Card.Title>Goal Progress</Card.Title>
                                <Card.Text>
                                You currently have no goals set. Set a goal to start tracking your progress!
                                </Card.Text>
                            </div>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                    <Card as={Col}>
                        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                            <div className="mb-3">
                                <Card.Title>Home Loans</Card.Title>
                                <Card.Text>
                                Your current balance is $0.00
                                </Card.Text>
                            </div>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container d-flex flex-row gap-3">
                    <Card as={Col}>
                        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                            <div className="mb-3">
                                <Card.Title>Auto Loans</Card.Title>
                                <Card.Text>
                                Your current balance is $0.00
                                </Card.Text>
                            </div>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                    <Card as={Col}>
                        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                            <div className="mb-3">
                                <Card.Title>Credit Cards</Card.Title>
                                <Card.Text>
                                Your current balance is $0.00
                                </Card.Text>
                            </div>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container d-flex flex-row">
                    <Card as={Col}>
                        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                            <div className="mb-3">
                                <Card.Title>Personal Loans</Card.Title>
                                <Card.Text>
                                Your current balance is $0.00
                                </Card.Text>
                            </div>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}