import React from 'react';
import './Dialogs.css';

const Correspondent = (props) => {

    let currentCorrespondentClass = props.correspondentId == props.currentCorresspondentId ?
        'currentCorrespondentClass': '';

    return (
            <div className={`correspondent_box ${currentCorrespondentClass}`} id={props.correspondentId} onClick={props.chooseDialog}>
                    <div className={"correspondent_avatar"}>
                        <img src={props.avatar} />
                    </div>
                    <div className={"correspondent_name"}>
                        {props.name}
                    </div>
            </div>
    );
};

export default Correspondent;
