import axios from "axios";
import getsiteurl from "../utils/getsiteurl";
import { 
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL,PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAIL,
  RESET_CLEAR 
} from "../constants/userConstant";
import Cookies from "universal-cookie";



const url = getsiteurl();


//------signup----------
export const usersignup = (inputValue) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_REQUEST });

        const formData = new FormData();
        formData.append('email', inputValue.email);
        formData.append('password', inputValue.password);
        formData.append('avtar', inputValue.avtar);

        console.log(formData,"formData");

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        

        const { data } = await axios.post(`${url}/api/vi/signup`, formData,config); 
       
        dispatch({ type: SIGNUP_SUCCESS, payload: data });  
    } catch (error) {
        dispatch({ 
            type: SIGNUP_FAIL, 
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        });
    }
};

//------user login----------
// export const userlogin = (inputValue) => async (dispatch) => {
//     try {
//         dispatch({ type: LOGIN_REQUEST });

//         const { data } = await axios.post(`${url}/api/vi/login`, inputValue, {
//             withCredentials: true, // Allow cookies to be sent and received
//         });

//         const token = data.token; // Replace this with the correct path to the token
        

//         if (token) {
//           // Set the token in cookies
//           const cookies = new Cookies();
//           cookies.set('token', token, { path: '/', maxAge: 3600 }); // maxAge is 1 hour (3600 seconds), adjust as needed
    
//           console.log('Token saved to cookies:', token);
//         }
        
//         dispatch({ type: LOGIN_SUCCESS, payload: data });
//         Token()
//     } catch (error) {
//         dispatch({
//             type: LOGIN_FAIL,
//             payload: error.response && error.response.data.message
//                      ? error.response.data.message
//                      : error.message,
//         });
//     }
// };

export const userlogin = (inputValue) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const { data } = await axios.post(`${url}/api/vi/login`, inputValue, {
        withCredentials: true, // Allow cookies to be sent and received
      });

      // Assuming the token is set by the backend in the cookies
      dispatch({ type: LOGIN_SUCCESS, payload: data });
  
    
  
      // Optionally call the Token component to handle the token
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response && error.response.data.message
                 ? error.response.data.message
                 : error.message,
      });
     
    }
  };
//------------user profile------------



export const Userprofile=()=> async(dispatch)=>{
    try {
        dispatch({ type: PROFILE_REQUEST });

// console.log(token)
const {data}=await axios.get(`${url}/api/vi/profile`,{
    withCredentials: true
})


dispatch({type:PROFILE_SUCCESS,payload:data});
    } catch(error){
        dispatch({
            type: PROFILE_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        });
    }
}


//-------Logout---------
export const userlogout = () => async (dispatch) => {
    try {
      

        await axios.post(`${url}/api/vi/logout`,null,{
            withCredentials: true  // Allow cookies to be sent and received
        });  // Assuming you have a logout endpoint
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        });
    }
};


//-------Reset clear---
export const ResetClear = () => async (dispatch) => {
    dispatch({ type: RESET_CLEAR });
};