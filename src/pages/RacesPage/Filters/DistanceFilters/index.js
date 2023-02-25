import React, { useState } from 'react';
import './distance-filters.css';
import CustomCheckbox from '../../../../components/CustomCheckbox';

// Rename το function και όλες τις σχετικές μεταβλητές σε "DistanceFilters"
export default function DistanceFilters() {

  //Race distances
  const [raceDistanceData,setRaceDistanceData] = useState({
    oneKm: false,
    twoKm: false,
    tenKm: false,
    halfMar: false,
    fullMar: false
  });

  //Number of results for each race category
  const[oneKmResultsCount,setOneKmResultsCount] = useState(0)
  const[twoKmResultsCount,setTwoKmResultsCount] = useState(0)
  const[tenKmResultsCount,setTenKmResultsCount] = useState(0)
  const[halfMarResultsCount,setHalfMarResultsCount] = useState(0)
  const[fullMarResultsCount,setFullMarResultsCount] = useState(0)

  //Αναζήτηση και εμφάνιση πλήθους μαραθωνίων με συγκεκριμένο φίλτρο
  function Marathons() {
    return 
  }

  const Handling = (name) => {
    const checked = !raceDistanceData[name];
    setRaceDistanceData(raceDistanceData => ({
      ...raceDistanceData,
      [name] : checked
    }));
  };

  return (
    <div>
        <form className='race-distance-form'>
            <p>Μήκος Διαδρομής</p>
            <div className='race-distance-elements'>
              <CustomCheckbox
                label='1km'
                count={oneKmResultsCount}
                initiallyChecked={raceDistanceData.oneKm}
                onChange={Handling}
                name='oneKm'
              />
              <CustomCheckbox
                label='2km'
                count={twoKmResultsCount}
                initiallyChecked={raceDistanceData.twoKm}
                onChange={Handling}
                name='twoKm'
              />
              <CustomCheckbox
                label='10km'
                count={tenKmResultsCount}
                initiallyChecked={raceDistanceData.tenKm}
                onChange={Handling}
                name='tenKm'
              />
              <CustomCheckbox
                label='Ημιμαραθώνιος'
                count={halfMarResultsCount}
                initiallyChecked={raceDistanceData.halfMar}
                onChange={Handling}
                name='halfMar'
              />
              <CustomCheckbox
                label='Μαραθώνιος'
                count={fullMarResultsCount}
                initiallyChecked={raceDistanceData.fullMar}
                onChange={Handling}
                name='fullMar'
              />
            </div>
        </form>
    </div>
  );
}
