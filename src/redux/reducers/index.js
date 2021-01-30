import axios from "axios";
import history from "../../history";

// Action Types
import {
    USER_LOG_IN,
    USER_SIGN_UP,
    GET_USER,
    USER_LOG_OUT,
    GET_CLASS_INFO,
    GET_CLASS_REVIEWS
} from "./actionTypes";


//Initial State-- Look at stateful components and transfer over
const initialState = {
    logInResponse: "",
    signUpResponse: "",
    defaultUser: {},
    classInfo: {},
    classReviews: []
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
            default:
                return state;
    }
};


export default rootReducer;

