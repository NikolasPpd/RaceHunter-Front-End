import React, { useState } from "react";
import "./terrain-filters.css";

// Rename το function και όλες τις σχετικές μεταβλητές σε "TerrainFilters"
export default function Distance(){


 //States for each marathon
 const[asphalt,setasphalt]=useState(0)
 const[mountain,setmountain]=useState(0)
 const[grass,setgrass]=useState(0)
 const[sand,setsand]=useState(0)
 const[multiter,setmultiter]=useState(0)


//Marathon's ground type [Είδος ασφάλτου Μαραθωνίων]
const [GroundTypeData,setGroundTypeData] = useState({asphalt:false,mountain:false,
    grass:false,sand:false,multiter:false})

//Marathon's distance Event Handling
function HandlingGround(event){
    const {name,type,value,checked} = event.target
    setGroundTypeData(GroundData => {
            return{
                ...GroundData ,[name] : type === "checkbox" ? checked : value
            }
    })

}


    return (

      // Γιατί δεν υπάρχει form?
        <div className='groundForm'>
            <p>Έδαφος Διαδρομής</p>
            <ul>
              <li>
              <input
            type = "checkbox"
            id="Asphalt"
            checked = {GroundTypeData.asphalt}
            onChange={HandlingGround}
            name = "asphalt"
          />
          <label>Άσφαλτος ({asphalt})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Mountain"
            checked = {GroundTypeData.mountain}
            onChange={HandlingGround}
            name = "mountain"
          />
          <label>Βουνό ({mountain})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Grass"
            checked = {GroundTypeData.grass}
            onChange={HandlingGround}
            name = "grass"
          />
          <label>Γρασίδι ({grass})</label>
              </li>
              <li>
              <input
            type = "checkbox"
            id="Sand"
            checked = {GroundTypeData.sand}
            onChange={HandlingGround}
            name = "sand"
          />
          <label>Άμμος ({sand})</label> 
              </li>
              <li>
              <input
            type = "checkbox"
            id="Multiterrain"
            checked = {GroundTypeData.multiter}
            onChange={HandlingGround}
            name = "multiter"
          />
          <label>Multi-terrain ({multiter})</label>
              </li>
            </ul>   
        </div>
        
    )
}