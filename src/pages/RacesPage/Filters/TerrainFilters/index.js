import React, { useState } from 'react';
import './terrain-filters.css';
import CustomCheckbox from '../../../../components/CustomCheckbox';

// Rename το function και όλες τις σχετικές μεταβλητές σε "TerrainFilters"
export default function TerrainFilters() {

  //Race terrain types
  const [groundTypeData,setGroundTypeData] = useState({
    asphalt: false,
    mountain: false,
    grass: false,
    sand: false,
    multiTerrain: false
  });

  //Number of results for each race category
  const[asphaltResultsCount,setAsphaltResultsCount] = useState(0)
  const[mountainResultsCount,setMountainResultsCount] = useState(0)
  const[grassResultsCount,setGrassResultsCount] = useState(0)
  const[sandResultsCount,setSandResultsCount] = useState(0)
  const[multiTerrainResultsCount,setMultiTerrainResultsCount] = useState(0)

  const Handling = (name) => {
    const checked = !groundTypeData[name];
    setGroundTypeData(groundTypeData => ({
      ...groundTypeData,
      [name] : checked
    }));
  };

  return (
    <div>
        <form className='race-terrain-form'>
            <p>Έδαφος Διαδρομής</p>
            <div className='race-terrain-elements'>
              <CustomCheckbox
                label='Άσφαλτος'
                count={asphaltResultsCount}
                initiallyChecked={groundTypeData.asphalt}
                onChange={Handling}
                name='asphalt'
              />
              <CustomCheckbox
                label='Βουνό'
                count={mountainResultsCount}
                initiallyChecked={groundTypeData.mountain}
                onChange={Handling}
                name='mountain'
              />
              <CustomCheckbox
                label='Γρασίδι'
                count={grassResultsCount}
                initiallyChecked={groundTypeData.grass}
                onChange={Handling}
                name='grass'
              />
              <CustomCheckbox
                label='Άμμος'
                count={sandResultsCount}
                initiallyChecked={groundTypeData.sand}
                onChange={Handling}
                name='sand'
              />
              <CustomCheckbox
                label='Multi-terrain'
                count={multiTerrainResultsCount}
                initiallyChecked={groundTypeData.multiTerrain}
                onChange={Handling}
                name='multiTerrain'
              />
            </div>
        </form>
    </div>
  );
}