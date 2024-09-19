import { CREATE_BLOG_REQUEST,CREATE_BLOG_SUCCESS,CREATE_BLOG_FAIL,RESET_CLEAR } from "../constants/blogConstant";

const initialState = {
    blog: [],    // Your initial state for the blog
    loading: false,
    success: false,
    message: null,
    error: null,
};

export const blogReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_BLOG_REQUEST:
            return {
                loading: true,
                success: false,
                message: null,
                error: null,
            };
            case CREATE_BLOG_SUCCESS:
                return{
                    loading: false,
                    success: true,
                    message: action.payload.message,
                    error: null,
                    blog:  action.payload,
                }
                case CREATE_BLOG_FAIL:
                    return {
                        loading: false,
                        success: false,
                        error: action.payload,
                       
                    }
                case RESET_CLEAR:
                    return {
                        blog: [],
                        loading: false,
                        success: false,
                        message: null,
                        error: null,
                    }
        default: return state
    }
}