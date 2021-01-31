import axios from "axios";
import history from "../../history";

// Action Types
import {
    USER_LOG_IN,
    USER_SIGN_UP,
    GET_USER,
    USER_LOG_OUT,
    GET_CLASS_INFO,
    GET_CLASS_REVIEWS,
    ADD_NEW_REVIEW,
    ADD_NEW_FILE,
    GET_ALL_FILES
} from "./actionTypes";


//Initial State-- Look at stateful components and transfer over
const initialState = {
    logInResponse: "",
    signUpResponse: "",
    defaultUser: {},
    classInfo: {},
    classReviews: [],
    newReviewMSG: "",
    newFileMSG: ",",
    allClassFiles: []
}


// Action Creators

const userLoggedIn = (payload) => ({
    type: USER_LOG_IN,
    payload,
});

const userSignedUp = (payload) => ({
    type: USER_SIGN_UP,
    payload,
})

const getUser = (payload) => ({
    type: GET_USER,
    payload
})

const logoutUser = (payload) => ({
    type: USER_LOG_OUT,
    payload
})

const gotClassInfo = (payload) => ({
    type: GET_CLASS_INFO,
    payload
})

const gotClassReviews = (payload) => ({
    type: GET_CLASS_REVIEWS,
    payload
})

const addNewReviewMessage = (payload) => ({
    type: ADD_NEW_REVIEW,
    payload
})

const addNewFileMessage = (payload) => ({
    type: ADD_NEW_FILE,
    payload
})

const gotAllFiles = (payload) => ({
    type: GET_ALL_FILES,
    payload
})

// Thunks

// AUTH 
export const me = () => {
    return async (dispatch) => {
        try {
            const {
                data
            } = await axios.get(`http://localhost:8080/auth/me`);
            console.log(data);
            dispatch(getUser(data || initialState.defaultUser));
        } catch (error) {
            console.error(error);
        }
    }
}

export const auth = (email, password, method = "login") => {
    console.log(method);
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://localhost:8080/auth/${method}`, {
                email, password
            });
            console.log(typeof response.data);
        } catch (authError) {
            return dispatch(getUser({
                error: authError
            }));
        }

        try {
            if (typeof response.data === "string") {
                console.log("Hello World");
                if (method === "login") {
                    console.log(response.data);
                    dispatch(userLoggedIn(response.data));
                } else if (method === "signup") {
                    dispatch(userSignedUp(response.data));
                }
            } else {
                await dispatch(getUser(response.data));
                history.push('/');
            }
        } catch (error) {
            console.err(error);
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            axios.post('http://localhost:8080/auth/logout');
            dispatch(logoutUser({}))
            history.push('/')
        } catch (error) {
            console.error(error);
        }
    }
}

// SEARCH FOR CLASSES

export const getClassInfo = (id) => {
    console.log(id);
    return async (dispatch) => {
    console.log("Hi");
        try {
            let { data } = await axios.get(`http://localhost:8080/api/search/class/${id}`)
            console.log(data);
            dispatch(gotClassInfo(data));
        } catch (error) {
         console.error(error);   
        }
    }
}

export const getClassReviews = (id) => {
    console.log(id);
    return async (dispatch) => {
    console.log("Hi");
        try {
            let { data } = await axios.get(`http://localhost:8080/api/review/${id}`)
            console.log(data);
            dispatch(gotClassReviews(data));
        } catch (error) {
         console.error(error);   
        }
    }
}

export const addNewReview = (review) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post("http://localhost:8080/api/review/new", review);
            dispatch(addNewReviewMessage(data));
        } catch (error) {
            console.error(error);
        }
    }
}

export const getClassFiles = (id) => {
    console.log(id);
    return async (dispatch) => {
    console.log("Hi");
        try {
            let { data } = await axios.get(`http://localhost:8080/api/file/${id}`)
            console.log(data);
            dispatch(gotAllFiles(data));
        } catch (error) {
         console.error(error);   
        }
    }
}

export const addNewFile = (file) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post("http://localhost:8080/api/file/", file);
            dispatch(addNewFileMessage(data));
        } catch (error) {
            console.error(error);
        }
    }
}

// Root Reducer

const rootReducer = (state = initialState, action) => {
    console.log("REDUCER IS PROCESSING DISPATCHED ACTION");
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
        case USER_SIGN_UP:
            return {
                ...state, signUpResponse: action.payload
            };
        case USER_LOG_IN:
            return {
                ...state, logInResponse: action.payload
            };
        case GET_USER:
            return {
                ...state, defaultUser: action.payload
            };
        case USER_LOG_OUT:
            return {
                ...state, defaultUser: action.payload
            }
        case GET_CLASS_INFO:
            return {
                ...state, classInfo: action.payload
            }
        case GET_CLASS_REVIEWS:
            return {
                ...state, classReviews: action.payload
            }
        case ADD_NEW_REVIEW: 
            return {
                ...state, newReviewMSG: action.payload
            }
        case ADD_NEW_FILE:
            return {
                ...state, newFileMSG: action.payload
            }
        case GET_ALL_FILES:
            return {
                ...state, allClassFiles: action.payload
            }
        default:
            return state;
    }
};


export default rootReducer;

