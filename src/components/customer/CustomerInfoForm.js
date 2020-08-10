import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const CustomerInfoForm = props => {
    console.log("checked", props.checked)
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

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control required name="address" type="input" placeholder="Customer Address"/>
            </Form.Group>

            <Form.Group controlId="formCode">
                <Form.Label>Customer Code</Form.Label>
                <Form.Control name="code" type="input" placeholder="Customer Code"/>
            </Form.Group>

            <Form.Group controlId="formLegalEntity">
                <Form.Check name="legalEntity" type="checkbox" value={props.checked} onChange={props.onCheckboxChange} label="Legal Entity?" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default CustomerInfoForm;