import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneFriends from "./OneFriends";
import {getOneFriendThunk} from "../../Reducers/oneFriendReducer";

class OneFriendsContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.getInformation(this.props.friendId)
    }

    componentWillUnmount() {

    }

    render() {
        return <OneFriends {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        fullName: state.oneFriend.fullName,
        status: state.oneFriend.status,
        photos: state.oneFriend.photos,
        contacts: state.oneFriend.contacts,
        aboutMe: state.oneFriend.aboutMe,
        lookingForAJob: state.oneFriend.lookingForAJob,
        lookingForAJobDescription: state.oneFriend.lookingForAJobDescription
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInformation: (friendId) => {
            dispatch(getOneFriendThunk(friendId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneFriendsContainer)