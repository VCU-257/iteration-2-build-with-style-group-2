import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CreditAccountFieldset from "../components/CreditAccountFieldset";
import "../styles/account.css";
import { PlusCircle } from "react-bootstrap-icons";
import MobileTitleBar from "../components/MobileTitleBar";

export default function Account() {
    const [accountInfo, setAccountInfo] = useState([{
        name: "Credit Account",
        limit: 0,
        balance: 0,
        apr: 0,
        age: 0,
        loan: false
    }]);

    function handleAddFieldset() {
        setAccountInfo([...accountInfo, {
            name: "Credit Account",
            limit: 0,
            balance: 0,
            apr: 0,
            age: 0,
            loan: false
        }]);
    }

    console.log(accountInfo)

    return (
        <div className="account-page">
            <MobileTitleBar pageTitle="Edit Account Information" />
            <Container fluid>
                <Form>
                    {accountInfo.map((info, index) => <CreditAccountFieldset accountInfo={info} allAccountInfo={accountInfo} setAccountInfoCallback={(allAccountInfo) => setAccountInfo(allAccountInfo)} index={index} />)}
                </Form>
                <Button onClick={handleAddFieldset} className="bg-secondary border-none d-flex align-items-center"><PlusCircle className="me-2" />Add Account</Button>
            </Container>
        </div>
    );
}
