import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL, LOGOUT_FAIL, LOGOUT_SUCCESS, RESET_CLEAR, LOGIN_VALID, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL } from "../constants/userConstant";

const initialState = {
    user: [],    // Your initial state for the user
  
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SIGNUP_REQUEST, LOGIN_REQUEST, PROFILE_REQUEST :
        //     return {
        //         ...state,  // Always spread the current state to avoid overwriting it
        //         loading: true,
        //         isAuthenticate: false
        //     };
        // case SIGNUP_SUCCESS :
        //     return {
        //         ...state,
        //         loading: false,
        //         success: true,
        //         isAuthenticate: false,
        //         message: action.payload.message
                
        //     };
        //     case LOGIN_SUCCESS:
        //         return{
        //         ...state,
        //         loading: false,
        //         isAuthenticated: true,
        //         issuccess:true,
        //         message: action.payload.message,
        //     };
        //     case PROFILE_SUCCESS :
        //         return{
        //             ...state,
        //             loading: false,
        //             user: action.payload.data.user,
                
        //             issuccess:true,
        //             message: action.payload.message
        //         }
        // case SIGNUP_FAIL :
        //     return {
        //         ...state,
        //         loading: false,
        //         isAuthenticate: false,
        //         success:false,
                
        //         error: action.payload
        //     };
        //     case LOGIN_FAIL : return{
        //         ...state,
        //         loading: false,
        //         isAuthenticate: false,
        //         issuccess:false,
                
        //         error: action.payload
        //     }
        //     case PROFILE_FAIL :
        //         return{
        //             ...state,
        //             loading: false,
        //             isAuthenticate: false,
        //             issuccess:false,
        //             error: action.payload
        //         }

        // Change isAuthenticate to isAuthenticated
case SIGNUP_REQUEST, LOGIN_REQUEST, PROFILE_REQUEST:
    return {
      ...state,
      loading: true,
      isAuthenticated: false, // Fix the typo here
    };
  
  // Same with SIGNUP_FAIL, LOGIN_FAIL, PROFILE_FAIL:
  case SIGNUP_FAIL:
  case LOGIN_FAIL:
  case PROFILE_FAIL:
    return {
      ...state,
      loading: false,
      isAuthenticated: false, // Fix the typo here
      success: false,
      error: action.payload,
    };
  
  // And SIGNUP_SUCCESS and LOGIN_SUCCESS
  case SIGNUP_SUCCESS:
    return {
      ...state,
      loading: false,
      success: true,
      isAuthenticated: false, // Fix this typo
      message: action.payload.message,
    };
  
  case LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      isAuthenticated: true, // Fix this typo
      issuccess: true,
      message: action.payload.message,
    };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true, // Ensure the user is authenticated on successful profile retrieval
        user: action.payload.user, // Assuming the payload contains the user data
        message: action.payload.message, // Optional, if you have a message to show
      };
        case RESET_CLEAR:
            return {
                ...state,
                isAuthenticate: false,
                success: false,
                issuccess:false,
                error: null,
                message: null
            };
        default:
            return state;  // Always return the current state by default if the action type doesn't match
    }
};
