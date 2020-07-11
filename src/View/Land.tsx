import React, { useState } from 'react';
import BtnUI from '../Components/BtnUI'
 import styledComponentsTS from 'styled-components-ts';
 import styledComponents from 'styled-components';
 import {OVERLAY} from './AllTrav'
 import TRAVEL from '../Components/Travel';
 import { TravelApp } from '../Func/travelApp';

interface Land {
  bg: string,

} 

const LandUI = styledComponentsTS<Land>(styledComponents.section)`
background: url(${require('../Asset/images/trav.jpg')}) no-repeat;
background-size: cover;
background-attachment: fixed;
height: 100vh;
width: 100%;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
position: absolute;
z-index: -1;
`

interface showI {
  show: string,
  setShow(): string
}

interface InputI {

}
const INPUT = styledComponentsTS<InputI>(styledComponents.input)`
width: 18rem;
height: 1.7rem;
outline: none;
background: #70809047;
font-size: 1.1rem;
padding: .35rem;
font-weight: normal;
color: red;
font-weight: bold;
font-size: 1.5rem;
padding: 1rem;
`
interface DetailI {

}
const DETAIL = styledComponentsTS<DetailI>(styledComponents.form)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`
interface LabelI {

}
const FOOT = styledComponentsTS<DetailI>(styledComponents.footer)`
    position: absolute;
    text-align: center;
    width: 100%;
    margin: 0 auto 0 auto;
    color: white;
    top: 90%;
    font-size: larger;

`
const LABEL = styledComponentsTS<LabelI>(styledComponents.label)`
color: white;
font-size: x-large;
margin-top: 2rem;
margin-bottom: 1rem;
font-family: monospace;
`
interface ULI {

}
const UL = styledComponentsTS<ULI>(styledComponents.ul)`
     position: absolute;
     width: 100%;
     background: transparent;
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    height: 4%;
    & li:first-child {
    font-size: xx-large;
    margin: .5rem;
    color: white;
    }
`
interface ILandProps {}

const Land: React.FC<ILandProps> = () => {

  const [showB, setShowB] = useState<boolean>(true)
  const [show, setShow] = useState<string>()
  const [stL, setSTL] = useState<string>('')
  const [endL, setENDL] = useState<string>('')
  const [cst, setCST] = useState<number>(0)

  const handleClick = () => { setShow('show'); setShowB(!showB)}

  const handleAddTrip = async () => {

    const nowTravelApp = new TravelApp()
    nowTravelApp.addTravel(stL, endL, cst)
    nowTravelApp.saveTravel()
    
    if(window.confirm(`Your trip was saved successfully \n View all trips now or would you want to add another ?`)) {
      setENDL('')
      setCST(0)
      setSTL('')
    } else {
    window.location.assign('/alltravels');
    }
  }
  return (
    <>
      <nav>
        <UL>

          <li style={!showB ? {display:'none'} : {display:'block'}}
><i className="fa fa-bars" style={{fontSize:"30px"}}></i></li>

          <li>
            <img src={require('../Asset/images/bA.png')} alt='travel app icon' style={{transform:'rotate(45deg)'}}   />
            </li>
        </UL>  
      </nav>
      <main>

          <LandUI>
            <BtnUI 
            width={70} 
            pad={1} 
            border={'none'}
            color={'white'}
            bg={'firebrick'}
            fs={2}
          onClick={handleClick}
          style={!showB ? {display:'none'} : {display:'block'}}
        > Add new Trip </BtnUI>
     
      <OVERLAY/>    
          </LandUI> 
      <TRAVEL show={show}>
            <h3 style={{color:'#ffffff85'}} onClick={() =>{ setShow('po'); setShowB(!showB)}}>Close</h3>
             
            <DETAIL onSubmit={(e:React.FormEvent<HTMLInputElement>) => e.preventDefault()}>
              <LABEL>Your start location</LABEL>
                <INPUT 
                type='text' 
                placeholder='your start location'
                value={stL}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setSTL(e.currentTarget.value)} />
              
              <LABEL>Your end location</LABEL>
                <INPUT 
                type='text' 
                placeholder='your end location'
                value={endL}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setENDL(e.currentTarget.value)} />
              
              <LABEL>Total expenses</LABEL>
                <INPUT 
                type='number' 
                placeholder='total cost budgeted'
                value={cst}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setCST(Number(e.currentTarget.value))} />
               
               
                <br />
                <br />
                <BtnUI 
                width={70} 
                pad={1} 
                border={'none'}
                color={'white'}
                bg={'firebrick'}
                fs={2}
                onClick={handleAddTrip}
                > Add Trip</BtnUI>
                <br />
                <br />
              
              </DETAIL>
             
      </TRAVEL> 
     
      </main>
      <FOOT style={!showB ? {display:'none'} : {display:'block'}}
>
    
        All right reserved {'\u0029'} 2020 - NC Armstrong
        </FOOT>  
      </>
   
    
  );
};

export default Land;
