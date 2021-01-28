import axios from "axios";
import { bindActionCreators } from "redux";

// Action Types
import { USER_LOG_IN, USER_SIGN_UP } from "./actionTypes";


//Initial State-- Look at stateful components and transfer over
const initialState = {
    logInResponse: "",
    signUpResponse: ""
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

// Thunks

export const userLogIn = (loginCredentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/user/login`, loginCredentials);
            console.log(response);
            dispatch(userLoggedIn(response));
        } catch (error) {
            console.error(error);
        }
    }
}

export const userSignUp = (signupCredentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/user/signup`, signupCredentials);
            console.log(response);
            // dispatch(userSignedUp(resposne));
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
			return { ...state, signUpResponse: action.payload };
		case USER_LOG_IN:
			return {...state, logInResponse : action.payload};
		default:
			return state;
	}
};

export default rootReducer;


