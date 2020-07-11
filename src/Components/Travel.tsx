import styledComponentsTS from 'styled-components-ts';
import styledComponents, { keyframes } from 'styled-components';
const carousel = keyframes`
from {
background: white;
position: fixed;
top: 100%;
opacity: 0
}

to {
background: #1d0c0cd4;
top: 0;
transition: 1s;
opacity: 1;

}
`


interface TravelI {
  bg: string,
  show: string,
}
const TRAVEL = styledComponentsTS<TravelI>(styledComponents.section)`
height: 100vh;
width: 100%;
animation ${carousel} 1.5s ease-in-out;
display: ${props => props.show === 'show' ? 'block' : 'none'};
top: 0;
position: fixed;
background: #000000ad;
transition: 5s;
 
  
`


 

export default TRAVEL