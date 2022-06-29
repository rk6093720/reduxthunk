import * as types from "./actionTypes";


const initialState = {
    todos:[],
    isLoading:true,
    isError:false
}
const reducer = (state = initialState, action) => {
    const {type,payload}=action
    switch (type) {
        case types.GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        
        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                todos:payload,
                isLoading:false,
                isError:false
            }
        case types.GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }

            case types.ADD_TODOS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        
        case types.ADD_TODOS_SUCCESS:
            return {
                ...state,
                // todos:payload,
                isLoading:false,
                isError:false
            }
        case types.ADD_TODOS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state
    }
}
export {reducer}