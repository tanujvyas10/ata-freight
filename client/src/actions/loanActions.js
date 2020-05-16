import axios from 'axios'

import {
    ADD_POST ,
    GET_ERRORS,
    GET_POSTS,
   POST_LOADING,
    
}
from './types'
import { setProfileLoading } from './profilesAction'


// ADD POST
export const addPost = postData => dispatch =>{
    axios.post('/api/loans',postData)
    .then(res => 
        dispatch({
            type:ADD_POST,
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
            type:GET_POSTS,
            payload:res.data
        })
        )
        .catch(err =>
            dispatch({
                type:GET_POSTS,
                payload:null
            })  
            )
}


//set loading state
 export const setPostLoading = ()=>{
     return {
        type: POST_LOADING
     }
 }

