import React, {Component} from 'react';
import '../../styles/App.css';
import Button from 'react-bootstrap/Button';

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
    const rows = props.customerData && props.customerData.map((row, index) => {
        return (
            <tr onClick={props.handleClick}  key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.code}</td>
                <td>{row.legalEntity}</td>
                <td>
                    <Button onClick={() =>
                        props.displayInvoices(index)
                    }>Display Invoices</Button>
                </td>
                <td>
                    <Button onClick={() =>
                        props.removeCustomer(index)
                    }>Delete</Button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
};

export {TableHeader, TableBody};