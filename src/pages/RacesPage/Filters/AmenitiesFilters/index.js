import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import "./amenities-filters.css"

// Rename το function και όλες τις σχετικές μεταβλητές σε "AmenitiesFilters"
export default function RaceAmenities(){


 //States for each marathon
 const[troph,settroph]=useState(0)
 const[medals,setmedals]=useState(0)
 const[shirt,setshirt]=useState(0)
 const[results,setresults]=useState(0)
 const[onlinepay,setonlinepay]=useState(0)


//Marathon's race amenities [Παροχές αγώνα Μαραθωνίων]
const [RaceAmenities,setRaceAmenities] = useState({troph:false,medals:false,
    shirt:false,results:false,onlinepay:false})

//Marathon's RaceAmenities Event Handling
function HandlingAmenities(event){
    const {name,type,value,checked} = event.target
    setRaceAmenities(AmenitiesData => {
            return{
                ...AmenitiesData ,[name] : type === "checkbox" ? checked : value
            }
    })

}

    return (

      // Γιατί δεν υπάρχει form?
        <div className='raceAmerForm'>
            <p>Παροχές Αγώνα</p>
            <ul>
              <li>
              <input
            type = "checkbox"
            id="Troph"
            checked = {RaceAmenities.troph}
            onChange={HandlingAmenities}
            name = "troph"
          />
          <label>Τροφοδοσία ({troph})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Medals"
            checked = {RaceAmenities.medals}
            onChange={HandlingAmenities}
            name = "medals"
          />
          <label>Μετάλλια ({medals})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Shirt"
            checked = {RaceAmenities.shirt}
            onChange={HandlingAmenities}
            name = "shirt"
          />
          <label>Μπλούζα ({shirt})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Results"
            checked = {RaceAmenities.results}
            onChange={HandlingAmenities}
            name = "results"
          />
          <label>Αποτελέσματα ({results})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Onlinepay"
            checked = {RaceAmenities.onlinepay}
            onChange={HandlingAmenities}
            name = "onlinepay"
          />
          <label>Online πληρωμή ({onlinepay})</label>
              </li>
            </ul>  
        </div>
    )
}