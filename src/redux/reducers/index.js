import axios from "axios";
import history from "../../history";

// Action Types
import {
    USER_LOG_IN,
    USER_SIGN_UP,
    GET_USER,
    USER_LOG_OUT
} from "./actionTypes";


//Initial State-- Look at stateful components and transfer over
const initialState = {
    logInResponse: "",
    signUpResponse: "",
    defaultUser: {}
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

// Thunks


export const me = () => {
    return async (dispatch) => {
        try {
            const {
                data
            } = await axios.post(`http://localhost:8080/auth/me`);
            console.log(data);
            dispatch(getUser(data || this.defaultUser));
        } catch (error) {
            console.error(error);
        }
    }
}

export const logout = (props) => {
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

export const auth = (credentials, method) => {
    console.log(method);
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://localhost:8080/auth/${method}`, credentials);
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
            default:
                return state;
    }
};

export default rootReducer;
