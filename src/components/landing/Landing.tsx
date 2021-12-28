import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';

import { easings } from 'react-animation'



const Landing = ({linkRef1}) => {
   
    const contentStyle = {
        animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
    }
    return (
        <CSoon ref={linkRef1}>
            <ContentBox> 
                <Box style={{...contentStyle ,flex : 5}} >
                    <Box>
                        <img src="/images/landing/Llogo.png" alt='' />
                    </Box>
                    <Box pt="12px" pl="30px">
                        <img src="/images/landing/Coming Soon.png"  alt='' /> 
                    </Box>
                </Box>
                <PlayerBox>
                    <img src="/images/landing/Lplayer.png" alt='' />
                </PlayerBox>
            </ContentBox>
        </CSoon>
    )
};


const ContentBox=styled(Box)`
    display : flex ;
    flex-direction : column-reverse ;
    
    margin : auto ; 
    margin-top: 50px;
    justify-content : center;
    align-items : center;
    @media screen and (min-width : 1300px) {
        flex-direction : row ;
        width : 980px ;
        margin : auto ;
    }
    >div>div:first-of-type{
        >img{
            width : 100%;
        }
    }
    
`;

const PlayerBox = styled(Box)`
    flex : 5 ;
    animation: linear 0.7s 1 ZoomImg;
    transform : scale(1);
    @media screen and (min-width : 1300px) {
        justify-content: flex-end ;
        transform : scale(3);
    }
    width : 100%;
    >img {
        width : 100%;
    }
    @keyframes ZoomImg {
        0% {
            transform : scale(0.1);
        }
        100% {
            transform : scale(1);
            @media screen and (min-width : 1300px) {
                justify-content: flex-end ;
                transform : scale(3);
            }
        }
    }
`;

interface CSoonprops {
    ref : any
}

const CSoon = styled(Box)<CSoonprops>`
    background-image : url('/images/landing/Landing Tab.png');
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    // height : 1580px; 
    @media screen and (min-width : 1300px) {
        height : 1080px ;
    }
    
    display : flex ;
    flex-direction : column ;
`;

export default Landing;