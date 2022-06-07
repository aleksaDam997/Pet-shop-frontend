import React, { Component } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { FaPaw } from 'react-icons/fa';
import { MdLocalPostOffice } from 'react-icons/md';
import './Footer.css';

export default class footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='item'>
        <h4 className='icon'><FaLocationArrow/></h4><h4>Prodavnice</h4>
          <a href='#'>Doboj - ul. Svetog Save 26</a>
          <a href='#'>Kragujevac - Delta Park, Save Kovačevića 27</a>
          <a href='#'>Zemun - Zemun Park, Autoput za Novi Sad 124</a>
        </div>
        <div className='item'>
        <h4 className='icon'><FaPaw/></h4><h4>Pet centar</h4>
          <a href='#'>O nama</a>
          <a href='#'>Pet centar klub</a>
          <a href='#'>Proizvodi</a>
        </div>
        <div className='item'>
          <h4 className='icon'><MdLocalPostOffice/></h4><h4>Kontakt</h4>
          <span className='tel'>Tel: 011 / 2123 310</span>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
          <a href='#'>Email: info@pet-centar.rs</a>
        </div>
      </div>
    )
  }
}
