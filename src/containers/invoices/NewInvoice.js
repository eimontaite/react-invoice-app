import React from "react";
import {withRouter} from "react-router-dom";
import InvoiceForm from '../../components/invoice/InvoiceForm';
import {Container, Col, Row, Form, Button} from "react-bootstrap";

class NewUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    };

    handleSubmit(event) {
        console.log("handling submit")
        event.preventDefault();
        const form = new FormData(event.target);
        console.log("form", form);
        fetch('http://localhost:8080/invoice/new', {
            method: 'POST',
            headers: {
                method: 'post',
                body: JSON.stringify({form: form})
            },
            body: form,
            mode: 'no-cors'
        })
            .then(json => {
                this.setState({
                    redirectToReferrer: true,
                })
            });
        this.props.history.push('/invoices')
    }

    render() {
        console.log(this.state.redirectToReferrer)
        return (
            <Container>
                <Row>
                <Col>
            <InvoiceForm onSubmit={this.handleSubmit} onChange={this.myChangeHandler} />
                </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NewUserInfo);