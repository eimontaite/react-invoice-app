import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../styles/App.css';

const customer = "customer";

class Customer extends Component {
    render() {
        return (
            <div>{customer}</div>
        )
    }
}

export default Customer;