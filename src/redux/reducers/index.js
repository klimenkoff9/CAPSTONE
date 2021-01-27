import axios from "axios";
import { bindActionCreators } from "redux";

// Action Types
import { USER_LOG_IN, USER_SIGN_UP } from "./actionTypes";


//Initial State-- Look at stateful components and transfer over
const initialState = {

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

export const userLogIn = () => {
    return async (dispatch) => {
        try {
  
        } catch (error) {

        }
    }
}

export const userSignUp = () => {
    return async (dispatch) => {
        try {
  
        } catch (error) {
  
        }
    }
}

// Root Reducer

const rootReducer = (state = initialState, action) => {

}

export default rootReducer;


