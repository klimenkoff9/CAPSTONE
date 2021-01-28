import axios from "axios";
import { bindActionCreators } from "redux";
import history from "../../history";

// Action Types
import { USER_LOG_IN, USER_SIGN_UP, GET_USER, USER_LOG_OUT} from "./actionTypes";


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
	type:  USER_SIGN_UP,
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

// returns response
export const userLogIn = (loginCredentials) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:8080/auth/login`, loginCredentials);
            console.log(data);
            dispatch(userLoggedIn(data));
        } catch (error) {
            console.error(error);
        }
    }
}

// returns response
export const userSignUp = (signupCredentials) => {
    console.log(signupCredentials);
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:8080/auth/signup`, signupCredentials);
            console.log(data);
            dispatch(userSignedUp(data));
        } catch (error) {
            console.error(error);
        }
    }
}

export const me = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:8080/auth/me`);
            console.log(data);
            dispatch(getUser(data || this.defaultUser));
        } catch (error) {
            console.error(error);
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            // await axios.post('http://localhost:8080/auth/logout');
            dispatch(logoutUser({ }))
            history.push('/')
        } catch (error) {
            console.error(error);
        }
    }
}

export const auth = (credentials, method) => {
    console.log(method);
    return async (dispatch) => {
        let res;
        try {
            res = await axios.post(`http://localhost:8080/auth/${method}`, credentials)
        } catch (authError) {
            return dispatch(getUser({
                error: authError
            }));
        }

        try {
            dispatch(getUser(res.data));
            history.push('/');
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
			return { ...state, signUpResponse: action.payload };
		case USER_LOG_IN:
            return {...state, logInResponse : action.payload};
        case GET_USER: 
            return {...state, defaultUser: action.payload };
        case USER_LOG_OUT: 
            return {...state, defaultUser: action.payload }
		default:
			return state;
	}
};

export default rootReducer;


