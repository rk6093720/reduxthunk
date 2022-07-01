import * as types from "./actionTypes"
const initialState={
    books:[],
    isLoading:false,
    isError:false,
}

const reducer = (state = initialState, action) => {
    const {type, payload} =action;
    switch (type) {
        case types.GET_BOOK_REQUEST:{
             return {
                ...state,
                isLoading:true,
                isError:false,
             }
        }
        
        case types.GET_BOOK_SUCCESS:{
               return {
                ...state,
                books:payload,
                isLoading:false,
                isError:false,
               }
        }
        case types.GET_BOOK_FAILURE:{
            return {
             ...state,
            
             isLoading:false,
             isError:true,
            }
     }
        

     case types.UPDATE_BOOK_REQUEST:{
        return {
           ...state,
           isLoading:true,
           isError:false,
        }
   }
   
   case types.UPDATE_BOOK_SUCCESS:{
          return {
           ...state,
           books:payload,
           isLoading:false,
           isError:false,
          }
   }
   case types.UPDATE_BOOK_FAILURE:{
       return {
        ...state,
       
        isLoading:false,
        isError:true,
       }
}
        default:
            return state
    }
}

export {reducer}