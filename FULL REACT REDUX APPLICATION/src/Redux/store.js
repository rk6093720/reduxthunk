import { legacy_createStore, applyMiddleware,compose, combineReducers } from "redux";

import thunk from "redux-thunk";


import { reducer as App} from "../Redux/App/reducer"
import { reducer as Auth } from "./Auth/reducer";


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({App,Auth})




const store=legacy_createStore(
   rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export {store}