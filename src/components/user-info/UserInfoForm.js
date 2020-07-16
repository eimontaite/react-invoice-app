import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const UserInfoForm = props => {

    return (
        <Form onSubmit={props.onSubmit} onChange={props.onChange}>
            {/*todo use actual userId*/}
            <Form.Group disabled controlId="formUserId">
                <Form.Label>User ID</Form.Label>
                <Form.Control name="userId" type="number" value="2"/>
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control required name="name" type="input" placeholder="Name"/>
            </Form.Group>

            <Form.Group controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control required name="surname" type="input" placeholder="Surname"/>
            </Form.Group>

            <Form.Group controlId="formPersonalNumber">
                <Form.Label>Personal Number</Form.Label>
                <Form.Control name="personalNumber" type="input" placeholder="Your personal number (optional)"/>
            </Form.Group>

            <Form.Group controlId="formBusinessLicenceNo">
                <Form.Label>Business Licence No.</Form.Label>
                <Form.Control required name="businessLicenceNo" type="input" placeholder="Your business licence number"/>
            </Form.Group>

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control required name="address" type="input" placeholder="Your address"/>
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="input" placeholder="Your email"/>
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" type="input" placeholder="Phone"/>
            </Form.Group>

            <Form.Group controlId="formBankAccountNo">
                <Form.Label>Bank Account No.</Form.Label>
                <Form.Control required name="bankAccount" type="input" placeholder="Your bank account number"/>
            </Form.Group>

            <Form.Group controlId="formBank">
                <Form.Label>Bank</Form.Label>
                <Form.Control required name="bank" type="input" placeholder="Bank"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default UserInfoForm;