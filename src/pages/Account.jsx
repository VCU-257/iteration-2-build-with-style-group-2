import { useRef, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import CreditAccountFieldset from "../components/CreditAccountFieldset";
import "../styles/account.css";
import { PlusCircle, Save } from "react-bootstrap-icons";
import MobileTitleBar from "../components/MobileTitleBar";

export default function Account() {
    const formRef = useRef(null);

    const [accountInfo, setAccountInfo] = useState(() => {
        const savedAccountInfo = localStorage.getItem("accountInfo");
        return savedAccountInfo !== null
            ? JSON.parse(savedAccountInfo)
            : [{
                accountName: "Credit Account",
                limit: 0,
                balance: 0,
                apr: 0,
                age: 0,
                loan: "false"
            }];
    });

    function handleAddFieldset() {
        setAccountInfo([...accountInfo, {
            accountName: "Credit Account",
            limit: 0,
            balance: 0,
            apr: 0,
            age: 0,
            loan: "false"
        }]);
    }

    function handleSave() {
        if(formRef.current.checkValidity()) {
            localStorage.setItem('accountInfo', JSON.stringify(accountInfo));
        }
    }

    console.log(accountInfo)

    return (
        <div className="account-page">
            <MobileTitleBar pageTitle="Edit Account Information" />
            <Container fluid>
                <Form ref={formRef} validated>
                    {accountInfo.map((info, index) => <CreditAccountFieldset accountInfo={info} allAccountInfo={accountInfo} setAccountInfo={setAccountInfo} index={index} key={index} />)}
                    <Form.Control.Feedback type="invalid">Please fix any errors before saving your preferences.</Form.Control.Feedback>
                </Form>
                <Container fluid>
                    <Row className="d-flex justify-content-between">
                        <Button onClick={handleAddFieldset} variant="secondary" className="d-flex flex-grow-0 flex-shrink-1 align-items-center col-auto"><PlusCircle className="me-2" />Add Account</Button>
                        <Button onClick={handleSave} variant="info" className="d-flex flex-grow-0 flex-shrink-1 align-items-center col-auto"><Save className="me-2" />Save</Button>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
