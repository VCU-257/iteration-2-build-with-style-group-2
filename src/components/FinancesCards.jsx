import "../styles/finances.css";
import { Button, Container, Form, Row, Card } from "react-bootstrap";

export default function FinancesCards(){
    return(
        <div className="finances-cards">
            <div className="container d-flex flex-column mt-4">
                <div className="container d-flex flex-row mb-4 gap-3">
                    <Card className="col">
                        <Card.Body>
                            <Card.Title>Goal Progress</Card.Title>
                            <Card.Text>
                            You currently have no goals set. Set a goal to start tracking your progress!
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                    <Card className="col">
                        <Card.Body>
                            <Card.Title>Home Loans</Card.Title>
                            <Card.Text>
                            Your current balance is $0.00
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container mb-4 d-flex flex-row gap-3">
                    <Card className="col">
                        <Card.Body>
                            <Card.Title>Auto Loans</Card.Title>
                            <Card.Text>
                            Your current balance is $0.00
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                    <Card className="col">
                        <Card.Body>
                            <Card.Title>Credit Cards</Card.Title>
                            <Card.Text>
                            Your current balance is $0.00
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container d-flex flex-row mb-4">
                    <Card className="col">
                        <Card.Body>
                            <Card.Title>Personal Loans</Card.Title>
                            <Card.Text>
                            Your current balance is $0.00
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}