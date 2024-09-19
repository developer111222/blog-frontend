import { CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS, CREATE_BLOG_FAIL, RESET_CLEAR } from "../constants/blogConstant";
import getsiteurl from "../utils/getsiteurl";
import axios from "axios"

const url = getsiteurl();

export const createBlog = (inputValue) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_BLOG_REQUEST })
        const formData = new FormData();
        for (let key in inputValue) {
            formData.append(key, inputValue[key])
        }
        
        const config = { 
            headers: { 
                'Content-Type': 'multipart/form-data' 
            },
            withCredentials: true  // Ensure withCredentials is part of the config object
        };
        

        const { data } = await axios.post(`${url}/api/vi/create-blog`, formData, config)

        dispatch({ type: CREATE_BLOG_SUCCESS, payload: data })

    }
    catch (error) {
dispatch({type:CREATE_BLOG_FAIL,
    payload: error.response && error.response.data.message
    ? error.response.data.message
    : error.message,
})
    }

}






export const ResetClear = () => async (dispatch) => {
    dispatch({ type: RESET_CLEAR });
};