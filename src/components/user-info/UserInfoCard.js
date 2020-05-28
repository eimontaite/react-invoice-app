import React, {useState} from 'react';
import '../../styles/App.css';
import {Accordion, Button, ButtonGroup, Collapse, Card} from 'react-bootstrap';
import Moment from "react-moment";

const UserInfoCard = props => {
    const [open, setOpen] = useState(false);

    const userInfoCards = props.userInfo && props.userInfo.map((card, index) => {
        return (
            <Accordion>
                <Card style={{ width: '50%' }} bg={"light"}>
                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                            {card.name} {card.surname}, address: {card.address}
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                    <Card.Body>
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
                        <Button variant="info">Edit</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
    );
    return <div>{userInfoCards}</div>
};

export {UserInfoCard};