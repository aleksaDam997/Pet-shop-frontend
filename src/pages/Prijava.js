import React, { Component } from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import * as api from '../api/api';

export default class Prijava extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            message: ""
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value}
            );
      }
  
    handleSubmit(e) {

        e.preventDefault()

          const body = {
              email: this.state.email,
              password: this.state.password
          }
  
          api.login(body).then(res => {
              
            this.setState(
                Object.assign(this.state, {
                    isLoggedIn: true
                })
            )
            console.log(this.state.isLoggedId);
          }).catch(err => {

            this.setState({
                message: err
            });
          });
      }
      
    handleEmailChange(event) {
        this.setState(
            {
                email: event.target.value
            }
            );
      }
  render() {

    if(this.state.isLoggedId){
            console.log("Aktivirano");
        return(
            <Navigate to="/" />
        );
    }

    return (
        <Container>

            <h2>
                Prijava korisnika
            </h2>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </Container>
    )
  }
}
