import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Customer from  '../../components/customer/Customer.js';
import '../../styles/App.css';

class Customers extends Component {
    state = {
        customerData: [
            {
                id: 1,
                name: 'Imone',
                address: 'Miestelis',
                code: '2e',
                legalEntity: 'true'
            },
            {
                id: 13874,
                name: 'Zmogus',
                address: 'Miestas',
                code: 'sdf4rt4',
                legalEntity: 'false'
            },
        ]
    };

    removeCustomer = index => {
        const { customerData} = this.state;

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
                    <Customer customerData = {this.state.customerData} removeCustomer = {this.removeCustomer} />
                </div>
            </div>
        )
    }
}

export default Customers;