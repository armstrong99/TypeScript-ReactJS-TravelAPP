import React, {useEffect, useState} from 'react';
import { TravelApp } from '../Func/travelApp';
import styled from 'styled-components'

const RIGHT = styled.span`
padding: .5rem;
    background: red;
    align-self: center;
    width: 2rem;
    text-align: center;
    border-radius: 5rem;
    color: white;
`

const LEFT = styled.span`
align-self: center;
font-size: 1.45rem;
/* border-color: blue; */
border: 1px solid #6d6666;
border-radius: 50%;
padding: .2rem;
outline: none;
color: #807878;
margin-right: 1rem;
`
// feature: 17 - Typescript Interfaces

export interface WallProps {
  }

 
const Wall: React.SFC<WallProps> = () => {
  const [arrT, setAT] = useState([])
  
useEffect(() => {
  let arr =  TravelApp.getAllTravels()
  console.log(arr)
  if (arr.length > 0) setAT(arr)
  else window.location.assign('/')
  }, [])
 return ( 
  <>
   {
       arrT.map(({stL, endL, cost}, i) => (
      <>
            <header key={i} style={{ display: 'flex', justifyContent: 'space-around', flexFlow:'column' }}>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63603.00843855089!2d6.9834790621713845!3d4.908178855527527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x1069d2767485cd77%3A0x989b916697bb73f1!2sEliozu%20Rd%2C%20Port%20Harcourt!3m2!1d4.867335199999999!2d7.0283206!4m5!1s0x1069d41bf0bdae55%3A0x935a8b6fb1dba627!2sRumuodara!3m2!1d4.956368599999999!2d7.013557!5e0!3m2!1sen!2sng!4v1593898651007!5m2!1sen!2sng" 
          title='google maps'
          width='fit-content'
          height='250'
          frameBorder='0'
          style={{ border: '0' }}
          allowFullScreen={false}
          aria-hidden = 'false'
        
        ></iframe>
        <section style={{display:'flex'}}>
          <LEFT>

        <i className="fas fa-running"></i> 
          </LEFT>

        <article style={{fontSize:'x-large', fontWeight:'bolder', color:'white'}}>
          <h3>{stL} Ride to</h3>
         <p>{endL}, - @ N{cost}  </p>
        </article>
        </section>
        <RIGHT>

        <i className="fas fa-biking" style={{marginLeft: 'auto'}}></i>
        </RIGHT>

      </header>
      <hr />
      </>
        )
       
       )
     }
     </> 
  );
 }
 
export default Wall;