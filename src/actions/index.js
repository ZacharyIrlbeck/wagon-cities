// TODO: add and export your own actions
import cityData from '../data/city_data';

export function setCities() {
    return {
        type: 'SET_CITIES',
        payload: cityData
    }

}

export function selectActiveCity(city) {
    console.log('here in the activity');
    return {
        type: 'ACTIVE_CITY',
        payload: city
    }
}