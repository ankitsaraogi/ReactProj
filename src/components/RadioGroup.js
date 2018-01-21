import React from 'react';

const RadioGroup = ({ group, id, show, onChangeHadler, groupsByName, selectedVehicle }) => {
    let display = show ? "block" : "none";
    return (
        <div style={{display: display}}>
            {
                group.map((radio, ind) => {
                    let numVehicle = groupsByName[radio]["total_no"] + (selectedVehicle === radio ? 1 : 0);
                    return (
                        <div>
                            <input 
                                type="radio" 
                                name={id}
                                id={radio}
                                key={radio + ind} 
                                onClick={onChangeHadler}
                                value={radio}
                                data-id={id} 
                                checked={selectedVehicle === radio ? "checked" : undefined}
                            />
                            <label 
                                for={radio}
                            >
                                {groupsByName[radio]["name"] + " (" + numVehicle + ")"}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RadioGroup;