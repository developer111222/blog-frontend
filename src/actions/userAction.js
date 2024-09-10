import axios from "axios";
import getsiteurl from "../utils/getsiteurl";
import { 
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, 
  RESET_CLEAR 
} from "../constants/userConstant";

const url = getsiteurl();

//------signup----------
export const usersignup = (inputValue) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_REQUEST });

        const { data } = await axios.post(`${url}/api/vi/signup`, inputValue); 
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
export const userlogin = (inputValue) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const { data } = await axios.post(`${url}/api/vi/login`, inputValue, {
            withCredentials: true, // Allow cookies to be sent and received
        });
        console.log(data); // Example login API endpoint
        dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,
        });
    }
};

//-------Reset clear---
export const resetClear = () => async (dispatch) => {
    dispatch({ type: RESET_CLEAR });
};

//-------Logout---------
export const userlogout = () => async (dispatch) => {
    try {
      

        await axios.post(`${url}/api/vi/logout`);  // Assuming you have a logout endpoint
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
