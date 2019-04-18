import React from 'react';
import axios from "../Dall/axios-instance";

let initialStateForAuth = {
    logInState: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
    }
};

const SET_LOGIN_STATE = 'NETWORK/AUTH/SET_LOGIN_STATE';
const SET_ME_DATA = 'NETWORK/AUTH/SET_ME_DATA';

const authReducer = (state = initialStateForAuth, action) => {
    let stateCopy = {...state}
    stateCopy.userInfo = {...state.userInfo}
    switch (action.type) {
        case SET_LOGIN_STATE:
            stateCopy.logInState = action.serverLogInState;
            return stateCopy;
        case SET_ME_DATA:
            stateCopy.userInfo.userId = action.userId;
            stateCopy.userInfo.userName = action.userName;
            return stateCopy;
        default:
            return state;
    }
};

export const meThunk = () => {
    return (dispatch) => {
        axios.get('auth/me')
            .then(result => {
                if(result.data.resultCode === 0) {
                    dispatch(setLogInState(true))
                    dispatch(setMeData(result.data.data.id, result.data.data.login))
            }
        });
    };
};

export const logOutThunk = () => {
    return (dispatch) => {
        axios.post('auth/logout').then(
            result => {
                if(result.data.resultCode === 0) {
                    dispatch(setLogInState(false))
                } else {
                    alert("Извините, произошла ошибка. Попробуйте повторить позже.")
                }
            }
        )

    }
}

//action creaters

export const setLogInState = (serverLogInState) => ({
    type: SET_LOGIN_STATE,
    serverLogInState: serverLogInState
})

export const setMeData = (userId, userName) => ({
    type: SET_ME_DATA,
    userId: userId,
    userName: userName
})

export default authReducer;
