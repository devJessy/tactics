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
    const linkRef1 = useRef(null);
    const linkRef2 = useRef(null);
    const linkRef3 = useRef(null);

    return (
        <Box style={{backgroundColor : 'black', overflowX: 'hidden'}}>
            <Header  linkRef1={linkRef1} linkRef2={linkRef2} linkRef3={linkRef3}/>
            <LandingSection linkRef1={linkRef1}/>
            <GamePlay linkRef2={linkRef2}/>
            <NFTCards linkRef3={linkRef3}/>
            <Feature />
            <RoadMap />
            <BuiltOn />
            <Footer />
        </Box>
    )
}




export default Landing;