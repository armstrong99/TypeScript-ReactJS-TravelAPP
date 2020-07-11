import React from 'react';
import styledComponentsTS from 'styled-components-ts';
import WallCard from '../Components/WallCard';
import styledComponents from 'styled-components';

interface Land {
  bg: string,

} 

const LandUI = styledComponentsTS<Land>(styledComponents.section)`
position: absolute;
z-index: -4;
background: url(${require('../Asset/images/trav.jpg')}) no-repeat;
background-size: cover;
background-attachment: fixed;
height: 100vh;
width: 100%;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`

interface OverlayI { }
export const OVERLAY = styledComponentsTS<OverlayI>(styledComponents.div)`
border-radius: .5rem;
position: absolute;
background: #000000e3;
opacity: .8;
width: 100%;
height: 100vh;
z-index: -1;
`
interface IAllTravProps {
  
}

export const AllTrav: React.FC<IAllTravProps> = () => {


  return (
    <>
              <LandUI>
        <OVERLAY></OVERLAY>
        <section style={{overflow:'auto'}}>
    <WallCard />      
         
        </section>


</LandUI> 

    </>
  );
};
 