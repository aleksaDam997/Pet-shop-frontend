import React, { Component } from 'react';
import { FaLocationArrow, FaPaw } from 'react-icons/fa';
import { MdLocalPostOffice, MdEmail } from 'react-icons/md';
import { BsInstagram, BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

export default class footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <Container className='con'>
        <Row>
        <Col sm={4}>
        <div className='item'>
        <h4><span className='footer-title'><FaLocationArrow/></span>Prodavnice</h4>
        <ul>
          <li><a href='/prva-prodavnica'>Doboj - ul. Svetog Save 26</a></li>
          <li><a href='/druga-prodavnica'>Kragujevac - Delta Park, Save Kovačevića 27</a></li>
          <li><a href='/treca-prodavnica'>Zemun - Zemun Park, Autoput za Novi Sad 124</a></li>
        </ul>
        </div>
        </Col>
        <Col sm={4}>
        <div className='item'>
        <h4><span className='footer-title'><FaPaw/></span>Pet centar</h4>
        <ul>
          <li><a href='/o-nama'>O nama</a></li>
          <li><a href='/pet-klub'>Pet centar klub</a></li>
          <li><a href='/pats-and-products'>Ljubimci</a></li>
        </ul> 
        </div>
        </Col>
        <Col sm={4}>
        <div className='item'>
        <h4><span className='footer-title'><MdLocalPostOffice/></span>Kontakt</h4>
        <ul>
          <li><a href='https://sr-rs.facebook.com/cvija.rs/' target='_blank'><BsFacebook  className='social-logo'/>Facebook</a></li>
          <li><a href='https://www.instagram.com/cvija26/' target='_blank'><BsInstagram className='social-logo'/>Instagram</a></li>
          <li><a href='tel:0112123310'><BsFillTelephoneFill/> 011 / 2123 310</a></li>
          <li><a href='mailto:info@pet-centar.rs'><MdEmail/> info@pet-centar.rs</a></li>
        </ul>   
        </div>
        </Col>
      </Row>
      </Container>
      </div>
    )
  }
}
