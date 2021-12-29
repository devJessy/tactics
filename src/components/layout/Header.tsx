import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {Box} from '@material-ui/core';
import AOS from "aos";
import { animations } from 'react-animation';

const Landing = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);

    
    const hamburgerstyles = {
        animation: animations.fadeInUp
    }
      
    const [_showNavBar, setShowNavBar] = useState(false);
    const handleNavigate = ( handler ) => {
        handler.current.scrollIntoView({ behavior: 'smooth' });
    }

    const showHamburger = () => {
        if(_showNavBar === false)
        {
            hamburgerLine1.current.style.transform = "translateY(7px) rotate(135deg)";
            hamburgerLine2.current.style.display = "none";
            hamburgerLine3.current.style.transform = "translateY(-7px) rotate(45deg)";
            _closeBtn.current.style.transform = "rotate(0deg)";
            _closeBtn.current.style.opacity = "1";
            _NavBarRef.current.style.animation = animations.fadeIn;
            _NavBarRef.current.style.display = 'block';

        } else {
            hamburgerLine1.current.style.transform = "rotate(-45deg) translate(-7px,-3px)";
            hamburgerLine2.current.style.display = "block";
            hamburgerLine3.current.style.transform = "rotate(-45deg) translate(6px,2px)";
            _closeBtn.current.style.transform = "rotate(-45deg)";
            _closeBtn.current.style.opacity = "0";
            _NavBarRef.current.style.display = 'none';
            
        }
        setShowNavBar(!_showNavBar);
    }

    const hamburgerLine1 = useRef(null);
    const hamburgerLine2 = useRef(null);
    const hamburgerLine3 = useRef(null);
    const _NavBarRef = useRef(null);
    const _closeBtn = useRef(null);
    
    return (
        <Header>
            <Logo>
                <img src="/images/landing/logo.png" alt='' />
            </Logo>
            <NavBar>
                <NavList>
                    <li style={{width : 72 }}><Link to='/#home'>Home</Link></li>
                    <li style={{width : 102 }}><Link to='/#gameplay'>GamePlay</Link></li>
                    <li style={{width : 108 }}><Link to='/#nft'>NFT Cards</Link></li>
                    <li style={{width : 114 }}><Link to="/tokenomics">Tokenomics</Link></li>
                    <li style={{width : 119 }}><Link to="/">Ambassador</Link></li>
                </NavList>
                <HamburgerBtn onClick={() => showHamburger() }>
                    <CloseBox ref={_closeBtn}/>
                    <HamburgerLine1 ref={hamburgerLine1}/>
                    <HamburgerLine2 ref={hamburgerLine2}/>
                    <HamburgerLine3 ref={hamburgerLine3}/>
                </HamburgerBtn>
                
                <HamburgerBox ref={_NavBarRef}>
                        {/* <BackHamBox onClick={showHamburger}>
                        </BackHamBox> */}
                    
                    <NavBarList>
                        <Box height={39}><Link to='/#home'>Home</Link></Box>
                        <Box height={39}><Link to='/#gameplay'>GamePlay</Link></Box>
                        <Box height={39}><Link to='/#nft'>NFT Cards</Link></Box>
                        <Box height={39}><Link to='/tokenomics'>Tokenomics</Link></Box>
                        <Box height={39}><Link to='/'>Ambassador</Link></Box>
                        <NavTitleBox><img src="/images/landing/NavbarPlayer.png" /></NavTitleBox>
                        <OtherBox>
                            <Tokenomics>
                            </Tokenomics>
                            <SocialBox>
                                <Socials></Socials>
                                <OtherSocials></OtherSocials>
                            </SocialBox>
                        </OtherBox>
                    </NavBarList>
                </HamburgerBox>
            </NavBar>
        </Header>
    )
};


const NavBar = styled(Box)`
    // background-image : url('/images/landing/Loading_Bar 2.png');
    // background-size : cover ;
    // background-repeat : no-repeat;
    
`;

