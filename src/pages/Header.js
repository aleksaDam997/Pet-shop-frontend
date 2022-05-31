import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import mySvg from '../img/logo-pet-shop.svg';
import * as api from "../api/api";

export default class header extends Component {

    // state = {

    // }

    // constructor() {
    //     state = {
    //         Mote: {
    //             talsi,
    //             pjena
    //         }
    //     }
    // }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/user/get/categories`)
          .then(res => {
     
            console.log(res.data);
          });
      }

  render() {

    const niz = ["Akcija 1", "Akcija 2", "Akcija 3"];

    return (
        <Container>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <a><img src={mySvg} alt='logo'/></a>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="registracija">Registracija</Nav.Link>
                <Nav.Link href="prijava">Prijava</Nav.Link>
                {/* <Nav.Link href="ljubimci">Ljubimci</Nav.Link>
                <Nav.Link href="proizvodi">Proizvodi</Nav.Link> */}
                <NavDropdown title="Kategorije" id="basic-nav-dropdown">
                    {
                        niz.map(clan => {
                            return(
                                <NavDropdown.Item href="#action/3.1">{clan}</NavDropdown.Item>
                            )
                        })
                    }
                
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
       
    )
  }
}

const CustomDiv = styled.div`

    border: 2px solid red;
    backdround-color: black;
    width: 200px;
    height: 100px;

`