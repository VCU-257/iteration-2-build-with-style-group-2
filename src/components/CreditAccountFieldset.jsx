import { useEffect, useState } from "react";
import {Col, Form, InputGroup, Row} from "react-bootstrap";

export default function CreditAccountFieldset({accountInfo, setAccountInfo, index, loan = false}) {    
    function handleInputChange(event) {
        const {name, value} = event.target;
        setAccountInfo((allAccountInfo) => {
            const newAccountInfo = [...allAccountInfo];
            newAccountInfo[index][name] = value;
            return newAccountInfo;
        });
    }

    return (
        <fieldset className="mt-3">
            <Form.Group>
                <Form.Control value={accountInfo.accountName} type="text" placeholder="Enter Account Name" onChange={handleInputChange} name="accountName" className="fw-semibold fs-4" plaintext />
            </Form.Group>
            <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                <Col xs={6}>
                    <Form.Label>Account Type</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <Form.Select value={accountInfo.loan} onChange={handleInputChange} name="loan">
                        <option value={false}>Credit Card</option>
                        <option value={true}>Loan</option>
                    </Form.Select>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                <Col xs={6}>
                    <Form.Label>{loan ? "Principal" : "Credit Limit"}</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control value={accountInfo.limit} type="number" placeholder="0.00" onChange={handleInputChange} name="limit" />
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                <Col xs={6}>
                    <Form.Label>Balance</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control value={accountInfo.balance} type="number" placeholder="0.00" onChange={handleInputChange} name="balance" />
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                <Col xs={6}>
                    <Form.Label>APR</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <Form.Control value={accountInfo.apr} type="number" placeholder="0.00" onChange={handleInputChange} name="apr" />
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                <Col xs={6}>
                    <Form.Label>Account Age</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <Form.Control value={accountInfo.age} type="number" placeholder="0.00" onChange={handleInputChange} name="age" />
                    <InputGroup.Text>Months</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </fieldset>
    );
}
