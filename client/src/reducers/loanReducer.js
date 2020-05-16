import {ADD_LOAN,ADD_LOANS,GET_POST,DELETE_POST,LOAN_LOADING} from '../actions/types'


const initialState = {
    loans:[],
    loading:false
}

export default function(state = initialState, action){


    switch(action.type){
      case ADD_LOAN:
          return {
              ...state,
              loans:[action.payload, ...state.loans]
          }
     case LOAN_LOADING:
         return {
             ...state,
             loans:[action.payload, ...state.loans]
         }  
       

         case ADD_LOANS:
             return{
                 ...state,
                 loans:action.payload,
                 loading:false
             }

         

        default:
            return state;
       
        }

}
