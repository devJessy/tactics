import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';

import { easings } from 'react-animation'



const Landing = () => {

    return (
        <TokenomicsSection>
            <BackImages src="/images/tokenomics/tokenomics.png"/>
            <img  src="/images/tokenomics/Logo.png"/>
        </TokenomicsSection>
    )
};


const TokenomicsSection = styled(Box)`
    background-color : #1A1A1A;
`
const BackImages = styled.img `
    width : 100% ;

`

export default Landing;