import React from "react";
import styled from "styled-components";
import {Box, Icon} from '@material-ui/core';

const Footer = () => {
    return (
        <FooterSection>
            <FooterPlayer>
                <img src="/images/landing/FooterPlayer.png" alt="" />
            </FooterPlayer>
            <ContentBox>
                <Box style={{zIndex : 1}}>
                    <img src="/images/landing/Line 2.png"  alt="" />
                </Box>
                <FooterContent>
                    <FooterLogo>
                        <img src="/images/landing/FooterLogo.png" alt="" />
                    </FooterLogo>
                    <FooterDetail>
                        <Box style={{display : 'flex', flexDirection : 'row'}}>
                            <Box style={{display : 'flex', flexDirection : 'column', color : 'white', width : 103}}>
                                <Box>Home</Box>
                                <Box>Game</Box>
                                <Box>NFT Card</Box>
                                <Box>Feature</Box>
                                <Box>Roadmap</Box>
                                <br/>
                                <Box>Socials</Box>
                            </Box>
                            <Box style={{display : 'flex', flexDirection : 'column', color : 'white', marginLeft : 84, width : 154}}>
                                <Box>Tokenomics</Box>
                                <Box>Whitepaper</Box>
                                <Box>Pitchdeck</Box>
                                <br/>
                                <br/>
                                <br/>
                                <Box style={{display : 'flex', flexDirection : 'row'}}>
                                    <Box><Icon/></Box>
                                    <Box><img src="" alt=""/></Box>
                                    <Box><img src="" alt=""/></Box>
                                    <Box><img src="" alt=""/></Box>
                                </Box>
                            </Box>
                        </Box>
                    </FooterDetail>
                </FooterContent>
                <Box style={{marginTop : 24,zIndex : 1}}>
                    <img src="/images/landing/Line 3.png"  alt="" />
                </Box>
                <CopyBox>
                    Copyright©2021 Heroes & Empires. All rights reserved
                </CopyBox>
            </ContentBox>
        </FooterSection>
    )
};

const FooterSection = styled(Box)`
    position : relative ;
    display : flex ;
    flex-direction : column ;
    width : 100% ;
    height : 615px ;
    margin : auto;
    @media screen and (min-width : 1300px){
        width : 1300px ;
    }

`
const FooterContent = styled(Box)`
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    justify-content : flex-end ;
    width : 100% ;
    @media screen and (min-width : 1300px){
        flex-direction : row ;
    }
`

const FooterPlayer = styled(Box)`

    @media screen and (min-width : 1300px){
        position : absolute ;
        top : -30px;
        left : 0px ;
    }
    >img {
        @media screen and (max-width : 520px){
            transform : scale(0.7);
            width : 100%;
        }  
    }
    z-index : 2;
`

const FooterLogo = styled(Box)`
    padding-top : 40px;
`

const FooterDetail = styled(Box)`
    padding-top : 74px;
    margin-left : 140px;
`

const CopyBox = styled(Box)`
    font-family: Lancelot;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    color : white ;
    margin-top : 35px;
`

const ContentBox = styled(Box)`
    @media screen and (min-width : 1300px){
        position : absolute ;
        left : 0 ;
        top : 230px;
    }
    // display : flex ; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default Footer;
