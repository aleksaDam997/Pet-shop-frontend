import React from 'react'
import './ThreeImg.css';
import image1 from '../img/pet-klub.jpg';
import image2 from '../img/moj-ljubimac.jpg';
import image3 from '../img/veterinar.jpg';


const ThreeImg = () => {
  return (
   <div className='three-img'>
       <a href='/pet-klub' className="link"><img src={image1} alt='klub'/></a>
       <a href='/ljubimac' className="link"><img src={image2} alt='ljubimac'/></a>
       <a href='mailto:veterinar@pet-centar.rs?subject=Pitanje za veterinara' className="link"><img src={image3} alt='veterinar'/></a>
   </div>
  )
}

export default ThreeImg;
