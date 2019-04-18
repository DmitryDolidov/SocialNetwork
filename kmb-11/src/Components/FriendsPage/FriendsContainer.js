import React, {Component} from 'react';
import {connect} from 'react-redux';
import Friends from "./Friends";
import {
    addNextFriendsSagaCreator,
    changeSearchCreator,
    clearAfterLeaveCreation, filterSelector,
    friendsReturnThunk, getFilteredUsersReselector, setFilterCreator
} from "../../Reducers/friendsReducer";
import {withRouter} from "react-router-dom";

class FriendsContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.friendsReturn()
    }

    componentWillUnmount() {
        this.props.clearAfterLeave()
    }

    render() {
        return <Friends {...this.props}/>
    }
}

let filterTimeOutId = null

const mapStateToProps = (state) => {
    return {
        filteredUsers: getFilteredUsersReselector(state),
        error: state.friends.error,
        searchText: state.friends.searchText,
        filter: filterSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        friendsReturn: () => {
            dispatch(friendsReturnThunk())
        },
        addNextFriends: () => {
            dispatch(addNextFriendsSagaCreator())
        },
        clearAfterLeave: () => {
            dispatch(clearAfterLeaveCreation())
        },
        changeSearch: (e) => {
            let value = e.target.value
            dispatch(changeSearchCreator(value))
            clearTimeout(filterTimeOutId)
            filterTimeOutId = setTimeout(() => {
                dispatch(setFilterCreator(value))
            }, 2000)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsContainer))