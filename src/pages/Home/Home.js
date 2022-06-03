import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import styled from 'styled-components'
import ThreeImg from '../../components/ThreeImg';
import './Home.scss'

const Home = () => {
  return (
    <Container className='bg-light text-danger'>
        <h2 className='title'> NAŠE POSLOVNICE </h2>
        <ImageSlider />
        <h4 className='second-title text-danger'>U ponudi</h4>
        <ThreeImg />

      
    </Container>
  )
}

export default Home;

const Container = styled.div`

    min-height: calc(100vh - 120px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    display: block;
    width: 80%;

    margin: 0 auto;
    
    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

`;