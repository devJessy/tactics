import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';

const BuiltOn = () => {
    return (
        <BuiltOnSection>
            <BuiltOnTitle>
                <img src="/images/landing/Built OnCards.png" alt='' />
            </BuiltOnTitle>
            <BuiltOnIndexs>
                <Box>
                    <img src="/images/landing/Unity.png" alt='' />
                </Box>
                <Box>
                    <img src="/images/landing/Solana.png" alt='' />
                </Box>
                <Box>
                    <img src="/images/landing/BSC-Logo.png" alt='' />
                </Box>
                <Box>
                    <img src="/images/landing/Polygon.png" alt='' />
                </Box>
            </BuiltOnIndexs>
        </BuiltOnSection>
    )
};
const BuiltOnSection = styled(Box)`
    // background-color : black;
    margin : 0px ;
    padding : 0px ;
    height : 500px;
    // padding-bottom : 50px; 
    
`
const BuiltOnTitle = styled(Box)`
    background-image : url('/images/landing/BuiltOnTitleBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    width: 100%;
    @media screen and (min-width : 994px){
        width: 993.6px;
    }
    height: 88.72px;
    margin : auto;
    display : flex;
    >img {
        height : 50px ;
        margin : auto ;
        margin-top : 26px;
    }
`

const BuiltOnIndexs = styled(Box)`
    display : flex;
    flex-direction : column ;
    align-items : center ;
    width : 100%;
    margin : auto ;
    margin-top : 105px ;
    justify-content: space-between;
    @media screen and (min-width : 1200px){
        flex-direction : row ;
        width : 1200px;
    }
`

export default BuiltOn;
