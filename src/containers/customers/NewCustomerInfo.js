import React from "react";
import {withRouter} from "react-router-dom";
import CustomerInfoForm from '../../components/customer/CustomerInfoForm.js';
import {Container, Col, Row, Form, Button} from "react-bootstrap";

class NewCustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            isChecked: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }

    handleSubmit(event) {
        console.log("handling submit")
        event.preventDefault();
        const form = new FormData(event.target);

        fetch('http://localhost:8080/customers/new', {
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
        // todo use actual userId
        this.props.history.push('/customers')
    }

    render() {
        console.log(this.state.redirectToReferrer)
        return (
            <Container>
                <Row>
                <Col>
            <CustomerInfoForm onSubmit={this.handleSubmit} 
                              onChange={this.myChangeHandler} 
                              checked={this.state.isChecked} 
                              onCheckboxChange={this.toggleChange}/>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NewCustomerInfo);