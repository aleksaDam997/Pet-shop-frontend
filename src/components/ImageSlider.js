import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Slider from 'react-slick';

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
                <img src="../img/kanjon.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="../img/pet-klub.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="../img/moj-ljubimac.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="../img/veterinar.jpg" alt="" />
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
        // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        // rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        
        &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8);
        }
    }

`;
