import React, { useState } from 'react';
import './amenities-filters.css'
import CustomCheckbox from '../../../../components/CustomCheckbox';

// Rename το function και όλες τις σχετικές μεταβλητές σε "AmenitiesFilters"
export default function AmenitiesFilters(){
  
  //Race amenities
  const [raceAmenities,setRaceAmenities] = useState({
    troph:false,
    medals:false,
    shirt:false,
    results:false,
    onlinePayment:false
  });

  //Number of results for each race category
  const[aidStationResultsCount,setAidStationResultsCount] = useState(0)
  const[medalResultsCount,setMedalResultsCount] = useState(0)
  const[shirtResultsCount,setShirtResultsCount] = useState(0)
  const[resultsResultsCount,setResultsResultsCount] = useState(0)
  const[onlinePaymentResultsCount,setOnlinePaymentResultsCount] = useState(0)

  const Handling = (name) => {
    const checked = !raceAmenities[name];
    setRaceAmenities(raceAmenities => ({
      ...raceAmenities,
      [name] : checked
    }));
  };

  return (
    <div>
        <form className='race-amenities-form'>
            <p>Μήκος Διαδρομής</p>
            <div className='race-amenities-elements'>
              <CustomCheckbox
                label='Τροφοδοσία'
                count={aidStationResultsCount}
                initiallyChecked={raceAmenities.aidStation}
                onChange={Handling}
                name='aidStation'
              />
              <CustomCheckbox
                label='Μετάλλια'
                count={medalResultsCount}
                initiallyChecked={raceAmenities.medals}
                onChange={Handling}
                name='medals'
              />
              <CustomCheckbox
                label='Μπλούζα'
                count={shirtResultsCount}
                initiallyChecked={raceAmenities.shirt}
                onChange={Handling}
                name='shirt'
              />
              <CustomCheckbox
                label='Αποτελέσματα'
                count={resultsResultsCount}
                initiallyChecked={raceAmenities.results}
                onChange={Handling}
                name='results'
              />
              <CustomCheckbox
                label='Online πληρωμή'
                count={onlinePaymentResultsCount}
                initiallyChecked={raceAmenities.onlinePayment}
                onChange={Handling}
                name='onlinePayment'
              />
            </div>
        </form>
    </div>
  );
}