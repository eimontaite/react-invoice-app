import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Customer from  '../../components/customer/Customer.js';
import '../../styles/App.css';

class Customers extends Component {
    render() {
        return (
            <div>
                {Customer}
            </div>
        )
    }
}

export default Customers;