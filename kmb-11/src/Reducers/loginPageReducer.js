import React from 'react';
import axios from "../Dall/axios-instance";
import {setLogInState, setMeData} from "./authReducer";


let initialStateForLogin = {
    currentLogin: "krozeal@gmail.com",
    currentPassword: "webdol1916",
    currentCaptcha: "",
    statusBar: false,
    errorMessage: null,
    captchaUrl: null
};

const ADD_CURRENT_LOGIN = 'NETWORK/LOGIN/ADD_CURRENT_LOGIN';
const ADD_CURRENT_PASSWORD = 'NETWORK/LOGIN/ADD_CURRENT_PASSWORD';
const ADD_CURRENT_CAPTCHA = 'NETWORK/LOGIN/ADD_CURRENT_CAPTCHA';
const CHANGE_STATUS_BAR = 'NETWORK/LOGIN/CHANGE_STATUS_BAR';
const ADD_ERROR_MESSAGE = 'NETWORK/LOGIN/ADD_ERROR_MESSAGE';
const ADD_CAPTCHA_URL = 'NETWORK/LOGIN/ADD_CAPTCHA_URL';

const loginPageReducer = (state = initialStateForLogin, action) => {
    let stateCopy={...state}
    switch (action.type) {
        case ADD_CURRENT_LOGIN:
            stateCopy.currentLogin = action.textLoginField;
            return stateCopy;
        case ADD_CURRENT_PASSWORD:
            stateCopy.currentPassword = action.textPasswordField;
            return stateCopy;
        case ADD_CURRENT_CAPTCHA:
            stateCopy.currentCaptcha = action.textCaptchaField;
            return stateCopy;
        case CHANGE_STATUS_BAR:
            stateCopy.statusBar = action.toogleStatusBar;
            return stateCopy;
        case ADD_ERROR_MESSAGE:
            stateCopy.errorMessage = action.errorMessageText;
            return stateCopy;
        case ADD_CAPTCHA_URL:
            stateCopy.captchaUrl = action.captchaUrlFromServer;
            return stateCopy;
        default:
            return state;
    }
};

export const loginSubmitClick = () => {
    return (dispatch, getState) => {
        let state = getState();
        dispatch(changestatusBar(true));
        axios.post('auth/login', {
            email: state.login.currentLogin,
            password: state.login.currentPassword,
            captcha: state.login.currentCaptcha
        }).then(result => {
            switch (result.data.resultCode) {
                case 1:
                    dispatch(addErrorMessage(result.data.messages[0]));
                    dispatch(changestatusBar(false));
                    break;
                case 10:
                    dispatch(addErrorMessage(result.data.messages[0]));
                    axios.get('security/get-captcha-url')
                        .then(captchaResult => {
                            dispatch(addCaptchaUrl(captchaResult.data.url));
                        });
                    dispatch(changestatusBar(false));
                    break;
                case 0:
                    dispatch(changestatusBar(false));
                    axios.get('auth/me').then(result => {
                        dispatch(setMeData(result.data.data.id))
                        dispatch(setLogInState(true));
                    })
            }
        });
    };
};

//action creaters
export const addCurrentLoginDispatch = (e) => {
    return {
        type: ADD_CURRENT_LOGIN,
        textLoginField: e.currentTarget.value
    }
};

export const addCurrentPasswordDispatch = (e) => {
    return {
        type: ADD_CURRENT_PASSWORD,
        textPasswordField: e.currentTarget.value
    }
};

export const addCurrentCaptchaDispatch = (e) => {
    return {
        type: ADD_CURRENT_CAPTCHA,
        textCaptchaField: e.currentTarget.value
    }
};

const changestatusBar = (toogleStatusBarUI) => {
    return {
        type: CHANGE_STATUS_BAR,
        toogleStatusBar: toogleStatusBarUI
    }
};

const addErrorMessage = (errorMessageText) => {
    return {
        type: ADD_ERROR_MESSAGE,
        errorMessageText: errorMessageText
    }
}

const addCaptchaUrl = (captchaUrlFromServer) => {
    return {
        type: ADD_CAPTCHA_URL,
        captchaUrlFromServer: captchaUrlFromServer
    }
}

export default loginPageReducer;
