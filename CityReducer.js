import * as ActionTypes from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const byName = (state={}, action) => {
    const { type, payload } = action;
    switch(type) {
        case ActionTypes.RECEIVED_CITIES:
            return {...state, ...action.payload.reduce((city, init) => {
                return {...city, ...{ [init.name] : {distance : init.distance} }}
            }, {})}

        default:    
            return state;
    }
}

const availableCities = (state=[], action) => {
    const { type } = action;
    switch(type) {
        case ActionTypes.RECEIVED_CITIES:
            return [...state, ...action.payload.map((city) => {
                return city.name
            })]

        case ActionTypes.CITY_SELECTED:
            return state.filter((it) => it !== action.city)

        default:    
            return state;
    }
}

export default combineReducers({
    byName,
    availableCities
});