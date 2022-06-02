import React from 'react'
import './Ljubimac.css';

import stene from '../img/psi/stene.jpg'
import junior from '../img/psi/dog-adult1.jpg'
import senior from '../img/psi/dog_senior.jpg'

import macic from '../img/macke/macic_2.jpg'
import macka from '../img/macke/cat2.jpg'

import cincila from '../img/male-zivotinje/cincila.jpg'
import degu from '../img/male-zivotinje/degu.jpg'
import hrcak from '../img/male-zivotinje/hrcak.jpg'
import jez from '../img/male-zivotinje/jez.jpg'
import kunic from '../img/male-zivotinje/kunic.jpg'
import zamorcic from '../img/male-zivotinje/zamorcic.jpg';

import bradataagama from '../img/teraristika/bradataagama.jpg'
import kornjaca_cancara_2 from '../img/teraristika/kornjaca_cancara_2.jpg'
import Kukuruzni_smuk from '../img/teraristika/Kukuruzni_smuk.jpg'
import leopardgeko from '../img/teraristika/leopardgeko.jpg'
import piton_kraljevski from '../img/teraristika/piton_kraljevski.jpg'
import skorpion_crni from '../img/teraristika/skorpion_crni.jpg'
import tarantula_rosea from '../img/teraristika/tarantula_rosea.jpg'
import vodenaagama from '../img/teraristika/vodenaagama.jpg'
import zelena_iguana_4 from '../img/teraristika/zelena_iguana_4.jpg'




const Ljubimac = () => {
  return (
    <div>
        <h2>Moj ljubimac</h2>
        <div className='section'>
        <h3 className='podnaslov'>Psi</h3>
        <div className='items-handler'>
            <div className='item'>
                <a><img src={stene} alt='stene'></img></a>
                <div className='description-img'>
                   <a href='#'>Štene</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={junior} alt='Odrasli'></img></a>
                <div className='description-img'>
                   <a href='#'>Odrasli</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={senior} alt='Senior'></img></a>
                <div className='description-img'>
                   <a  href='#'>Senior</a>
                </div>
            </div>
        </div>
    </div>
    <div className='section'>
        <h3 className='podnaslov'>Mačke</h3>
        <div className='items-handler'>
            <div className='item'>
                <a><img src={macic} alt='macic'></img></a>
                <div className='description-img'>
                   <a href='#'>Mače</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={macka} alt='macka'></img></a>
                <div className='description-img'>
                   <a href='#'>Odrasla Mačka</a>
                </div>
            </div>
        </div>
    </div>
    <div className='section'>
        <h3 className='podnaslov'>Male životinje</h3>
        <div className='items-handler'>
            <div className='item'>
                <a><img src={cincila} alt='cincila'></img></a>
                <div className='description-img'>
                   <a href='#'>Činčila</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={degu} alt='degu'></img></a>
                <div className='description-img'>
                   <a href='#'>Degu</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={hrcak} alt='hrcak'></img></a>
                <div className='description-img'>
                   <a  href='#'>Hrčak</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={jez} alt='jez'></img></a>
                <div className='description-img'>
                   <a  href='#'>Afrički patuljasti jež</a>
                </div>
                </div>
            </div>
            
            <div className='items-handler'>
            <div className='item'>
                <a><img src={kunic} alt='kunic'></img></a>
                <div className='description-img'>
                   <a href='#'>Kunić</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={zamorcic} alt='zamorcic'></img></a>
                <div className='description-img'>
                   <a href='#'>Morsko prase</a>
                </div>
                </div>
                </div>
            </div>
            <div className='section'>
        <h3 className='podnaslov'>Teraristika</h3>
        <div className='items-handler'>
            <div className='item'>
                <a><img src={leopardgeko} alt='bradata agama'></img></a>
                <div className='description-img'>
                   <a href='#'>Leopard gekon</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={bradataagama} alt='degu'></img></a>
                <div className='description-img'>
                   <a href='#'>Bradata agama</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={kornjaca_cancara_2} alt='hrcak'></img></a>
                <div className='description-img'>
                   <a  href='#'>Šumska kornjača</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={piton_kraljevski} alt='jez'></img></a>
                <div className='description-img'>
                   <a  href='#'>Kraljevski piton</a>
                </div>
                </div>
            </div>
            <div className='items-handler'>
            <div className='item'>
                <a><img src={skorpion_crni} alt='kunic'></img></a>
                <div className='description-img'>
                   <a href='#'>Škorpion</a>
                </div>
            </div>
            <div className='item'>
                <a><img src={Kukuruzni_smuk} alt='zamorcic'></img></a>
                <div className='description-img'>
                   <a href='#'>Kukuruzni smuk</a>
                </div>
                </div>
                <div className='item'>
                <a><img src={tarantula_rosea} alt='zamorcic'></img></a>
                <div className='description-img'>
                   <a href='#'>Tarantula- Grammostola rosea</a>
                </div>
                </div>
                <div className='item'>
                <a><img src={vodenaagama} alt='zamorcic'></img></a>
                <div className='description-img'>
                   <a href='#'>Vodena agama</a>
                </div>
                </div>
                </div>
                <div className='items-handler'>
            <div className='item'>
                <a><img src={zelena_iguana_4} alt='kunic'></img></a>
                <div className='description-img'>
                   <a href='#'>Zelena iguana</a>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Ljubimac
