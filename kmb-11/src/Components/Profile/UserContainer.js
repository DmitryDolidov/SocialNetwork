import React, {Component} from 'react';
import '../Profile/Profile.css';
import {connect} from 'react-redux';
import User from './User';
import {
    getStatusThunk,
    changeStatusCreator,
    addCurrentStatusTextCreator,
    addNewStatusThunk,
    getProfileInformationThunk
} from '../../Reducers/profilePageReducer';
import {Redirect} from "react-router";

class UserContainer extends Component {

    componentWillMount() {
        this.props.getStatus();
    }

    componentDidMount() {
        this.props.getProfileInformation()
    }

    render() {
        return <User {...this.props} />
            }
}

const mapStateToProps = (state) => {
    return {
        fullName: state.profileData.fullName,
        lookingForAJobDescription: state.profileData.lookingForAJobDescription,
        lookingForAJob: state.profileData.lookingForAJob,
        aboutMe: state.profileData.aboutMe,
        contacts: state.profileData.contacts,
        avatar: state.profileData.photos.large,
        status: state.profileData.status,
        statusChangeFlag: state.profileData.statusChangeFlag,
        currentStatus: state.profileData.currentStatus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatus: () => {
            dispatch (
                getStatusThunk()
            )
        },
        changeStatus: (flag) => {
            dispatch (
                changeStatusCreator(flag)
            )
        },
        addNewStatus: () => {
            dispatch (
                addNewStatusThunk()
            )
        },
        addCurrentStatusText: (e) => {
            dispatch (
                addCurrentStatusTextCreator(e)
            )
        },
        getProfileInformation: () => {
            dispatch (
                getProfileInformationThunk()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);