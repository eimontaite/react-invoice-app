import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const UserInfoForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name"/>
            </Form.Group>

            <Form.Group controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="surname" placeholder="Surname"/>
            </Form.Group>

            <Form.Group controlId="formPersonalNumber">
                <Form.Label>Personal Number</Form.Label>
                <Form.Control type="personalNumber" placeholder="Your personal number (optional)"/>
            </Form.Group>

            <Form.Group controlId="formBusinessLicenceNo">
                <Form.Label>Business Licence No.</Form.Label>
                <Form.Control type="businessLicenceNo" placeholder="Your business licence number"/>
            </Form.Group>

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Your address"/>
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email"/>
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone"/>
            </Form.Group>

            <Form.Group controlId="formBankAccountNo">
                <Form.Label>Bank Account No.</Form.Label>
                <Form.Control type="bankAccount" placeholder="Your bank account number"/>
            </Form.Group>

            <Form.Group controlId="formBank">
                <Form.Label>Bank</Form.Label>
                <Form.Control type="bank" placeholder="Bank"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default UserInfoForm;