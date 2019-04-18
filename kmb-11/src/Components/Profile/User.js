import React from 'react';
import '../Profile/Profile.css';
import {Redirect, withRouter} from "react-router";

const User = (props) => {
    let redirectToEditPage = (e) => {
        //e.preventDefault();
        props.history.push('/edit-profile');
    }

    return (
        <div className={'user-box'}>
            <div className={'user-box-avatar'}>
                <img src={props.avatar} className={'avatar'}/>
                <button className={'user-box-edit'} onClick={redirectToEditPage}>
                    Редактировать
                </button>
            </div>
            <div className={'user-box-information'}>
                <div className="user-name">
                    <em>{props.fullName}</em>
                </div>
                <div className={'user-status'}>
                    {props.statusChangeFlag ? <div>
                            <div>
                                <textarea onChange={props.addCurrentStatusText} value={props.currentStatus}></textarea>
                            </div>
                            <div>
                                <button onClick={props.addNewStatus}>
                                    Изменить
                                </button>
                                <button onClickCapture={() => {
                                    props.changeStatus(false)
                                }}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                        :
                        <span onClick={() => {
                            props.changeStatus(true)
                        }}>
                            <b>Статус:</b> <em>{props.status}</em>
                        </span>}
                </div>
                <div>
                    <b>Ищу ли работу:</b> <em>{props.lookingForAJob ? "Да" : "Нет"}</em>
                </div>
                <div>
                    <b>Описание поиска работы:</b> <em>{props.lookingForAJobDescription}</em>
                </div>
                <div>
                    <b>Обо мне:</b> <em>{props.aboutMe}</em>
                </div>
                <div>
                    <b>Контакты:</b><em>
                    <ul>
                        {Object.keys(props.contacts)
                            .filter(key => !!props.contacts[key])
                            .map(key => {
                                return <li>{props.contacts[key]}</li>
                            })
                        }

                    </ul>
                </em>
                </div>
            </div>
        </div>
    );
};

export default withRouter(User);