import React, { useEffect } from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';

import { easings } from 'react-animation'

import Footer from '../../components/landing/Footer';
import AOS from "aos";

const Landing = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return (
        <TokenomicsSection>
            <ContentSection>
                <AnalysisBox>
                    <TotalBox>
                        <img src="/images/tokenomics/total.png" />
                    </TotalBox>
                    <AllocationBox data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <SummaryBox>
                            <img src="/images/tokenomics/tbl.png" />
                        </SummaryBox>
                        <TokenBox>
                            <img src="/images/tokenomics/Chart.png" />
                        </TokenBox>
                    </AllocationBox>
                </AnalysisBox>
                <Footer />
            </ContentSection>
        </TokenomicsSection>
    )
};


const TokenomicsSection = styled(Box)`
    width : 100%;
    background-image : url('/images/tokenomics/tokenomics.png');
    background-size : 100% auto;
    background-repeat : no-repeat ;
`
const BackImages = styled(Box)`
    width : 100% ;
    height : auto ;
    position : absolute ;
    >img {
        width : 100%;
    }
`

const ContentSection = styled(Box)`
    width : 100% ;
    height : auto ;
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    padding-top : 100px;
    @media screen and (min-width : 600px){
        padding-top : 250px;
    }
    @media screen and (min-width : 980px){
        padding-top : 500px;
    }
`
const AnalysisBox = styled(Box)`
`

const TotalBox = styled(Box)`
    align-items : center;
    width : calc((100% - 50px));
    margin-left : 25px;
    margin-right : 25px;
    max-width : 980px;
    >img {
        width : 100%;
        margin : auto ;
    }
    @media screen and (min-width : 980px){
        width : 100%;
        margin-left : 0px;
        margin-right : 0px ;
    }
`
const AllocationBox = styled(Box)`
    display : flex;
    flex-direction : column ;
    width : 100%;
    max-width : 980px;
    margin-top : 35px ; 
    align-items: center;
    @media screen and (min-width : 980px){
        flex-direction : row ;
    }
`
const SummaryBox = styled(Box)`
    
    width : calc((100% - 50px));
    margin-left : 25px;
    margin-right : 25px;

    max-width : 609px;
    >img  {
        width : 100%;
        
    } 
    @media screen and (min-width : 980px){
        width : calc((100% - 50px) / 2);
        margin-left : 0px;
        margin-right : 0px ;
    }
`
const TokenBox = styled(Box)`
    width : calc((100% - 50px));
    max-width : 609px;
    margin-top : 35px;
    margin-left : 25px;
    margin-right : 25px;
    >img  {
        width : 100%;
    } 
    @media screen and (min-width : 980px){
        margin-top : 0px;
        margin-left : 50px;
        margin-right : 0px ;
        width : calc((100% - 50px) / 2);
    }
`
export default Landing;