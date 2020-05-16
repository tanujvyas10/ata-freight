import { combineReducers } from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer'
import loanReducer from './loanReducer'
export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    profile:profileReducer,
    post:loanReducer
})

