import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL, LOGOUT_FAIL, LOGOUT_SUCCESS, RESET_CLEAR, LOGIN_VALID } from "../constants/userConstant";

const initialState = {
    user: {},    // Your initial state for the user
    loading: false,
    isAuthenticate: false,
    success: false,
    message: null,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST, LOGIN_REQUEST :
            return {
                ...state,  // Always spread the current state to avoid overwriting it
                loading: true,
                isAuthenticate: false
            };
        case SIGNUP_SUCCESS, LOGIN_SUCCESS :
            return {
                ...state,
                loading: false,
                success: true,
                user: action.payload,
                isAuthenticate: false,
                message: action.payload.message
                
            };
        case SIGNUP_FAIL, LOGIN_FAIL :
            return {
                ...state,
                loading: false,
                isAuthenticate: false,
                user: null,
                error: action.payload
            };
        case RESET_CLEAR:
            return {
                ...state,
                isAuthenticate: false,
                success: false,
                error: null,
                message: null
            };
        default:
            return state;  // Always return the current state by default if the action type doesn't match
    }
};
