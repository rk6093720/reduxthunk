import { legacy_createStore, compose , applyMiddleware } from "redux";
import { reducer} from "./reducer"
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const customMiddleware = ({dispatch} )=>( next) => (action) => {
//     console.log(typeof action);
//     if(typeof action==="function")
//     {
//         //getTodos(dispatch)
//         return action(dispatch)
//     }
//     else if(typeof action === "object")
//     {
//         return next(action);
//     }
    
// }


const store=legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
    );


export {store}