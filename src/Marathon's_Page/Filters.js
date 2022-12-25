import React, { useState } from 'react';


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
    <form>
           <br/> 
           <p>Φίλτρα Αναζήτησης</p>  
           <br/>  
           <label>Αγώνες Κοντά μου</label>   
           <input
             type = "checkbox"
             id="nearSearch"
             checked = {setDataFFiliters.nearS}
             onChange={Handle}
             name = "nearS"
           />
           <br/>
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
     </form>
     <br/> 
    </div> 
    )
}