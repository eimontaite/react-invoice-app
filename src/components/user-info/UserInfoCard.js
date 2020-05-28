import React, {useState} from 'react';
import '../../styles/App.css';
import {Button, ButtonGroup, Collapse, Card} from 'react-bootstrap';
import Moment from "react-moment";

const UserInfoCard = props => {
    const [open, setOpen] = useState(false);

    const userInfoCards = props.userInfo && props.userInfo.map((card, index) => {
        return (
            <Card style={{ width: '50%' }} bg={"light"}>
                <Card.Body>
                    <Card.Title onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                        {card.name} {card.surname}, address: {card.address}
                    </Card.Title>
                    <Collapse in={open}>
                    <Card.Text>
                        <p>Personal Number: {card.personalNumber}</p>
                        <p>Business Licence No.: {card.businessLicenceNo}</p>
                        <p>Email: {card.email}</p>
                        <p>Phone: {card.phone}</p>
                        <p>Bank Account No.: {card.bankAccount}</p>
                        <p>Bank: {card.bank}</p>
                        <p>Created On: { }
                            <Moment format="YYYY-MM-DD HH:mm">
                                {card.createDateTime}
                            </Moment>
                        </p>
                    </Card.Text>
                    </Collapse>
                    <Button variant="info">Edit</Button>
                </Card.Body>
            </Card>
        )
    }
    );
    return <div>{userInfoCards}</div>
};

export {UserInfoCard};