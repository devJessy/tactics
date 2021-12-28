import React, { Component,useState, useRef }  from 'react';
import { Box } from '@material-ui/core';
import Header from '../../components/layout/Header';
import Landing from '../../components/tokenomics/Landing';

const Tokenomics = () => {
    document.body.style.margin = '0px';
    const linkRef1 = useRef(null);
    const linkRef2 = useRef(null);
    const linkRef3 = useRef(null);

    return (
        <Box style={{backgroundColor : 'black', overflowX: 'hidden'}}>
            <Header />
            <Landing />
        </Box>
    )
}




export default Tokenomics;