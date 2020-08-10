import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../styles/App.css';
import {Button, Col, Container, Row, Table} from 'react-bootstrap';
import {TableHeader, TableBody} from '../../components/customer/Customer.js';


// todo use userId
const NewCustomerButton = withRouter(({ history }) => (
    <Button
        onClick={() => { history.push('customers/new') }}
    >
        Create New Customer
    </Button>
));

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerData: []
        };
        this.state = {
            isChecked: false,
          };
        }

    componentDidMount() {
        const url = 'http://localhost:8080/customers';

        console.log("Fetching " + url);
        console.log("is checked? " + this.state.isChecked)
        fetch(url)
            .then(result => result.json())
            .then(json => {
                this.setState({
                    customerData: json,
                })
            });

        console.log(this.state.customerData)
    }

    removeCustomer = index => {
        const {customerData} = this.state;

        this.setState({
            customerData: customerData.filter((customer, i) => {
                return i !== index;
            })
        })
    };

    render() {
        console.log(this.state.isChecked)
        return (
            <Container>
            <Row>
                <Col>
                    <NewCustomerButton userId={2} variant={"success"}>
                        Create New
                    </NewCustomerButton>
                </Col>
            </Row>
            <br/>
            <Row>
            <Table striped bordered hover>
                        <TableHeader/>
                        <TableBody customerData={this.state.customerData}
                                   removeCustomer={this.removeCustomer}
                                   checked={this.state.isChecked}
                                   toggleChange={this.toggleChange}
                                   />
                    </Table>
            </Row>
        </Container>
        )
    }
}

export default Customers;