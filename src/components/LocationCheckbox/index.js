import React, { useState } from 'react';
import { MdOutlineGpsFixed } from 'react-icons/md';
import './location-checkbox.css';

export default function LocationCheckbox({ label, initialChecked: initiallyChecked = false, onChange, name }) {
    const defaultChecked = initiallyChecked ? true : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleClick = () => {
        if (!isChecked) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                console.log(latitude, longitude);
            })
        }
        setIsChecked(prevIsChecked => !prevIsChecked);
        onChange(name);
    };

    return (
        <div className='location-checkbox-container' onClick={handleClick}>
            <MdOutlineGpsFixed size={22}/>
            <span>{label}</span>
            <input type="checkbox" checked={isChecked} readOnly
            className={isChecked ? 'checked' : ''} />
        </div>
    );
}
