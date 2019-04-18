import React from 'react';
import axios from "../Dall/axios-instance";
import {profileService} from "../Dall/profile-service";

let initialStateForProfile = {
    aboutMe: "Информация не указана",
    contacts: {
        facebook: "",
        github: "",
        instagram: "",
        mainLink: "",
        twitter: "",
        vk: "",
        website: "",
        youtube: ""
    },
    photos: {
        small: null,
        large: null
    },
    status: "У вас нет статуса",
    lookingForAJob: false,
    lookingForAJobDescription: 'Ищу работу, знаю это это и это',
    fullName: null,
    statusChangeFlag: false,
    currentStatus: "",
    editDataErrorText: null,
    editDataStatus: null,
    updatePhotoStatus: null,
    updatePhotoErrorText: null
};

const SET_STATUS = 'NETWORK/PROFILE/SET_STATUS';
const GET_PROFILE_INFORMATION = 'NETWORK/PROFILE/GET_PROFILE_INFORMATION';
const CHANGE_STATUS = 'NETWORK/PROFILE/CHANGE_STATUS';
const EDIT_DATA = 'NETWORK/PROFILE/EDIT_DATA';
const EDIT_DATA_STATUS = 'NETWORK/PROFILE/EDIT_DATA_STATUS';
const EDIT_ERRORS = 'NETWORK/PROFILE/EDIT_DATA/EDIT_ERRORS';
const ADD_CURRENT_STATUS_TEXT = 'NETWORK/PROFILE/ADD_CURRENT_STATUS_TEXT';
const CHANGE_UPDATE_PHOTO_STATUS = 'NETWORK/PROFILE/EDIT_DATA/CHANGE_UPDATE_PHOTO_STATUS';

const profilePageReducer = (state = initialStateForProfile, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_STATUS:
            stateCopy.status = action.status
            stateCopy.currentStatus = action.status
            return stateCopy
        case CHANGE_STATUS:
            stateCopy.statusChangeFlag = action.flag
            return stateCopy
        case ADD_CURRENT_STATUS_TEXT:
            stateCopy.currentStatus = action.textareaObject.target.value
            return stateCopy
        case GET_PROFILE_INFORMATION:
            stateCopy.aboutMe = action.data.aboutMe
            stateCopy.contacts = {...action.data.contacts}
            stateCopy.lookingForAJob = action.data.lookingForAJob
            stateCopy.fullName = action.data.fullName
            stateCopy.lookingForAJobDescription = action.data.lookingForAJobDescription
            stateCopy.photos = {...action.data.photos}
            return stateCopy
        case EDIT_DATA:
            stateCopy.aboutMe = action.newData.aboutMe
            stateCopy.contacts = {...action.newData.contacts}
            stateCopy.lookingForAJob = action.newData.lookingForAJob
            stateCopy.fullName = action.newData.fullName
            stateCopy.lookingForAJobDescription = action.newData.lookingForAJobDescription
            return stateCopy
        case EDIT_DATA_STATUS:
            stateCopy.editDataStatus = action.editDataStatus
            stateCopy.editDataErrorText = action.editDataErrorText
            return stateCopy
        case CHANGE_UPDATE_PHOTO_STATUS:
            stateCopy.updatePhotoStatus = action.updatePhotoStatus
            stateCopy.updatePhotoErrorText = action.updatePhotoErrorText
            return stateCopy
        default:
            return state;
    }
};

//Saga

export const updatePhotoThunk = (data) => {
    return async (dispatch) => {
        let result = await profileService.updatePhoto(data)
        if (result.resultCode === 0) {
            dispatch(changeUpdatePhotoStatusCreator("success"))
        } else {
            dispatch(changeUpdatePhotoStatusCreator("error", result.messages))
        }
    }
}

//Thunks

export const getStatusThunk = () => {
    return (dispatch, getState) => {
        let state = getState();
        let userId = state.auth.userInfo.userId;
        axios.get(`profile/status/${userId}`)
            .then(
                result => {
                    dispatch(setStatus(result.data));
            }
        )
    }
}

export const addNewStatusThunk = () => {
    return (dispatch, getState) => {
        let state = getState();
        axios.put('profile/status', {status: state.profileData.currentStatus}).then(
            () => {
                dispatch(changeStatusCreator(false))
                dispatch(getStatusThunk())
            }
        );
    }
}

export const getProfileInformationThunk = () => {
    return async (dispatch, getState) => {
        let state = getState()
        let data = await profileService.getProfileInformation(state.auth.userInfo.userId)
        dispatch(getProfileInformationCreator((data)))
    }
}

export const editProfileDataThunk = (newData) => {
    return async (dispatch, getState) => {
        let state = getState()
        let result = await profileService.editNewProfileData(newData)
        if (result.data.resultCode === 0) {
            dispatch(editProfileDataCreator(newData))
            dispatch(editDataStatusCreator("success"))
        } else {
            let errors = result.data.messages;
            dispatch(editDataStatusCreator("error", errors))
        }
    }
}

//action creators
export const editDataStatusCreator = (editDataStatus, editDataErrorText) => {
    return {
        type: EDIT_DATA_STATUS,
        editDataStatus,
        editDataErrorText
    }
}

const editProfileDataCreator = (newData) => {
    return {
        type: EDIT_DATA,
        newData
    }
}

const setStatus = (statusFromServer) => {
    return {
        type: SET_STATUS,
        status: statusFromServer
    }
}

export const changeStatusCreator = (flag) => ({
    type: CHANGE_STATUS,
    flag: flag
})

export const addCurrentStatusTextCreator = (e) => ({
    type: ADD_CURRENT_STATUS_TEXT,
    textareaObject: e
})

const getProfileInformationCreator = (dataFromServer) => {
    return {
        type: GET_PROFILE_INFORMATION,
        data: dataFromServer
    }
}

export const changeUpdatePhotoStatusCreator = (updatePhotoStatus, updatePhotoErrorText) => {
    return {
        type: CHANGE_UPDATE_PHOTO_STATUS,
        updatePhotoStatus,
        updatePhotoErrorText
    }
}


export default profilePageReducer;
