import React, { Component } from 'react';
import {Form, Container, Button, Card, Alert, Col} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import * as api from '../../api/api';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import "./LoginPage.scss";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Prijava extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            role: "",
            emailMessage: {
                error: false,
                message: "Neka poruka"
            },
            errorMessage: {
                error: false,
                message: ""
            }
        }

        this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleInputFieldChange(event) {

        this.setState(Object.assign(
            this.state, {
                [event.target.name]: event.target.value
            }
        ))
      }
  
    handleSubmit(e) {
      
        
        api.login({
            email: this.state.email,
            password: this.state.password 
        }).then(res => {

            if(res.data.status === "login") {
                console.log(res.data.message);
                this.setErrorMessage(res.data.message, true);
            }

            this.setState(Object.assign(this.state, 
                {isLoggedIn: true
                }));
            
            if(res.data.role_admin !== undefined && res.data.role_admin === "ADMIN"){
                this.setState(Object.assign(this.state, {
                    role: res.data.role_admin
                }));
            }   else if(res.data.role_user !== undefined && res.data.role_user === "USER"){
                this.setState(Object.assign(this.state, {
                    role: res.data.role_user
                }));
            }

        });
       
        setTimeout(() => {
            this.setErrorMessage("", false);
        }, 2000);

      }

      setErrorMessage(message, state) {
        this.setState(Object.assign(this.state, Object.assign(this.state.errorMessage, {
            error: state,
            message: message
        })))
console.log("cigla")
        console.log(this.state.errorMessage.message);
      }
      
  render() {

    if(this.state.isLoggedIn === true && this.state.role === "USER"){
           return <Navigate to="/" replace={true} />
    }

    if(this.state.isLoggedIn === true && this.state.role === "ADMIN"){
        return <Navigate to="/administrator_dashboard" replace={true} />
 }

    return (
        <LoginContainer className="bg-login">
            <div className="mt-4">
            <Form className="bg-dimmed">
                <div className="mx-4">
                <Naslov className="text-info">
                <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Prijavi se:
                </Naslov>   
                <Form.Group>
                    <Form.Label htmlFor="email">E-mail</Form.Label>
                    <Form.Control name="email" type='email' id='email' aria-describedby="emailHelp" placeholder="Enter email" 
                    value={this.state.email} onChange={(event) => this.handleInputFieldChange(event)}></Form.Control>
                    <small id="emailHelp" className={this.state.emailMessage.error ? 'd-flex' : 'd-none'}>
                        {this.state.emailMessage.message}
                    </small>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control name="password" type='password' placeholder="Password" id='password' value={this.state.password} onChange={(event) => this.handleInputFieldChange(event)}></Form.Control>
                    <small id="passworderror" className="text-danger form-text">
                        {/* {passwordError} */}
                    </small>
                </Form.Group>
                {/* <div className="form-group form-check">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    />
                    <label className="form-check-label">Check me out</label>
                </div> */}
                <Alert id="alert" variant="danger" className={this.state.errorMessage.error ? "" : "d-none"}>{this.state.errorMessage.message}</Alert>
                <Form.Group>
                    <Button variant="primary" onClick={() => this.handleSubmit()}>Log in</Button>
                </Form.Group>
                </div>
            </Form>
            
            </div>
        </LoginContainer>

    )
  }
}

const LoginContainer = styled(Container)`
    margin-top: 0px;
    padding-top: 1px;
    height: calc(100vh - 200px);
`

const Naslov = styled.div`
    margin-top: 40px;
    font-size: 26px;
`;