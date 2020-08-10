import React, {Component} from 'react';
import '../../styles/App.css';
import Button from 'react-bootstrap/Button';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router-dom";

library.add(faCheck, faTimes);

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

const InvoiceButton = withRouter(({ history, customerId }) => (
    <Button
        onClick={() => { history.push('invoices/' + customerId) }}
    >
        Display Invoices
    </Button>
));


const TableBody = props => {
    const rows = props.customerData && props.customerData.map((row, index) => {
        return (
            <tr key={index} >
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.code}</td>
                <td><FontAwesomeIcon icon={row.legalEntity ? 'check' : 'times'}/></td>
                <td>
                    <InvoiceButton customerId={row.id}/>
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