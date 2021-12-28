import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';
import { Carousel } from "components/Carousel";

const NFTCards = () => {
    return (
        <NFTCardsSection id="nft">
            <NFTTitle>
                <img src="/images/landing/NFT Cards.png" alt='' />
            </NFTTitle>
            <GeneralCards>
                <Carousel style={{margin: 'auto', backgroundColor : 'transparent'}}>
                    <Box style={{flex : 2}}> <img src="/images/landing/Unicorn1.png" style={{width : '100%'}}/></Box>
                    <Box style={{flex : 2}}> <img src="/images/landing/Assasin1.png" style={{width : '100%'}}/></Box>
                    <Box style={{flex : 2}}> <img src="/images/landing/Samurai1.png" style={{width : '100%'}}/></Box>
                    <Box style={{flex : 2}}> <img src="/images/landing/Witch1.png" style={{width : '100%'}}/></Box>
                    <Box style={{flex : 2}} > <img src="/images/landing/Musician1.png" style={{width : '100%'}}/></Box>
                </Carousel>
            </GeneralCards>
        </NFTCardsSection>
    )
};

const NFTCardsSection = styled(Box)`
    background-image : url('/images/landing/NFTCardsBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    // width : ${window.innerWidth}px;
    height : 960px;
    * { box-sizing: border-box; }

    body { font-family: sans-serif; }
    
`
const NFTTitle = styled(Box)`
    background-image : url('/images/landing/NTFTitleBg.png') ; 
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
const GeneralCards = styled(Box)`
    display : flex ;
    flex-direction : row ;
    // color : white ;
    margin : 0px 20px 0px 20px;
    margin-top : 150px;
`

const Unicorn = styled(Box)`
    height : 400px;
    width : 300px;
    
`
export default NFTCards;

