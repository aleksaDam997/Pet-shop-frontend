import React from 'react';
import './Location.css';
import thridImg from '../../img/location/thridImg.jpg'



const ThridLocation = () => {
  return (
    <div className='location'>
    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Autoput%20za%20Novi%20Sad%20124,%2011080%20Zemun&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
    <div className='info'>
        <div className='info-text'>
            <h3 className='main-title'>Pet centar Zemun</h3>
            <h4 className='subtitle'>Prodavnica i veterinarska apoteka</h4>
            <div className='all-info'>
            <h5 className='main-info'>Informacije</h5>
          <ul className='info-lista'>
              <li>Adresa: Autoput za Novi Sad 124, 11080 Zemun (Zemun Park).</li>
              <li>Email: <a href='mailto:info@pet-centar.rs' className='a-link'>info@pet-centar.rs</a></li>
              <li>Tel: <a href='tel:0114240906' className='a-link'>011 / 4240 906</a></li>
                <li>Radno vrijeme:</li>
                  <li>ponedeljak – nedelja 10 – 20 h</li>
          </ul>
          </div>
        </div>
        <div className='info-img'>
        <img src={thridImg} alt='first location' width='350px'></img>
        </div>
    </div>
</div>
  )
}

export default ThridLocation