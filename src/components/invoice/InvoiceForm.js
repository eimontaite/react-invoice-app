import React from 'react';
import {Button, Form} from "react-bootstrap";

const InvoiceForm = props => {

    return (
        <Form onSubmit={props.onSubmit} onChange={props.onChange}>
            {/*todo use actual userId*/}
            <Form.Group disabled controlId="formUserId">
                <Form.Label>User ID</Form.Label>
                <Form.Control name="userId" type="number" value="2"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default InvoiceForm;