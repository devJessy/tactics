import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import './styles.scss'
import styled from 'styled-components';

const CustomItem = styled((props: any) => (
    <div {...props} />
  ))`
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: ${(props)=>`hsl(280deg, 40%, calc(100% - ${props.offset} * 50%));`};
    border-radius: 1rem;
    color: #9CA3AF;
    text-align: justify;
    transition: all 0.3s ease-out;
`;

const CustomCarouselContainer = styled((props: any) => (
    <div {...props} />
  ))`
    position: absolute;
    // width: 100%;
    /* height: 100%; */
    transform: ${(props)=>`rotateY(calc(${props.offset} * 50deg)) 
        // scale(calc(1 + ${props.abs} * -0.6))
        scale(calc(0.8))
        translateZ(calc(${props.abs} * -50rem))
        translateX(calc(${props.offset} / ${props.abs} * -15rem))`};
    transition: all 0.3s ease-out;
    @media only screen and (max-width: 1350px) {
      transform: ${(props)=>`rotateY(calc(${props.offset} * 50deg)) 
        // scale(calc(1 + ${props.abs} * -0.6))
        scale(calc(0.8))
        translateZ(calc(${props.abs} * -30rem))
        translateX(calc(${props.offset} / ${props.abs} * -7rem))`};
    transition: all 0.3s ease-out;
  }
}
`;

const MAX_VISIBILITY = 3;

export const Card = ({offset, children}: any) => (
  <CustomItem offset={offset}>
    {children}
  </CustomItem>
);

export const Carousel = ({children, className, style}: any) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className={className + ' carousel'} style={{...style, display: 'flex', alignItems: 'center'}}>
      <Button style={active>0 ? { width : '200%', height : '100%' }:{visibility: 'hidden'}} disabled={active<=0} className='nav left' onClick={() => setActive(i => i - 1)}><ArrowBackIos style={{color : 'white'}}/></Button>
      {React.Children.map(children, (child, i) => (
        <CustomCarouselContainer 
          key={i} abs={Math.abs(active - i) / 3} offset={(active - i) / 3}
          style={{
                'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',

            }}
        >
          {child}
        </CustomCarouselContainer>
      ))}
      <Button style={active < count - 1 ?  { width : '200%', height : '100%' }:{visibility: 'hidden'}} disabled={active >= count - 1} className='nav right' onClick={() => setActive(i => i + 1)}><ArrowForwardIos  style={{color : 'white'}}/></Button>
    </div>
  );
};
