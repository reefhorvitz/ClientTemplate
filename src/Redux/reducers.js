import {combineReducers} from "redux-immutable";
import { connectRouter } from 'connected-react-router/immutable';
import {reducer as toastrReducer} from 'react-redux-toastr'

export default (history) => combineReducers({
    toastr: toastrReducer, // <- Mounted at toastr.Toastr
    router: connectRouter(history)
});