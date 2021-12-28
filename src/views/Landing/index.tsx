import React, { Component,useState, useRef }  from 'react';
import { Box } from '@material-ui/core';
import LandingSection from '../../components/landing/Landing';
import GamePlay from '../../components/landing/Gameplay';
import Header from '../../components/layout/Header';
import NFTCards from '../../components/landing/NFTCards';
import Feature from '../../components/landing/Feature';
import RoadMap from '../../components/landing/RoadMap';
import BuiltOn from '../../components/landing/BuiltOn';
import Footer from '../../components/landing/Footer';

const Landing = () => {
    document.body.style.margin = '0px';
    
    return (
        <Box style={{backgroundColor : 'black', overflowX: 'hidden'}}>
            <Header/>
            <LandingSection/>
            <GamePlay/>
            <NFTCards/>
            <Feature />
            <RoadMap />
            <BuiltOn />
            <Footer />
        </Box>
    )
}




export default Landing;