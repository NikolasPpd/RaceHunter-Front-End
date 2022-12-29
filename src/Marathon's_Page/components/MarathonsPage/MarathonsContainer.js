import React from 'react'
import * as ReactDOM from 'react-dom';
import Navbar from '../NavBar/Navbar'
import Filters from './Filters/Filts/Filters'
import Ground from "../MarathonsPage/Filters/Ground/Ground"
import MarathonType from "../MarathonsPage/Filters/MarathonsType/MarathonType"
import RaceAmenities from "../MarathonsPage/Filters/RaceAmenities/RaceAmenities"
import Api from "./Api"
import Footer from "../Footer/Footer"


export default function Mars(){

    return (
        <div>
          <Navbar/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='marathons-cont'>
          {/* Ολα αυτα πρέπει να γινουν ένα component */}
            <div className='filts'> 
              <Filters/>
              <hr></hr>
              <MarathonType/>
              <hr></hr>
              <Ground/>
              <hr></hr>
              <RaceAmenities/>
              <hr></hr>
            </div>
          {/* Ως εδω */}
          <div className='marathonsPageCont'>
            <Api/>
          </div>
            </div>
            <Footer/>
        </div>
    )
}