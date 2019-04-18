import React from 'react';
import '../Profile/Profile.css';
import wallpaper from './img/wallpaper.jpg';
import UserContainer from "./UserContainer";
import CreatePostsContainer from "./CreatePostsContainer";
import {connect} from 'react-redux';
import Posts from "./Posts";

const Profile = (props) => {
    let posts = props.messageArray.map((el) => {
        return <Posts photo={props.photo} post={el.post}/>
    });
    return (
        <div>
            <img src={wallpaper} className={'wallpaper'}/>
            <UserContainer/>
            <CreatePostsContainer/>
            <div className={'posts-box-wrapper'}>
                {posts}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        messageArray: state.message.messageArray,
        currentPost: state.message.currentPost,
        photo: state.profileData.photos.small
    }
};
const ConnectedProfileComponent = connect(mapStateToProps)(Profile);

export default ConnectedProfileComponent;