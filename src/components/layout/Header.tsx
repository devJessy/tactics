import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {Box} from '@material-ui/core';

const Landing = ({ linkRef1, linkRef2, linkRef3}) => {

    const handleNavigate = ( handler ) => {
        handler.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <Header>
            <Logo>
                <img src="/images/landing/logo.png" alt='' />
            </Logo>
            <NavBar>
                <NavList>
                    <li style={{width : 72 }}><Link onClick={() => handleNavigate(linkRef1)} to='/'>Home</Link></li>
                    <li style={{width : 102 }}><Link onClick={() => handleNavigate(linkRef2)} to='/'>GamePlay</Link></li>
                    <li style={{width : 108 }}><Link onClick={() => handleNavigate(linkRef3)} to='/'>NFT Cards</Link></li>
                    <li style={{width : 114 }}><Link to="/tokenomics">Tokenomics</Link></li>
                    <li style={{width : 119 }}><Link to="/">Ambassador</Link></li>
                </NavList>
            </NavBar>
        </Header>
    )
};


const NavBar = styled(Box)`
    // background-image : url('/images/landing/Loading_Bar 2.png');
    // background-size : cover ;
    // background-repeat : no-repeat;
    display : none ;
    @media screen and (min-width : 980px) {
        display : block ;
    }
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
`;


export default Landing;

