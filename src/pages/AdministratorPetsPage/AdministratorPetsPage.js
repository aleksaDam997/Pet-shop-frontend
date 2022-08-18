import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import SideMenuComponent from '../../components/SideMenuComponent/SideMenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCat } from '@fortawesome/free-solid-svg-icons';
import * as api from '../../api/api';
import { ApiConfig } from '../../config/ApiConfig';
import './AdministratorDashboardPetPage.css';
import { Link, Navigate } from 'react-router-dom';

export default class AdministratorPetsPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            pets: [],
            addModalVisible: false,
            categories: [],
            selectedCategoryId: 0,
            animals: [],
            selectedAnimalId: 0,
            breeds: [],
            selectedBreedId: 0
        }
        
    }

    componentDidMount() {
        this.getPets();
    }

    async getPets() {
        await api.apiToken("api/admin/get/pet", "get", {}).then(res => {


            this.setState(Object.assign(this.state, {
                pets: res.data
              } 
                ));
            });
    }





  render() {
    return (
    <>
        <Container className="page-height">
            <Row>
            <Col xs="12" md="4" lg="3" style={{borderLeft: "1px solid #dddddd"}}>
                <SideMenuComponent />
            </Col>
            <Col xs="12" md="8" lg="9" className="bg-light">
            <div className="d-block mt-3 text-center mb-3">
                <h2 className="text-secondary"> <i class="bi bi-pencil-square"></i> &emsp; Upravljanje Ljubimcima </h2>
            </div>
            <div className='d-flex justify-content-center'>
                
            </div>
                <Table className='text-center'>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Slika
                        </th>
                        <th>
                            Naziv
                        </th>
                        <th>
                            Pol
                        </th>
                        <th>
                            Rasa
                        </th>
                        <th>
                            Cijena
                        </th>
                        <th>
                            Status
                        </th>
                        <th>

                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.pets.map(pet => {
                            return(
                                <tr>
                                    <td>
                                        {pet.petId}
                                    </td>
                                    <td>
                                        <img className='photo' src={ApiConfig.baseUrl + "resources/pet/" + pet.photos[0].path} />
                                    </td>
                                    <td>
                                        {pet.name}
                                    </td>
                                    <td>
                                        {pet.sex}
                                    </td>
                                    <td>
                                        {pet.breed.name}
                                    </td>
                                    <td>
                                        {pet.vendorPrice} KM
                                    </td>
                                    <td>
                                        {pet.status}
                                    </td>
                                    <td>
                                    <Link to={`/administrator_dashboard/pet/${pet.petId}`} className="btn btn-primary btn-block  btn-sm mt-2"
                                        style={{width: '100%'}}>Izmjeni</Link>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                <Link to="/administrator_dashboard/pet" className="btn btn-primary btn-block  btn-sm mt-2"
                        style={{width: '100%'}}>Dodaj ljubimca</Link>
                </tfoot>
                </Table>    
            </Col>
            </Row>
        </Container>

</>  
    )
  }

}

