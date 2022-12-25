import React from 'react'
import * as ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Filters from './Filters'
import Ground from './Ground'
import MarathonType from './MarathonType'
import RaceAmenities from './RaceAmenities'
import Api from './Api'

export default function Mars(){

    return (
        <div>
          <Navbar/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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
            <Api/>
        </div>
    )
}