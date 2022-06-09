import React from 'react';
import './Location.css';
import firstImg from '../../img/location/firstImg.jpg'

const FirstLocation = () => {
  return (
    <div className='location'>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=doboj%20svetog%20save%2026&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        <div className='info'>
            <div className='info-text'>
                <h3 className='main-title'>Pet centar Doboj</h3>
                <h4 className='subtitle'>Prodavnica i veterinarska apoteka</h4>
                <div className='all-info'>
                <h5 className='main-info'>Informacije</h5>
              <ul className='info-lista'>
                  <li>Adresa: Ulica Svetog Save 26, 74000 Doboj.</li>
                  <li>Email: <a href='mailto:info@pet-centar.rs' className='a-link'>info@pet-centar.rs</a></li>
                  <li>Tel: <a href='tel:0112123310' className='a-link'>011 / 2123 310</a></li>
                    <li>Radno vrijeme:</li>
                      <li>ponedeljak – subota 9 – 21 h</li>
                      <li>nedelja 9 – 19 h</li>
                  
              </ul>
              </div>
            </div>
            <div className='info-img'>
            <img src={firstImg} alt='first location' width='350px'></img>
            </div>
        </div>
    </div>
  )
}

export default FirstLocation