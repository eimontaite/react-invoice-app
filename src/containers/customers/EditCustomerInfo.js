import React from "react";
import {withRouter} from "react-router-dom";
import CustomerEditInfoForm from '../../components/customer/CustomerEditInfoForm.js';
import {Container, Col, Row, Form, Button} from "react-bootstrap";

class EditCustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            isChecked: false,
            customerData: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let url;
        console.log("id", this.props.match.params.customerId)
        if (this.props.match.params.customerId !== undefined) {
            url = 'http://localhost:8080/customers/' + this.props.match.params.customerId;
        } else {
            url = 'http://localhost:8080/customers'
        }
        console.log("url", url)
            fetch(url)
            .then(result => result.json())
            .then(json => {
                console.log("json", json);
                this.setState({
                    customerData: json,
                    isChecked: json.legalEntity
                });
            });
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
        const url = 'http://localhost:8080/customers/update/' + this.props.match.params.customerId;


        fetch(url, {
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
        console.log("customerData",  this.state.customerData)
        console.log("is checked", this.state.isChecked);
        return (
            <Container>
                <Row>
                <Col>
            <CustomerEditInfoForm data={this.state.customerData}
                                  onSubmit={this.handleSubmit} 
                                  onChange={this.myChangeHandler} 
                                  checked={this.state.isChecked} 
                                  onCheckboxChange={this.toggleChange}/>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(EditCustomerInfo);