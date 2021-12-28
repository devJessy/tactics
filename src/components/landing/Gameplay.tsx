import React from "react";
import styled from "styled-components";
import {Box} from '@material-ui/core';
import { animations } from 'react-animation'

const GamePlay = ({linkRef2}) => {
    const style = {
        animation: animations.fadeIn
    }
    return (
        <GamePlaySection style={style} ref={linkRef2}>
            <Guardian>
                <img src="/images/landing/Guardian.png" alt=''/>
            </Guardian>
            <GPCard>
                <GPTitle>
                    GAMEPLAY
                </GPTitle>
                <GPContent>
                    TACTICS ROYALE is a game which forces players to make hard choices on an even playing field. 
                    <br/><br/>
                    Collect, Upgrade and Draft with a roster of mythical heroes in a round based tactical battle for supremacy. Outwit your opponents and adapt as you go. 
                </GPContent>
            </GPCard>
            
        </GamePlaySection>
    )
};

interface GamePlayprops {
    ref : any
}

const GamePlaySection = styled(Box)<GamePlayprops>`
    background-image : url('/images/landing/GamePlaybg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    // width : ${window.innerWidth}px;
    height : 1312px;
    display : flex;
    flex-direction : column ;
    justify-content: center;
    position : relative ;
`
const GPTitle = styled(Box)`
    font-family: LHF Uncial Caps;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 51px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    padding-top: 39px;

`

const GPContent = styled(Box)`
    font-family: Lancelot;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

    margin-top : 40px;
    padding-left : 10px ;
    padding-right : 10px ;
    width : ${window.innerWidth}px;
    @media screen and (min-width : 900px) {
        font-size: 37px;
        width : 932px;
        padding-left : 83px ;
        padding-right : 54px ;
        margin-top : 85px;
    }
    @media screen and (min-width : 600px) {
        font-size: 30px;
    }
`

const GPCard = styled(Box)`
    display : flex;
    flex-direction : column ;
    background-image : url('/images/landing/Card.png') ; 
    background-size : contain ;
    background-repeat : no-repeat;
    height : 560px ;
    margin-left : auto ;
    margin-right : auto ;
    width : 932px;
    @media screen and (min-width : 900px) {
        width : 932px;
    }
    z-index : 2 ;
    position: absolute;
    top: 350px ;
    left : calc((100% - 932px) / 2);
    align-items : center;

`

const Guardian = styled(Box)`
    position: absolute;
    top: 102px ;
    left : calc((100% - 932px) / 2);
    margin-left: 140px;
    z-index : 1 ;
`

export default GamePlay;