const Header = styled(Box)`
    display : flex;
    flex-direction : row;
    width : 90%;
    margin : auto;
    padding-top : 14px ;
    justify-content: space-between ;
    position : fixed ;
    top : 0px;
    left : 50px;
    align-items: center;
    z-index : 9999;
    @media screen and (min-width : 980px) {
        width : 980px;
        left : calc((100% - 980px) / 2);
    }
`;

const Logo = styled(Box)`
    display : flex ;
`

const NavList = styled.ul`
    background-image : url('/images/landing/Loading_Bar 2.png');
    background-size : cover ;
    background-repeat : no-repeat;
    padding-top : 20px;
    cursor : pointer ;
    >li {
        list-style : none ;
        display : inline-block;
        height: 39px;
        position: relative;
        box-sizing: border-box;
        overflow: visible;
        visibility: inherit;
        
        
        >a {
            font-size : 16px;
            font-family : Lancelot ;
            color : white;
            text-decoration: none;
            &:hover {
                color : rgb(243,167,143);
                transition: color .4s ease 0s;
            }
        }
    }
    display : none ;
    @media screen and (min-width : 980px) {
        display : block ;
    }
`;

const HamburgerBtn = styled(Box)`
    height: 26px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    transition: transform .2s ease;
    z-index: 5;
    position: fixed;
    top: 20px;
    right: 12px;
    visibility : show ;
    @media screen and (min-width : 980px){
        visibility : hidden ;
    }
`

interface Line1props {
    ref : any
}

const HamburgerLine1 = styled(Box)<Line1props>`
    transform: rotate(-45deg) translate(-7px,-3px);
    width: 17px;
    transition: transform .2s ease,border-color .2s ease;
    height : 2px;
    border : 1px red solid ;

`

interface Line2props {
    ref : any
}

const HamburgerLine2 = styled(Box)<Line2props>`
    width: 30px;
    transition: opacity .2s ease,transform .2s ease;
    transform: rotate(-45deg);
    height: 2px;
    border : 1px red solid ;
    // background-color: rgba(var(--lineColor,var(--color_2)),var(--alpha-lineColor,1));
    border-radius: 10px;

`

interface Line3props {
    ref : any
}

const HamburgerLine3 = styled(Box)<Line3props>`
    height : 2px;
    border : 1px red solid ;
    transform: rotate(-45deg) translate(6px,2px);
    width: 17px;
    transition: transform .2s ease,border-color .2s ease;
`
interface navbarprops {
    ref : any
}

const HamburgerBox = styled(Box)<navbarprops>`
    position : fixed ;
    top : 0px ;
    right : 0px ;
    width : 238px ;
    height : 100% ;
    background-image : url('/images/landing/mbNavbar.png');
    display : none ;
    transition : ;
    @media screen and (min-width : 980px){
        display : none ;
    }
`

const BackHamBox = styled(Box)`
    z-index : 5 ;
    position : fixed ;
    top : 0px;
    left: 0px;
    width : ${window.innerWidth}px ;
    height : ${window.innerHeight}px;

`
const NavBarList = styled(Box)`
    z-index : 4;
    margin-top : 20px;
    display : flex;
    flex-direction : column ;
    align-items : center ;
    color : white ;
    >div>a {
        text-decoration : none ;
        color : white ;
        font-size : 22px;
    }

`

const NavTitleBox = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top : 20px ;
    >img {
        width : 60%;
    }
`
const OtherBox = styled(Box)`
`
const Tokenomics = styled(Box)`
`
const SocialBox = styled(Box)`
`
const Socials = styled(Box)`
`
const OtherSocials = styled(Box)`
`
interface closeprops {
    ref : any
}
const CloseBox = styled(Box)<closeprops>`
    position: fixed;
    top: 22px;
    right: 13px;
    background-color: white;
    width: 22px;
    height: 22px;
    border-radius: 7px;
    transition-delay : 1s;
    transform: rotate(-45deg);
    opacity : 0;
    transition:opacity, transform .2s ease,border-color .2s ease;
    
`


export default Landing;

