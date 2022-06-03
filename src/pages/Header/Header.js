import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Navbar, Button, FormControl } from 'react-bootstrap';
import mySvg from '../../img/logo-pet-shop.svg';
import './Header.scss';

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
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="/pats-and-products">Ljubimci</Nav.Link>
                      <Form className="d-flex">
                        <FormControl
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
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


