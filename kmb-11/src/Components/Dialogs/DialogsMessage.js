import React from 'react';
import './Dialogs.css';

const DialogsMessage = (props) => {

    return (
        <div className={"dialogsMessage_box"}>
            <div className="dialogsMessage_user">
                <div className={"dialogsMessage_avatar"}>
                    <img src={props.avatar}/>
                </div>
                <div className={"dialogsMessage_name"}>
                    {props.name}
                </div>
            </div>
            <div className={"dialogsMessage_message"}>
                {props.message}
            </div>
        </div>
    );
}

export default DialogsMessage;