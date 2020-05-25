import React, {Component} from 'react';
import '../../styles/App.css';
import Table from 'react-bootstrap/Table';
import {TableHeader, TableBody} from '../../components/customer/Customer.js';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerData: []
        };
    }

    componentDidMount() {
        const url = 'http://localhost:8080/customers';

        console.log("Fetching " + url);
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
        return (
            <div>
                <div className="container">
                    <Table striped bordered hover>
                        <TableHeader/>
                        <TableBody customerData={this.state.customerData}
                                   removeCustomer={this.removeCustomer}/>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Customers;