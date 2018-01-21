import * as API from '../core/api';
import * as ActionTypes from '../constants/ActionTypes';

export const fetchCities = () => {
    const payload = API.get("/cities")

    return {
        type: ActionTypes.RECEIVED_CITIES,
        payload
    }
};

export const fetchVehicles = () => {
    const payload = API.get("/vehicles")

    return {
        type: ActionTypes.RECEIVED_VEHICLES,
        payload
    }
};

export const citySelected = (cityName, id) => ({
    type: ActionTypes.CITY_SELECTED,
    id,
    city: cityName
});

export const vehicleSelected = (vehicle, id) => ({
    type: ActionTypes.VEHICLE_SELECTED,
    id,
    vehicle
});
