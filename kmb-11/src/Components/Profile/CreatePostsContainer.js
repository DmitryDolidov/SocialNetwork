import React from 'react';
import '../Profile/Profile.css';
import {connect} from 'react-redux';
import {changeCurrentPost, addPost} from '../../Reducers/addPostReducer';
import CreatePosts from './CreatePosts';

let mapStateToProps = (state) => {
    return {
        defaultCurrentPost: state.message.currentPost
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changePost: (currentText) => {
            dispatch(
                changeCurrentPost(currentText)
            );
        },
        addPost: () => {
            dispatch(
                addPost()
            );
        }
    }
};
const CreatePostsContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePosts);
export default CreatePostsContainer;