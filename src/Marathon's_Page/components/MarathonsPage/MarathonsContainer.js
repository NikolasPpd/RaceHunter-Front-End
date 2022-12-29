import React from 'react';
import * as ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Filters from './Filters/filts/Filters';
import Ground from "./Filters/ground/Ground";
import MarathonType from "./Filters/marathons_type/MarathonType";
import RaceAmenities from "./Filters/race_amenities/RaceAmenities";
import Api from "./Api";
import Footer from "../footer/Footer";


export default function MarathonsContainer(){

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
            </div>
          {/* Ως εδω */}
          <div className='marathons-page-cont'>
            <Api/>
          </div>
            </div>
            <Footer/>
        </div>
    )
}