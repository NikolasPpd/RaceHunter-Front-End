import React, { useState } from 'react';
import "./filters.css";
import {MdOutlineGpsFixed} from "react-icons/md"
import {RiPlayList2Fill} from "react-icons/ri"

export default function Filters(){


  //Marathon type flters [NearSearch,Sorting]
  const [DataFFiliters , setDataFFiliters] = useState({nearS:false,Sorting:"ascending"})

  //Marathon type Event Handling
  function Handle(event){
    const {name,type,value,checked} = event.target
    setDataFFiliters(FiltersData => {
       return{
         ...FiltersData ,[name] : type === "checkbox" ? checked : value
        }
    })
      
  }



    return (
   <div>    
    <form className='filtersForm'>
           <p>Φίλτρα Αναζήτησης</p>  
           <div className='filterElements'>
            <div className='nearMe'>
            <MdOutlineGpsFixed/>
           <label>Αγώνες Κοντά μου</label>   
           <input
             type = "checkbox"
             id="nearSearch"
             checked = {setDataFFiliters.nearS}
             onChange={Handle}
             name = "nearS"
           />
           </div>
           <div className='list'>
           <RiPlayList2Fill/>
       <select 
           type=""
           id="sort"
           value={setDataFFiliters.sort}
           onChange={Handle}
           name="Sorting"
           >  
         <option value="ascending">Αύξουσα</option>
         <option value="descending">Φθίνουσα</option>
       </select> 
       </div>
       </div>
     </form>
    </div> 
    )
}