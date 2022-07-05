import "./select.module.css";
import React from 'react';

function Select({options, onChange, defaultValue}) {
    return (
        <select onChange={event => onChange(event.target.value)}>
            <option key={0} value={''}>{defaultValue}</option>
        {
            options.map((option, index) => {
                return (
                    <option key={index} className={'option'} value={option.value}>
                        {option.name}
                    </option>
                );
            })
        }
        </select>
    );
}

export default Select;