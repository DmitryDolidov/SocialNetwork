import React from 'react';
import '../Profile/Profile.css';

const CreatePosts = (props) => {
    return (
        <div className={'createposts-box'}>
            <div className={'createposts-titul'}>
                Мои записи
            </div>
            <div>
                <textarea onChange={(e) => {
                    props.changePost(e.currentTarget.value);
                }} placeholder={"Что у вас нового..."} value={props.defaultCurrentPost}>
                </textarea>
            </div>
            <div>
                <button className={'createposts-button'} onClick={props.addPost}>
                    Отправить
                </button>
            </div>
        </div>
    );
}

export default CreatePosts;