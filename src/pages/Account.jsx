import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { PlusCircle, Save } from "react-bootstrap-icons";
import CreditAccountFieldset from "../components/CreditAccountFieldset";
import MobileTitleBar from "../components/MobileTitleBar";
import "../styles/account.css";

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
                loan: "false",
                missedPayments: 0
            }];
    });

    const [additionalInfo, setAdditionalInfo] = useState(() => {const savedAdditionalInfo = localStorage.getItem("additionalInfo");
        return savedAdditionalInfo !== null
            ? JSON.parse(savedAdditionalInfo)
            : {
                inquiries: 0
            };
    });

    function handleAdditionalInfoChange(event) {
        const {name, value} = event.target;
        setAdditionalInfo((additionalInfo) => {return {...additionalInfo, [name]: value};});
    }

    function handleAddFieldset() {
        setAccountInfo([...accountInfo, {
            accountName: "Credit Account",
            limit: 0,
            balance: 0,
            apr: 0,
            age: 0,
            loan: "false",
            missedPayments: 0
        }]);
    }

    function handleSave() {
        if(formRef.current.checkValidity()) {
            localStorage.setItem('accountInfo', JSON.stringify(accountInfo));
            localStorage.setItem('additionalInfo', JSON.stringify(additionalInfo));
        }
    }

    /* Change the page title on page load */
    useEffect(() => {
        document.title = "Edit Account Info";
    }, []);

    return (
        <div className="account-page">
            <MobileTitleBar pageTitle="Edit Account Information" />
            <Container fluid>
                <Form ref={formRef} validated>
                    {accountInfo.map((info, index) => <CreditAccountFieldset accountInfo={info} allAccountInfo={accountInfo} setAccountInfo={setAccountInfo} index={index} key={index} />)}
                    <h4>Additional Info</h4>
                    <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                        <Col xs={6}>
                            <Form.Label>Inquiries</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control value={additionalInfo.inquiries} type="number" placeholder="0" min={0} onChange={handleAdditionalInfoChange} name="inquiries" />
                        </Col>
                    </Form.Group>
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
