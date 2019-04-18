import React from 'react';
import {getOneFriendInformation, getOneFriendStatus} from "../Dall/oneFriends-service";

let initialState = {
    fullName: null,
    userId: null,
    status: null,
    photos: {
        large: null,
        small: null,
        default: 'http://onapi.gob.do/images/avatar.png'
    },
    contacts: {
        facebook: null,
        github: null,
        instagram: null,
        mainLink: null,
        twitter: null,
        vk: null,
        website: null,
        youtube: null
    },
    aboutMe: null,
    lookingForAJob: false,
    lookingForAJobDescription: null,
}

const GET_FRIEND_INFORMATION = 'NETWORK/ONE_FRIEND/GET_FRIEND_INFORMATION'

export const oneFriendReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case GET_FRIEND_INFORMATION:
            stateCopy.fullName = action.newInformation.fullName
            stateCopy.status = action.newStatus
            stateCopy.userId = action.newInformation.userId
            stateCopy.photos.large = action.newInformation.photos.large
            stateCopy.photos.small = action.newInformation.photos.small
            stateCopy.contacts = {...action.newInformation.contacts}
            stateCopy.aboutMe = action.newInformation.aboutMe
            stateCopy.lookingForAJob = action.newInformation.lookingForAJob
            stateCopy.lookingForAJobDescription = action.newInformation.lookingForAJobDescription
            return stateCopy
        default:
            return state
    }
}

export const getOneFriendThunk = (friendId) => {
    return async (dispatch)=> {
        let newInformation = await getOneFriendInformation(friendId)
        let newStatus = await getOneFriendStatus(friendId)
        dispatch(getInformationCreator(newInformation, newStatus))
    }
}

const getInformationCreator = (newInformation, newStatus) => {
    return {
        type: GET_FRIEND_INFORMATION,
        newInformation,
        newStatus
    }
}