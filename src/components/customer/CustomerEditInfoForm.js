import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const CustomerEditInfoForm = props => {
    console.log("props.data.name", props.data.name)
    return (
        <Form onSubmit={props.onSubmit} onChange={props.onChange}>
            {/*todo use actual userId*/}
            <Form.Group disabled controlId="formUserId">
                <Form.Label>User ID</Form.Label>
                <Form.Control name="userId" type="number" value="2"/>
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control required name="name" type="input" defaultValue={props.data.name}/>
            </Form.Group>

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control required name="address" type="input" defaultValue={props.data.address} placeholder="Customer Address"/>
            </Form.Group>

            <Form.Group controlId="formCode">
                <Form.Label>Customer Code</Form.Label>
                <Form.Control name="code" type="input" defaultValue={props.data.code} placeholder="Customer Code"/>
            </Form.Group>

            <Form.Group controlId="formLegalEntity">
                <Form.Check name="legalEntity" type="checkbox" defaultValue={props.data.legalEntity} checked={props.data.legalEntity} onChange={props.onCheckboxChange} label="Legal Entity?" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default CustomerEditInfoForm;