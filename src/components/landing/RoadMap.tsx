import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';

const RoadMap = () => {
    return (
        <RoadMapSection>
            <RoadMapTitle>
                <img src="/images/landing/RoadmapCards.png" alt='' />
            </RoadMapTitle>
            <RoadMapContent>
                <Box style={{flex : 1.6}}/>
                <RoadTurn width="200">
                    <RoadTitle>
                        <Box>
                            <img src="/images/landing/Q4, 2021.png" alt=""/>
                        </Box>
                        <Box>
                            <img src="/images/landing/cup.png" alt=""/>
                        </Box>
                    </RoadTitle>
                    <RoadTask>
                        <p style={{color : '#FEBF00' }}>-Seed Funding</p>
                        <p>-Pvt Sale Round</p>
                        <p>-Strategic Round</p>
                        <p>-Public Sale</p>
                        <p>-IDO’s -Listing</p>
                    </RoadTask>
                </RoadTurn>
                <RoadTurn width="238">
                    <RoadTitle>
                        <Box>
                            <img src="/images/landing/Q4, 2021.png" alt=""/>
                        </Box>
                        <Box>
                            <img src="/images/landing/boss.png" alt=""/>
                        </Box>
                    </RoadTitle>
                    <RoadTask>
                        <p>-Nft Sale</p>
                        <p>-Nft Marketplace Launch</p>
                        <p>-Taro token Staking</p>
                        <p>-Nft Staking</p>
                        <p>-Nft evolution system</p>
                    </RoadTask>
                </RoadTurn>
                <RoadTurn width="215">
                    <RoadTitle>
                        <Box>
                            <img src="/images/landing/Q4, 2021.png" alt=""/>
                        </Box>
                        <Box>
                            <img src="/images/landing/boss.png" alt=""/>
                        </Box>
                    </RoadTitle>
                    <RoadTask>
                        <p>-Alpha Testing</p>
                        <p>-Free2Play & Play2earn Mechanism Testing</p>
                    </RoadTask>
                </RoadTurn>
                <RoadTurn width="250">
                    <RoadTitle>
                        <Box>
                            <img src="/images/landing/Q4, 2021.png" alt=""/>
                        </Box>
                        <Box>
                            <img src="/images/landing/boss.png" alt=""/>
                        </Box>
                    </RoadTitle>
                    <RoadTask>
                         <p>-Contracts Audit</p>
                        <p>-PvE and PvP</p>
                        <p>-Governance System</p>
                    </RoadTask>
                </RoadTurn>
                <Box style={{flex : 1.6}}/>
            </RoadMapContent>
        </RoadMapSection>
    )
};

const RoadMapSection = styled(Box)`
    background-image : url('/images/landing/RoadMapBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    padding-top : 50px;
    // height : 950px;
    
`
const RoadMapTitle = styled(Box)`
    background-image : url('/images/landing/RoadMapTitleBg.png') ; 
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

const RoadMapContent = styled(Box)`
    background-image : url('/images/landing/wave_mb.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin-top : 100px;
    height : auto;
    display : flex ;
    flex-direction : column ;
    // align-items: center;
    @media screen and (max-width : 994px){
        align-items: center;
        background-image : url('/images/landing/wave_mb.png') ; 
        background-size : 100% 100%;
        background-repeat : no-repeat;
        
    }
    @media screen and (min-width : 994px){
        flex-direction : row ;
        // align-items: unset;
        height : 763px;
        background-image : url('/images/landing/wave.png') ;
        background-size : 100% 100%;
        background-repeat : no-repeat;
        margin-top : 401px;
    }
    // width : ;
`

interface RoadTurnProps  {
    width : number
}

const RoadTurn = styled(Box)<RoadTurnProps>`
    display : flex ;
    flex-direction : column ;
    width : ${({ width }) => width }px;
    flex : 2;
    margin-top: 20px;
`

const RoadTitle = styled(Box)`
    display : flex ;
    flex-direction : column ;
    align-items : center ;
`

const RoadTask = styled(Box)`
    // font-family: Lancelot;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    color : white;
    @font-face {
        font-family: 'Lancelot':
        src: local('Lancelot'),
             url('fonts/Lancelot-Regular.ttf') format('truetype');
    }
`


export default RoadMap;
