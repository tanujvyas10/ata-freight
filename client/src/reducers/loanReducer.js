import {ADD_POST,GET_POSTS,GET_POST,DELETE_POST,POST_LOADING} from '../actions/types'


const initialState = {
    loans:[],
    loading:false
}

export default function(state = initialState, action){


    switch(action.type){
      case ADD_POST:
          return {
              ...state,
              loans:[action.payload, ...state.loans]
          }
     case POST_LOADING:
         return {
             ...state,
             loans:[action.payload, ...state.loans]
         }  
       

         case GET_POSTS:
             return{
                 ...state,
                 loans:action.payload,
                 loading:false
             }

         

        default:
            return state;
       
        }

}
