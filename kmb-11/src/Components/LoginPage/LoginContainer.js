import React, {Component} from 'react';
import {
    addCurrentLoginDispatch,
    addCurrentPasswordDispatch,
    addCurrentCaptchaDispatch,
    loginSubmitClick
} from "../../Reducers/loginPageReducer";
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import Login from "./Login";

class LoginContainer extends Component {

    render() {
        if (this.props.logInState) {
            return <Redirect to={"/profile"}/>
        } else {
            return <Login {...this.props} />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentLogin: state.login.currentLogin,
        currentPassword: state.login.currentPassword,
        currentCaptcha: state.login.currentCaptcha,
        statusBar: state.login.statusBar,
        logInState: state.auth.logInState,
        errorMessage: state.login.errorMessage,
        captchaUrl: state.login.captchaUrl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCurrentLogin: (e) => {
            dispatch(
                addCurrentLoginDispatch(e)
            );
        },
        addCurrentPassword: (e) => {
            dispatch(
                addCurrentPasswordDispatch(e)
            );
        },
        addCurrentCaptcha: (e) => {
            dispatch(
                addCurrentCaptchaDispatch(e)
            );
        },
        onSubmitButtonClick: () => {
            dispatch(
                loginSubmitClick()
            );
        }
    }
};

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default ConnectedLogin;