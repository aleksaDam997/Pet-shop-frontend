import React, { Component } from 'react';
import {Table, Container,  Col, Row} from 'react-bootstrap';
import * as api from '../../api/api';
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideMenuComponent from '../../components/SideMenuComponent/SideMenuComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ApiConfig } from '../../config/ApiConfig';
import "./AdministratorDashboardPage.css";

export default class AdministratorDashboardPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    api.api('api/admin/get/order', 'get', {}).then(res => {
      this.setState(Object.assign(this.state, {
        orders: res.data
      } 
        ));
        console.log(res.data)
    });


  }


  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md="4" lg="3">
            <SideMenuComponent />
          </Col>
          <Col xs="12" md="8" lg="9">
          <div className="d-block mt-3 text-center mb-3">
             <h2 className="text-secondary"> <i class="bi bi-pencil-square"></i> &emsp; Upravljanje porudžbinama korisnika </h2>
          </div>
            <Table>
              <thead>
                <tr>
                  <th>
                    Order id
                  </th>
                  <th>
                    Slika
                  </th>
                  <th>
                    Korisnik
                  </th>
                  <th>
                    Adresa
                  </th>
                  <th>
                    Borj telefona
                  </th>
                  <th>
                    Datum kreiranja porudzbe
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody id="table_of_contents">
              {this.state.orders.map(order => {
                return(
                  <>
                  <tr className='text-secondary'>

                    <td>
                      {order.userOrderId}
                    </td>
                    <td>
                      <img className="photo" src={ApiConfig.baseUrl + 'resources/user/' + order.cart.user.photoPath } />
                    </td>
                    <td>
                      {order.cart.user.firstName} {order.cart.user.lastName}
                    </td>
                    <td>
                      {order.cart.user.address}
                    </td>
                    <td>
                      {order.cart.user.contact}
                    </td>
                    <td>
                      {order.createdAt}
                    </td>
                    <td class="d-flex justify-content status collapsed" data-bs-target={`#dodaj_tr_${order.userOrderId}`} data-bs-toggle="collapse" href="#">
                        <span>{order.status}</span>
                        <i class="bi bi-chevron-down ms-auto"></i>

                    </td>

                  </tr>
                  <tr id={`dodaj_tr_${order.userOrderId}`} className="collapse" data-bs-parent="#table_of_contents">
                    <th>
                      Slika
                    </th>
                    <th>Naziv</th>
                    <th>
                      Količina
                    </th>
                    <th>
                      Cijena
                    </th>
                    </tr>
                  {order.cart.pets.map(pet => {
                    return(
                      <tr id={`dodaj_tr_${order.userOrderId}`} className="collapse" data-bs-parent="#table_of_contents">

                          <td>
                              <img className="photo" src={ApiConfig.baseUrl + 'resources/pet/' + pet.photos[0]?.path } alt={pet.petId} />
                          </td>
                          <td className="text-secondary">
                            {pet.name}
                          </td>
                          <td>
                            {pet.quantity}
                          </td>
                          <td>
                            {(pet.vendorPrice - pet.vendorPrice * pet.discount) * pet.cartQuantity}
                          </td>
                      </tr>
                    );
                  })}

                  </>
                );
              })}
              </tbody>
            </Table>
                            Administrator panel
          </Col>
        </Row>
      </Container>
    )
  }
}
