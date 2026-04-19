import {Col, Form, InputGroup, Row} from "react-bootstrap";

export default function CreditAccountFieldset({allAccountInfo, accountInfo, setAccountInfoCallback, index, loan = false}) {
    function handleInputChange(event) {
        const {name, value} = event.target;
        const newAccountInfo = [...allAccountInfo]
        newAccountInfo[index][name] = value;
        setAccountInfoCallback(newAccountInfo);
    }

    return (
        <fieldset key={accountInfo.name} className="mt-3">
            <h5>{accountInfo.name}</h5>
            <Form.Group as={Row} className="mb-3">
                <Col xs={6}>
                    <Form.Label>Account Type</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <Form.Select onChange={handleInputChange} defaultValue={accountInfo.loan} name="loan">
                        <option value={false}>Credit Card</option>
                        <option value={true}>Loan</option>
                    </Form.Select>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col xs={6}>
                    <Form.Label>{loan ? "Principal" : "Credit Limit"}</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" placeholder="0.00" onChange={handleInputChange} name="limit" />
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col xs={6}>
                    <Form.Label>Balance</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" placeholder="0.00" onChange={handleInputChange} name="balance" />
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col xs={6}>
                    <Form.Label>APR</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <Form.Control type="number" placeholder="0.00" onChange={handleInputChange} name="apr" />
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col xs={6}>
                    <Form.Label>Account Age</Form.Label>
                </Col>
                <InputGroup as={Col}>
                    <Form.Control type="number" placeholder="0.00" onChange={handleInputChange} name="age" />
                    <InputGroup.Text>Months</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </fieldset>
    );
}
