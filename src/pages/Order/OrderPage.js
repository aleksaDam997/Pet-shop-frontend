import { faListAlt, faPen, faPencilAlt, faPenSquare, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Form, Modal, Nav, Table } from "react-bootstrap";
import * as api from "../../api/api";
import { ApiConfig } from '../../config/ApiConfig';

export class OrderPage extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            orders: [],

            visible: false,
            message: ''
        }
    }

    componentDidMount(){
        window.addEventListener('cart.update', () => this.updateCart());
        this.updateOrders();
    }

    componentWillMount(){
        
        window.removeEventListener('cart.update', () => this.updateCart());
    }

    // componentDidUpdate() {
    //     this.updateCart();
    // }


    setStateVisible(state){
        this.setState(Object.assign(this.state, {visible: state}));
    }

    setStateMessage(message){
        this.setState(Object.assign(this.state, {
            message: message
        }));
    }

    showOrders(){
        this.setStateVisible(true);
    }

    hideOrder(){
        this.setStateVisible(false);
        this.setStateMessage('');
    }

    updateOrders(){
        api.apiToken("api/user/get/specific/order", "get", {}).then(res => {
            this.setState(Object.assign(this.state, {
                orders: res.data
              } 
                ));
        })
    }


    showInTable(){
        return(
            <Table className='text-center'>
              <thead>
                <tr>
                  <th>
                    Order id
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
              {this.state.orders?.map(order => {
                return(
                  <>
                  <tr className='text-secondary'>

                    <td>
                      {order.userOrderId}
                    </td>
                    <td>
                      {
                      new Date(order.createdAt).getDate()
                      }.
                      {
                      new Date(order.createdAt).getMonth() + 1
                      }.
                      {
                      new Date(order.createdAt).getFullYear()
                      } 
                    &emsp;
                    {
                    new Date(order.createdAt).getHours()
                    }
                    :
                    {
                        new Date(order.createdAt).getMinutes()
                    }
                    </td>
                    <td>
                      {order.status}
                    </td>
                    <td class="d-flex justify-content status collapsed" data-bs-target={`#dodaj_tr_${order.userOrderId}`} data-bs-toggle="collapse" href="#">
                        <i class="bi bi-chevron-down ms-auto btn btn-primary"></i>
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
                  {order.cart.pets?.map(pet => {
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
        );
    }

    noOrdersRender() {
        return(
            <div>
                <span>
                    Nemate porudžbi za prikazati!
                </span>
            </div>
        );
    }

    render(){
        return(
            <>
            <Nav.Item>
                <Nav.Link active={false} onClick={() => this.showOrders()}>
                    <FontAwesomeIcon icon={faPenToSquare} /> ({this.state.orders.length > 0 ? this.state.orders?.length : 0})
                </Nav.Link>
            </Nav.Item>
            <Modal size="lg" centered show={this.state.visible} onHide={() => this.hideOrder()} >
                <Modal.Header closeButton>
                    <Modal.Title>
                    <FontAwesomeIcon icon={faPenSquare} /> &nbsp; Porudžbe 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {
                            this.state.orders.length > 0 ? this.showInTable() : this.noOrdersRender()
                        }
                        <Alert variant='success' className={this.state.message ? '': 'd-none'}>{this.state.message}</Alert>
                </Modal.Body>
            </Modal>         
            </>
        );
    }



 
}
