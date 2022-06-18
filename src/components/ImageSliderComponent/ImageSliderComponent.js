import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Slider from 'react-slick';

function ImageSliderComponent(props) {

    const settings = {
        dots: true,
        Infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }
console.log(props.photoPath)
    return (
        <Carousel {...settings}>
            {props.photos.map(photo => {
                return(
                    <Wrap>
                        <img src={props.photoPath + photo.path} alt={photo.photoId} key={photo.photoId} />
                    </Wrap>
                )
            })}

        </Carousel>
    )
}

export default ImageSliderComponent;

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
        overflow: hidden;
    }

    button {
        z-index: 1;
    }

`;

const Wrap = styled.div`

    height: 400px;
        
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        transition-duration: 300ms;
        
        &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8);
        }
    }

`;
