import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components';

export interface BtnUI {
  size: number,
  bg?: string,
  border?: string,
  pad: number,
  color: string,
  fs: number,
}
const Btn = styledComponentsTS<BtnUI>(styledComponents.button)`
 width: ${props => props.size}%;
padding: ${props => props.pad}rem;
border: ${props => props.border};
 font-size: ${props => props.fs}rem;
 display: block;
margin-top: 7rem;
 background: #037cf4;
color: #0d0201;
font-size: x-large;
font-family: auto;
border-radius: 3rem;
`


export default Btn