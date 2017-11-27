import * as ACTIONS from '../constants/index'
import DataService from '../services/dataService';

export function getAllLocations(dataService = DataService) {
    return dispatch => {
        dispatch({type: ACTIONS.GET_LOCATIONS_REQUEST});

        dataService.getAllLocations()
            .then( data => dispatch({type: ACTIONS.GET_LOCATIONS_RESPOND, data }) )
    }
}