import { combineReducers } from 'redux';
import cities from './CityReducer';
import vehicles from './VehiclesReducer';
import jobs from './JobsReducer';
import { store } from '../index';

const lastAction = (state = null, action) => {
    console.log(action);
    return action;
}

export default combineReducers({
    cities,
    vehicles,
    jobs,
    lastAction
});