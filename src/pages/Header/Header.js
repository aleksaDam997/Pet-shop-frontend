import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import mySvg from '../../img/logo-pet-shop.svg';
import './Header.scss';
import * as api from "../../api/api";

export default class header extends Component {

    componentDidMount() {

      }

  render() {

    const niz = ["Akcija 1", "Akcija 2", "Akcija 3"];

    return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                    <a><img src={mySvg} alt='logo'/></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {/* <Nav.Link href="ljubimci">Ljubimci</Nav.Link>
                        <Nav.Link href="proizvodi">Proizvodi</Nav.Link> */}
                        {/* <NavDropdown title="Kategorije" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="registracija" className="text-secondary">Registracija</Nav.Link>
                  <Nav.Link href="prijava" className="text-secondary">Prijava</Nav.Link>
                </Navbar.Collapse>
                </Container>
            </Navbar>       
    )
  }
}


