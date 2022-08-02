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
import Chart from "react-apexcharts";

export default class AdministratorDashboardPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
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
             <h2 className="text-secondary"> <i class="bi bi-pencil-square"></i> &emsp; Upravljanje porudžbama korisnika </h2>
          </div>
            <Table className='text-center'>
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
                  <th>

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
                      {
                      new Date(order.createdAt).getDate()
                      }.
                      {
                      new Date(order.createdAt).getDay()
                      }.
                      {
                      new Date(order.createdAt).getFullYear()
                      } 
{/* &emsp; */}
                    </td>
                    <td>
                      <select class={`form-select text-light ${order.status === "PENDING" ? 'bg-info' : ""} ${order.status === "ACCEPTED" ? 'bg-warning' : ""} ${order.status === "REJECTED" ? 'bg-danger' : ""} ${order.status === "SHIPPED" ? 'bg-success' : ""}`} aria-label="Default select example" onChange={(e) => this.statusChanged(order.userOrderId, e)}>
                        <option value="PENDING" selected={order.status === "PENDING" ? true : false}>Neriješen</option>
                        <option value="ACCEPTED" selected={order.status === "ACCEPTED" ? true : false}>Prihvaćen</option>
                        <option value="REJECTED" selected={order.status === "REJECTED" ? true : false}>Odbijen</option>
                        <option value="SHIPPED" selected={order.status === "SHIPPED" ? true : false}>Isporučeno</option>
                      </select>
                    </td>
                    <td class="d-flex justify-content status collapsed" data-bs-target={`#dodaj_tr_${order.userOrderId}`} data-bs-toggle="collapse" href="#">
                        <i class="bi bi-chevron-down ms-auto btn btn-warning"></i>
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
            <br />

            <h6 className="text-center">Admin panel</h6>
            <hr />
            <div className="mixed-chart d-flex justify-content-center">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
            </div>                
          </Col>
        </Row>
      </Container>
    )
  }

  statusChanged(orderId, e) {

    api.apiToken("api/admin/change/status/order/" + orderId, "put", {
      status: e.target.value
    }).then(res => {
      console.log(res.data);
    });

    this.getOrders();

  }
}
