import { combineReducers } from 'redux';

import messags from "./reducers/message"
import loader from "./reducers/loader"


const rootReducer = combineReducers({
    messags,
    loader
});

export default rootReducer;
