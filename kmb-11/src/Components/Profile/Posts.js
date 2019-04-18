import React from 'react';
import '../Profile/Profile.css';

const Posts = (props) => {
    return (
        <div className={'posts-box'}>
            <div className="posts-avatar">
                <img src={props.photo} />
            </div>
            <div className="posts-message">
                {props.post}
            </div>
        </div>
    );
};

export default Posts;