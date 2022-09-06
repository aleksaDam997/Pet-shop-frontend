import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Navbar, Button, FormControl } from 'react-bootstrap';
import mySvg from '../../img/logo-pet-shop.svg';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartPage } from '../Cart/Cart';
import { OrderPage } from '../Order/OrderPage';

export default class header extends Component {

    componentDidMount() {

      }

  render() {

    return (
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/">
                    <a><img src={mySvg} alt='logo'/></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/pats-and-products">Ljubimci</Nav.Link>
                      {/* <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link> */}
                      <CartPage />
                      <OrderPage />
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="registracija" className="text-primary">Registracija</Nav.Link>
                  <Nav.Link href="prijava" className="text-primary">Prijava</Nav.Link>
                </Navbar.Collapse>
              </Container>
            </Navbar>       
    )
  }
}


