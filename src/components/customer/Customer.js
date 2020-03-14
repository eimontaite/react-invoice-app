import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../styles/App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Code</th>
            <th>Legal Entity</th>
        </tr>
        </thead>
    )
};

const TableBody = props => {
    const rows = props.customerData.map((row, index) => {
        return (
            <tr key = {index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.code}</td>
                <td>{row.legalEntity}</td>
                <td>
                    <Button onClick = { () =>
                        props.removeCustomer(index)
                    }>Delete</Button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
};

class Customer extends Component {


    render() {
        const {customerData, removeCustomer} = this.props;
        console.log(customerData);

        return (
            <Table striped bordered hover>
                <TableHeader />
                <TableBody customerData = {customerData} removeCustomer = {removeCustomer}/>
            </Table>
        )
    }
}

export default Customer;