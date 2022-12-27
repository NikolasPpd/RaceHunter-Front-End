import React from 'react'
import * as ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Filters from './Filters'
import Ground from './Ground'
import MarathonType from './MarathonType'
import RaceAmenities from './RaceAmenities'
import Api from './Api'
import Footer from './components/Footer';


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
            <Api/>
            </div>
            <Footer/>
        </div>
    )
}