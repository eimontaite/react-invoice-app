import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import Home from '../home/Home';
import Customers from '../../containers/customers/Customers';
import Invoices from '../../containers/invoices/Invoices';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar>
                        <Navbar.Brand as={Link} to="/">Invoices App</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                                <NavItem eventkey={1} href="/">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                </NavItem>
                                <NavItem eventkey={2} href="/customers">
                                    <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                                </NavItem>
                                <NavItem eventkey={3} href="/invoices">
                                    <Nav.Link as={Link} to="/invoices">All Invoices</Nav.Link>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path="/customers" component={Customers}/>
                        <Route exact path="/invoices" component={Invoices} />
                        <Route exact path="/invoices/:customerId" component={Invoices} />
                        <Route render={function () {
                            return <p>Not found</p>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Header;