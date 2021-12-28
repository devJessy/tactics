import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';

const Feature = () => {
    return (
        <FeatureSection>
            <FeatureTitle>
                <img src="/images/landing/Feature.png" alt='' />
            </FeatureTitle>
            <FeatureContent>
                <Section>
                    <DescribeBox>
                        <OwerBox />
                        <DuelBox />
                    </DescribeBox>
                    <ContentImgBox>
                        <img src="/images/landing/Priest.png" alt =""/>
                    </ContentImgBox>
                </Section>
                <Section>
                    <ContentImgBox>
                        <img src="/images/landing/Naga.png" alt =""/>
                    </ContentImgBox>
                    <DescribeBox>
                        <MarketBox />
                        <ChestBox />
                    </DescribeBox>
                </Section>
            </FeatureContent>
        </FeatureSection>
    )
};

const FeatureSection = styled(Box)`
    background-color : #1A1A1A;
    // height : 1763px;
    padding-top : 50px; 
    padding-bottom : 50px; 
`

const FeatureTitle = styled(Box)`
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
        margin-bottom: 14px !important;
    }
`

const FeatureContent = styled(Box)`
    display : flex ;
    flex-direction : column;
    width : 100%;
    margin : auto;
    @media screen and (min-width : 980px){
        width : 980px;
    }
    >div:first-of-type {
        flex-direction : column-reverse;
        @media screen and (min-width : 980px){
            flex-direction : row ;
        }
    }
`

const DescribeBox = styled(Box)`
    display : flex ;
    flex-direction : column ;
`

const OwerBox = styled(Box)`
    display : flex ;
    background-image : url('/images/landing/ower.png') ;  ;
    background-size : 100% 100%;
    font-family : LHF Uncial Caps;
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 50px;
    color : white ;
    width : 472px; 
    height : 340px;

`

const DuelBox = styled(Box)`
    display : flex ;
    background-image : url('/images/landing/Duel.png') ;  ;
    background-size : 100% 100%;
    font-family : LHF Uncial Caps;
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 10px;
    color : white ;
    width : 472px; 
    height : 340px;
`


const MarketBox = styled(Box)`
    display : flex ;
    background-image : url('/images/landing/Market.png') ;  ;
    background-size : 100% 100%;
    font-family : LHF Uncial Caps;
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 50px;
    color : white ;
    width : 472px; 
    height : 340px;

`

const ChestBox = styled(Box)`
    display : flex ;
    background-image : url('/images/landing/Chest.png') ;  ;
    background-size : 100% 100%;
    font-family : LHF Uncial Caps;
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 10px;
    color : white ;
    width : 100%; 
    height : 340px;
`

const ContentImgBox = styled(Box)`
    margin-top : 69.28px;
    >img {
        transform : scale(0.7);
        @media screen and (min-width : 450px){
            transform : scale(1);
            width : 471px;
            height : 683px;
        }
    }
`

const Section = styled(Box)`
    display : flex ;
    flex-direction : column;
    align-items: center;
    @media screen and (min-width : 980px){
        flex-direction : row;
    }
`



export default Feature;

