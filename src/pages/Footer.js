import React, { Component } from 'react';
import { FaLocationArrow, FaPaw } from 'react-icons/fa';
import { MdLocalPostOffice, MdEmail } from 'react-icons/md';
import { BsInstagram, BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';

import './Footer.css';

export default class footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='item'>
        <h4><span className='footer-title'><FaLocationArrow/></span>Prodavnice</h4>
          <a href='/prva-prodavnica'>Doboj - ul. Svetog Save 26</a>
          <a href='/druga-prodavnica'>Kragujevac - Delta Park, Save Kovačevića 27</a>
          <a href='/treca-prodavnica'>Zemun - Zemun Park, Autoput za Novi Sad 124</a>
        </div>
        <div className='item'>
        <h4><span className='footer-title'><FaPaw/></span>Pet centar</h4>
          <a href='/o-nama'>O nama</a>
          <a href='/pet-klub'>Pet centar klub</a>
          <a href='/pats-and-products'>Ljubimci</a>
        </div>
        <div className='item'>
        <h4><span className='footer-title'><MdLocalPostOffice/></span>Kontakt</h4>
          <a href='https://sr-rs.facebook.com/cvija.rs/' target='_blank'><BsFacebook  className='social-logo'/>Facebook</a>
          <a href='https://www.instagram.com/cvija26/' target='_blank'><BsInstagram className='social-logo'/>Instagram</a>
          <a href='tel:0112123310'><BsFillTelephoneFill/> 011 / 2123 310</a>
          <a href='mailto:info@pet-centar.rs'><MdEmail/> info@pet-centar.rs</a>
        </div>
      </div>
    )
  }
}
