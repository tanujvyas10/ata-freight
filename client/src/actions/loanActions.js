import axios from 'axios'

import {
    ADD_LOAN ,
    GET_ERRORS,
    ADD_LOANS,
   LOAN_LOADING,
    
}
from './types'
import { setProfileLoading } from './profilesAction'


// ADD POST
export const addPost = postData => dispatch =>{
    axios.post('/api/loans',postData)
    .then(res => 
        dispatch({
            type:ADD_LOAN,
            payload:res.data
        })
        )
        .catch(err =>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })  
            )
}

//get posts

export const getPosts = () => dispatch =>{

    dispatch(setProfileLoading)
    axios.get('/api/loans')
    .then(res => 
        dispatch({
            type:ADD_LOANS,
            payload:res.data
        })
        )
        .catch(err =>
            dispatch({
                type:ADD_LOANS,
                payload:null
            })  
            )
}


//set loading state
 export const setPostLoading = ()=>{
     return {
        type: LOAN_LOADING
     }
 }

