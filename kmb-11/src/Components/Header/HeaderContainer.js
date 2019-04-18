import React, {Component} from 'react';
import './Header.css';
import {connect} from 'react-redux';
import Header from './Header';
import {meThunk, logOutThunk} from '../../Reducers/authReducer';
import {Redirect} from "react-router";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.me();
    }

    render() {
        if(this.props.logInState===false) {
            return <Redirect to={'/login'}/>
        }
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        logInState: state.auth.logInState,
        userInfo: state.auth.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        me: () => {
            dispatch(
                meThunk()
            );
        },
        logOut: () => {
            dispatch(
                logOutThunk()
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

