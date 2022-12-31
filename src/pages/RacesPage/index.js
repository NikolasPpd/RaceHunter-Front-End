import React from "react";
// import * as ReactDOM from 'react-dom';
import Navbar from "../../components/Navbar";
import GeneralFilters from "./Filters/GeneralFilters";
import DistanceFilters from "./Filters/DistanceFilters";
import TerrainFilters from "./Filters/TerrainFilters";
import AmenitiesFilters from "./Filters/AmenitiesFilters";
import Api from "./Api";
import Footer from "../../components/Footer";


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
              <GeneralFilters/>
              <hr></hr>
              <DistanceFilters/>
              <hr></hr>
              <TerrainFilters/>
              <hr></hr>
              <AmenitiesFilters/>
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