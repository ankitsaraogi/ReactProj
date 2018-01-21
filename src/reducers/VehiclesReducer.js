import * as ActionTypes from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const byName = (state={}, action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.RECEIVED_VEHICLES:
            return {...state, ...action.payload.reduce((vehicle, init) => {
                return {...vehicle, ...{ [init.name] : {...init} }}
            }, {})}

        case ActionTypes.VEHICLE_SELECTED:
            return {...state, ...{[action.vehicle] : {...state[action.vehicle], 
                ...{"total_no" :  state[action.vehicle]["total_no"] > 0 ? state[action.vehicle]["total_no"] - 1 : 0}}}}

        default:    
            return state;
    }
}

const availableVehicles = (state=[], action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.RECEIVED_VEHICLES:
            return [...state, ...action.payload.map((vehicle) => {
                return vehicle.name
            })]

        default:    
            return state;
    }
}

export default combineReducers({
    byName,
    availableVehicles
});