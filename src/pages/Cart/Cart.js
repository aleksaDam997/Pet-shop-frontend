import { faCartArrowDown, faMinusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Form, Modal, Nav, Table } from "react-bootstrap";
import * as api from "../../api/api";

export class CartPage extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            cart: {
            },
            quantity: 0,
            pets: [],
            visible: false,
            message: ''
        }
    }

    componentDidMount(){
        window.addEventListener('cart.update', () => this.updateCart());
        this.updateCart();
    }

    componentWillMount(){
        
        window.removeEventListener('cart.update', () => this.updateCart());
    }

    // componentDidUpdate() {
    //     this.updateCart();
    // }


    setStateCart(newCart){

        let petts = [];

        newCart.pets.map(pet => {
			
            petts.push(
                {
                    petId: pet.petId,
                    name: pet.name,
                    vendorPrice: pet.vendorPrice,
                    retailPrice: pet.retailPrice,
                    discount: pet.discount,
                    age: pet.age,
                    quantity: pet.quantity
                }
            )
        })

        newCart.pets = petts;


        this.setState(Object.assign(this.state, {cart: newCart}));
        this.setState(Object.assign(
            this.state, {
                pets: petts
            }
        ))

    }

    setStateQuantity(newQuantity){
        this.setState(Object.assign(this.state, {quantity: newQuantity}));
    }

    setStateVisible(state){
        this.setState(Object.assign(this.state, {visible: state}));
    }

    setStateMessage(message){
        this.setState(Object.assign(this.state, {
            message: message
        }));
    }

    showCart(){
        this.setStateVisible(true);
    }

    hideCart(){
        this.setStateVisible(false);
        this.setStateMessage('');
    }

    updateCart(){
        api.apiToken('api/user/get/last/active/cart/', 'get', {}).then((res) => {
            if(res.status === 'error' || res.status === 'login'){
                this.setStateQuantity(0);
                this.setStateCart(undefined);
                return;
            }


            this.setStateCart(res.data);

        });
    }

    deleteFromCart(petId){

        api.api("api/user/delete/cartItem/cart/" + this.state.cart.cartId + "/pet/" + petId, "delete", {}).then(res => {
            console.log(res.data);
        })
    }

    makeAnOrder(){
        api.apiToken('api/user/create/order/', 'post', {}).then((res) => {
            if(res.status === 'error' || res.status === 'login'){
                this.setStateQuantity(0);
                this.setStateCart(undefined);
                return;
            }

            this.setStateMessage('Your order has been made.\nCongrats');

            this.setStateCart(undefined);
            this.setStateQuantity(0);
        });
    }
    
    calculateSumm(){
     
        let summ = 0;

        if(typeof this.state.pets == undefined){
            return summ;
        }else{

            this.state.pets?.map(pet => {
                summ += pet.quantity * (pet.vendorPrice - pet.vendorPrice * pet.discount);
            });
        }
        return summ;
    }

    showInTable(){
        return(
            <Table hover size="sm">
                 <thead>
                     <tr>
                         <th className="text-center">Ime</th>
                         <th className="text-center">Starost</th>
                         <th className="text-center">Količina</th>
                         <th className="text-center">Cijena</th>
                         <th className="text-center">Ukupno</th>
                         <th className="text-center"></th>
                     </tr>
                 </thead>
                 <tbody>
                    {
                        this.state.pets.map(pet => {
                            return(
                                <tr>
                                    <td className="text-center">
                                        {pet.name}
                                    </td>
                                    <td className="text-center">
                                        {pet.age} mjeseca
                                    </td>
                                    <td><Form.Control type="number" data-pet-id={pet.petId} value={Number(pet.quantity)}
                                 min="1" step="1" onChange={(e) => this.updateQuantity(e)} className="text-center"></Form.Control></td>
                                    <td className="text-center">
                                        {pet.vendorPrice - pet.vendorPrice * pet.discount} KM
                                    </td>
                                    <td className="text-center">
                                        {
                                            pet.quantity * (pet.vendorPrice - pet.vendorPrice * pet.discount)
                                        } KM
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => this.deleteFromCart(pet.petId)}>Izbrisi</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                 </tbody>
                 <tfoot>
                     <tr>
                         <td>Ukupno: </td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td className="text-right">{Number(this.calculateSumm()).toFixed(2)} KM</td>
                     </tr>
                 </tfoot>
                
            </Table>
        );
    }

    render(){
        return(
            <>
            <Nav.Item>
                <Nav.Link active={false} onClick={() => this.showCart()}>
                    <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon> ({this.getTotalQuantity()})
                </Nav.Link>
            </Nav.Item>
            <Modal size="lg" centered show={this.state.visible} onHide={() => this.hideCart()}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Korpa :)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {this.showInTable()}
                        <Alert variant='success' className={this.state.message ? '': 'd-none'}>{this.state.message}</Alert>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="primary" onClick={() => this.makeAnOrder()} disabled={this.state.cart?.cartItem.length === 0}>Make an order</Button> */}
                    <Button variant="primary" disabled={(this.state.message != '') ? true : false} onClick={() => this.makeAnOrder()} >Poruči</Button>
                </Modal.Footer>
            </Modal>         
            </>
        );
    }



    updateQuantity(e) {

        let index = 0; 

        for(let i = 0; i < this.state.pets.length; i++) {
            if(this.state.pets[i].petId === Number(e.target.dataset.petId)){
                index = i;
            }
        }

        this.setState(
            Object.assign(this.state, Object.assign(this.state.pets[index], {
                quantity: Number(e.target.value)
            }))
        )


        api.apiToken("api/user/edit/cart/" + this.state.cart.cartId + "/pet/" + Number(e.target.dataset.petId), 'put', {
            quantity: this.state.pets.filter(pet => pet.petId === Number(e.target.dataset.petId))[0].quantity
        }).then((res) => {
            if(res.status === 'error' || res.status === 'login'){
                this.setStateQuantity(0);
                this.setStateCart(undefined);
                return;
            }

            console.log(res.data);
        });
    }

    getTotalQuantity() {
        let total = 0;
        this.state.pets?.map(pet => {
            total += pet.quantity;
        });

        return total;
    }
}
