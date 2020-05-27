import React, {useState} from 'react';
import '../../styles/App.css';
import {Button, ButtonGroup, Collapse, Card} from 'react-bootstrap';

const InvoiceCard = props => {
    const [open, setOpen] = useState(false);

    const rows = props.invoiceData && props.invoiceData.map((row, index) => row.orders.map(order => {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{row.dateTime}</Card.Title>
                    <Card.Text>
                        <p>Item Name: {order.itemName}</p>
                        <p>Order Type: {order.typeId}</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Price: {order.price}</p>
                    </Card.Text>
                    <ButtonGroup>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary">Generate PDF</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
            // <div>
            //     <tr key={index}>
            //         <td>{row.id}</td>
            //         <td>{row.dateTime}</td>
            //         <td>
            //             <Button onClick={() => setOpen(!open)}
            //                     aria-controls="example-collapse-text"
            //                     aria-expanded={open}>
            //                 Display Orders
            //             </Button>
            //         </td>
            //     </tr>
            //     <Collapse in={open}>
            //     <tr key={index}>
            //         <td>{order.id}</td>
            //         <td>{order.typeId}</td>
            //         <td>{order.price}</td>
            //     </tr>
            //     </Collapse>
            //
            // </div>
        )
    })
    );
    return <div>{rows}</div>
};

export {InvoiceCard};