import axios from 'axios';

const setAuthToken = token=>{
    //apply to every request

  if(token){
        axios.defaults.headers.common['Authorization']= token;
}    else{
    //delete the auth header
    delete axios.defaults.headers.common['Authorization']
}
}

export default setAuthToken