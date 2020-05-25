import React, {Component} from 'react';
import '../../styles/App.css';
import Button from 'react-bootstrap/Button';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>ID</th>
            <th>DateTime</th>
        </tr>
        </thead>
    )
};

const TableBody = props => {
    const rows = props.invoiceData && props.invoiceData.map((row, index) => {
        return (
            <tr onClick={props.handleClick}  key={index}>
                <td>{row.id}</td>
                <td>{row.dateTime}</td>
                <td>
                    <Button onClick={() =>
                        props.removeInvoice(index)
                    }>Delete</Button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
};

export {TableHeader, TableBody};