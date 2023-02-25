import React, { useState } from 'react';
import './custom-checkbox.css';

export default function CustomCheckbox({ label, count, initialChecked: initiallyChecked = false, onChange, name }) {
    const defaultChecked = initiallyChecked ? true : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleClick = () => {
        setIsChecked(prevIsChecked => !prevIsChecked);
        onChange(name);
    };

    return (
        <div className='custom-checkbox-container' onClick={handleClick}>
            <input type="checkbox" checked={isChecked} readOnly
            className={isChecked ? 'checked' : ''} />
            <span>{`${label} (${count})`}</span>
        </div>
    );
}
