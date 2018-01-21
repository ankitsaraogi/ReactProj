import React from 'react';

const Dropdown = ({ options, id, onChangeHadler, value }) => {
    return (
        <select onChange={onChangeHadler} value={value}>
            <option value=""  disabled selected>Please select a city</option> 
            {
                options.map((opt, ind) => {
                    return (
                        <option 
                            value={opt} 
                            key={opt + ind}
                        >
                            {opt}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default Dropdown;