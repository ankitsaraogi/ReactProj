import * as ActionTypes from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import { generateIds } from '../core/utils'

const byId = (state={}, action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.CITY_SELECTED:
            return {...state, ...{[action.id] : {city: action.city}}}

        case ActionTypes.VEHICLE_SELECTED:
            let newObj = {city: state[action.id]["city"], vehicle: action.vehicle};
            return {...state, ...{[action.id] : {...state[action.id], ...newObj}}};

        default:    
            return state;
    }
}

const availableIds = (state=[], action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.RECEIVED_CITIES:
            return [...state, ...generateIds(4)]
        case ActionTypes.CITY_SELECTED:
            return [...state, ...action.id]

        default:    
            return state;
    }
}

const noOfListItems = (state=0, action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.RECEIVED_CITIES:
            return 4;
        default:    
            return state;
    }
}

const totalTimeSpent = (state=0, action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.RECEIVED_VEHICLES:
            return 0;
        default:    
            return state;
    }
}

export default combineReducers({
    noOfListItems,
    byId,
    totalTimeSpent,
    availableIds
});