import { faAdd, faAudioDescription, faInfoCircle, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import * as api from '../../api/api';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';

export default function AddPetCategoryModal() {

  const [visibility, setVisibility] = useState(false)

  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const [message, setMessage] = useState("");



  return (
    <>
      <Button className="me-2 select d-block" onClick={() => setVisibility(true)}>Dodaj novu kategoriju</Button>
      <Modal size="lg" centered show={visibility} onHide={() => setVisibility(false)}>
          <Modal.Header closeButton>
              <FontAwesomeIcon icon={faAdd} /> Dodaj kategoriju ljubimaca / proizvoda
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-2">
                <Form.Label htmlFor="name">Naziv: </Form.Label>
                <Form.Control className="text-capitalize" id="name" type="text" value={category.name} onChange={(e) => catFieldChanged("name", e)}></Form.Control>
            </Form.Group>  
            <Form.Group>
                <Form.Label htmlFor="description">Opis: <FontAwesomeIcon icon={faStickyNote} /></Form.Label>
                <Form.Control className="text-center" id="description" type="text" value={category.description} onChange={(e) => catFieldChanged("description", e)}></Form.Control>
            </Form.Group>     
            <Alert id="message" className={message === "" ? "d-none" : "d-block mt-3"}>{message}</Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => saveInDatabase()}>Sačuvaj</Button>
          </Modal.Footer>
      </Modal>
    </>
  );

  function catFieldChanged(field, e){
    setCategory({
      ...category, 
      [field]: e.target.value
    })
  }

  function hideModal() {
    setVisibility(false);
  }

  function showModal() {
    setVisibility(true)

  }

  function saveInDatabase(){
    api.apiToken("api/admin/add/petCategory", "post", {
      name: category.name,
      description: category.description
    }).then(res => {

      if(res.status === "error"){
        const alert = document.getElementById("alert");
        if(alert){
          alert.className = "text-danger";
        }
  
        setMessage("Došlo je do greške, zahtjev nije sačuvan");
      }

      const alert = document.getElementById("alert");
      if(alert){
        alert.className = "text-success";
      }
      
      setMessage("Kategorija je uspješno sačuvana");

    }).catch(err => {

      const alert = document.getElementById("alert");
      if(alert){
        alert.className = "text-danger";
      }

      setMessage("Došlo je do greške, zahtjev nije sačuvan \n" + err);
    });

    setTimeout(() => {
      setMessage("");
      setCategory({
        ...category,
        name: "",
        description: ""
      })
    }, 2000)
  }

}
