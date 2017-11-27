import {GET_LOCATIONS_RESPOND} from '../constants';
import { combineReducers } from 'redux';


function locationsReducer (state = null, action){
    switch(action.type){
        case GET_LOCATIONS_RESPOND:
            return [...action.data];
    }
    return state
}

export default combineReducers({
    // Reducers go here
    locations: locationsReducer,
});
