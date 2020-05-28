import React from "react";
import {withRouter} from "react-router-dom";
import UserInfoForm from '../../components/user-info/UserInfoForm.js';
import {Container, Col, Row, Form, Button} from "react-bootstrap";

class NewUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    };

    handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        console.log("form", form);
        fetch('http://localhost:8080/user-info/new', {
            method: 'POST',
            headers: {
                method: 'post',
                headers: {
                    'Accept': 'multipart/form-data, application/json, text/plain, */*',
                    'Content-Type': 'multipart/form-data'
                },
                body: JSON.stringify({form: form})
            },
            body: form,
            mode: 'no-cors'
        });
    }

    render() {
        return (
            <Container>
                <Row>
                <Col>
            <Form onSubmit={this.handleSubmit} onChange={this.myChangeHandler}>
                {/*todo use actual userId*/}
                <Form.Group disabled controlId="formUserId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control name="userId" type="number" value="2"/>
                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="input" placeholder="Name"/>
                </Form.Group>

                <Form.Group controlId="formSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control name="surname" type="input" placeholder="Surname"/>
                </Form.Group>

                <Form.Group controlId="formPersonalNumber">
                    <Form.Label>Personal Number</Form.Label>
                    <Form.Control name="personalNumber" type="input" placeholder="Your personal number (optional)"/>
                </Form.Group>

                <Form.Group controlId="formBusinessLicenceNo">
                    <Form.Label>Business Licence No.</Form.Label>
                    <Form.Control name="businessLicenceNo" type="input" placeholder="Your business licence number"/>
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" type="input" placeholder="Your address"/>
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
                    <Form.Control name="bankAccount" type="input" placeholder="Your bank account number"/>
                </Form.Group>

                <Form.Group controlId="formBank">
                    <Form.Label>Bank</Form.Label>
                    <Form.Control name="bank" type="input" placeholder="Bank"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NewUserInfo);