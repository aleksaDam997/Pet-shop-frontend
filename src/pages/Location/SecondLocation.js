import React from 'react';
import './Location.css';
import secondImg from '../../img/location/secondImg.jpg'


const SecondLocation = () => {
  return (
    <div className='location'>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Save%20Kova%C4%8Devi%C4%87a%2027,%2034000%20Kragujevac%20&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        <div className='info'>
            <div className='info-text'>
                <h3 className='main-title'>Pet centar Kragujevac</h3>
                <h4 className='subtitle'>Prodavnica i veterinarska apoteka</h4>
                <div className='all-info'>
                <h5 className='main-info'>Informacije</h5>
              <ul className='info-lista'>
                  <li>Adresa: Save Kovačevića 27, 34000 Kragujevac (Delta Park).</li>
                  <li>Email: <a href='mailto:info@pet-centar.rs' className='a-link'>info@pet-centar.rs</a></li>
                  <li>Tel: <a href='tel:0346171711' className='a-link'>034 / 617 1711</a></li>
                    <li>Radno vrijeme:</li>
                      <li>ponedeljak – nedelja 9 – 19 h</li>
              </ul>
              </div>
            </div>
            <div className='info-img'>
            <img src={secondImg} alt='first location' width='350px'></img>
            </div>
        </div>
    </div>
  )
}

export default SecondLocation