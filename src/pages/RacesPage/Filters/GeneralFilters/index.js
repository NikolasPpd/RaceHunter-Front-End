import React, { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import "./general-filters.css";
import LocationCheckbox from "../../../../components/LocationCheckbox";

export default function GeneralFilters() {

  //Marathon type flters [NearSearch,Sorting]
  const [generalFilters , setGeneralFilters] = useState({
    nearbyEnabled: false,
    sorting: 'newestFirst'
  });

  function SortingHandler(event){
    const {name, type, value, checked} = event.target
    setGeneralFilters(FiltersData => {
      return{
        ...FiltersData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function LocationHandler(){
    if (generalFilters.nearbyEnabled === true){
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // latitute και longitude του χρήστη για κλήση στο API
    });
    }
  }

  return (
    <div>    
      <form className='filtersForm'>
        <p>Φίλτρα Αναζήτησης</p>
        <div className='filterElements'>
          <LocationCheckbox
            label='Αγώνες κοντά μου'
            initiallyChecked={generalFilters.nearbyEnabled}
            onChange={LocationHandler}
            name='nearbyEnabled'
          />
          <div className='list'>
            <FaSortAmountDown/>
            <select 
              type=""
              id="sort"
              value={generalFilters.sorting}
              onChange={SortingHandler}
              name="sorting"
            >
              <option value="newestFirst">Πρώτα οι νεότεροι</option>
              <option value="oldestFirst">Πρώτα οι παλαιότεροι</option>
            </select> 
          </div>
        </div>
      </form>
    </div> 
  );
}
