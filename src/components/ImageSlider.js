import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Slider from 'react-slick';

import pocetna from '../img/pet-slider/pocetna.jpg'
import image1 from '../img/pet-slider/2021-10-25-1.jpg'
import image2 from '../img/pet-slider/2021-10-25-2.jpg'
import image3 from '../img/pet-slider/2021-10-25-3.jpg'
import image4 from '../img/pet-slider/2021-10-25-4.jpg'
import image5 from '../img/pet-slider/2021-10-25-5.jpg'
import image6 from '../img/pet-slider/2021-10-25-6.jpg'
import image7 from '../img/pet-slider/2021-10-25-7.jpg'
import image8 from '../img/pet-slider/2021-10-25-8.jpg'

function ImageSlider() {

    let settings = {
        dots: true,
        Infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={pocetna} alt="" />
            </Wrap>
            <Wrap>
                <img src={image1} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image2} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image3} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image4} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image5} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image6} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image7} alt="#" />
            </Wrap>
            <Wrap>
                <img src={image8} alt="#" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;
    
    // overflow-x: scroll;
    // overflow-y: hidden;

    ul li button {
        &:after {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`;

const Wrap = styled.div`

    height: 400px;
    
    cursor: pointer;
    
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 13px 15px -5px,
        rgb(0 0 0 / 73%) 0px 8px 5px -5px;
        transition-duration: 300ms;
        
        &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8);
        }
    }

`;
