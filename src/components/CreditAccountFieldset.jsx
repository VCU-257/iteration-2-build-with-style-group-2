import { useRef, useState } from "react";
import {Col, Form, InputGroup, Row} from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

export default function CreditAccountFieldset({accountInfo, setAccountInfo, index}) {
    const [isLoan, setLoan] = useState((accountInfo.loan === "true") || false);
    const [isEditing, setEditing] = useState(false);

    const accountNameRef = useRef(null);

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
        <Form.Group
          as={Row}
          className="mb-3 d-flex flex-row align-items-center justify-content-between"
        >
          <Col xs="auto">
            <Form.Control
              title="Click to edit account name"
              role="button"
              ref={accountNameRef}
              onFocus={() => setEditing(true)}
              onBlur={() => setEditing(false)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.target.blur();
                }
              }}
              value={accountInfo.accountName}
              type="text"
              placeholder="Enter Account Name"
              onChange={handleInputChange}
              name="accountName"
              className="text-dark fw-bold fs-4 text-truncate"
              plaintext
            />
          </Col>
          <Col className="d-flex justify-content-end d-lg-block">
            <Pencil
              title="Click to edit account name"
              role="button"
              onClick={() => {
                setEditing(true);
                accountNameRef.current.focus();
              }}
              className={isEditing ? "d-none" : ""}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
          <Col xs={6}>
            <Form.Label>Account Type</Form.Label>
          </Col>
          <Col>
            <Form.Select
              value={accountInfo.loan === "true"}
              onChange={(event) => {
                setLoan(event.target.value === "true");
                handleInputChange(event);
              }}
              name="loan"
            >
              <option value="false">Credit Card</option>
              <option value="true">Loan</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
          <Col xs={6}>
            <Form.Label>
              {accountInfo.loan === "true" ? "Principal" : "Credit Limit"}
            </Form.Label>
          </Col>
          <InputGroup as={Col}>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={accountInfo.limit}
              type="number"
              placeholder="0.00"
              min={0}
              onChange={handleInputChange}
              name="limit"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
          <Col xs={6}>
            <Form.Label>Balance</Form.Label>
          </Col>
          <InputGroup as={Col}>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              value={accountInfo.balance}
              type="number"
              placeholder="0.00"
              min={0}
              max={isLoan ? "" : accountInfo.limit}
              onChange={handleInputChange}
              name="balance"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
          <Col xs={6}>
            <Form.Label>APR</Form.Label>
          </Col>
          <InputGroup as={Col}>
            <Form.Control
              value={accountInfo.apr}
              type="number"
              placeholder="0.00"
              min={0}
              onChange={handleInputChange}
              name="apr"
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
          <Col xs={6}>
            <Form.Label>Account Age</Form.Label>
          </Col>
          <InputGroup as={Col}>
            <Form.Control
              value={accountInfo.age}
              type="number"
              placeholder="0.00"
              min={0}
              onChange={handleInputChange}
              name="age"
            />
            <InputGroup.Text>
              {accountInfo.age === 1 ? "Month" : "Months"}
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
          <Col xs={6}>
            <Form.Label>Missed/Late Payments</Form.Label>
          </Col>
          <Col>
            <Form.Control
              value={accountInfo.missedPayments}
              type="number"
              placeholder="0"
              min={0}
              onChange={handleInputChange}
              name="missedPayments"
            />
          </Col>
        </Form.Group>
      </fieldset>
    );
}
