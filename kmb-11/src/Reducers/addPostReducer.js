import React from 'react';
import avatar from "../Components/Profile/img/avatar.jpg";

let initialStateForPost = {
    messageArray: [
        {avatar: avatar, post: "Эй, почему никто не лайкнул в прошлом посте?!"},
        {avatar: avatar, post: "Ну что?! Давайте лайкать теперь этот пост."}
    ],
    currentPost: ''
};

const ADD_POST = 'NETWORK/PROFILE/CREATE_POSTS/ADD_POST';
const CHANGE_NEW_POST = 'NETWORK/PROFILE/CREATE_POSTS/CHANGE_NEW_POST';

const addPostReducer = (state = initialStateForPost, action) => {
    let stateCopy = {
        ...state,
        messageArray: state.messageArray.map((objEl) => (
            {...objEl}
        ))
    };
    switch (action.type) {
        case ADD_POST:
            stateCopy.messageArray.push({avatar: avatar, post: state.currentPost});
            stateCopy.currentPost = "";
            return stateCopy;
        case CHANGE_NEW_POST:
            stateCopy.currentPost = action.newPost;
            return stateCopy;
        default:
            return state;
    }
};

export const changeCurrentPost = (currentText) => {
    return {
        type: CHANGE_NEW_POST,
        newPost: currentText
    }
};
export const addPost = () => {
    return {
        type: ADD_POST
    }
};

export default addPostReducer;
