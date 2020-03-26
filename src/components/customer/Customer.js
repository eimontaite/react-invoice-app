import React, {Component} from 'react';
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
    const rows = props.customerData && props.customerData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.code}</td>
                <td>{row.legalEntity}</td>
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

class Customer extends Component {
    state = {
        customerData: []
    };

    componentDidMount() {
        const url = 'http://localhost:8080/customers';

        console.log("Fetching " + url);
        fetch(url)
            .then(result => result.json())
            .then(json => {
                this.setState({
                    customerData: json,
                })
            })
    }

    render() {
        const {removeCustomer} = this.props;

        return (
            <Table striped bordered hover>
                <TableHeader/>
                <TableBody customerData={this.state.customerData} removeCustomer={removeCustomer}/>
            </Table>
        )
    }
}

export default Customer;