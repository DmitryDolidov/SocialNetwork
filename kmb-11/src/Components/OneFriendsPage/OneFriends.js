import React from 'react';

const OneFriends = (props) => {
    let {fullName, status, photos, contacts, aboutMe, lookingForAJob, lookingForAJobDescription} = props
    let sortContactsKeys = Object.keys(contacts).filter((key) => {
        return !!contacts[key]
    })
    let sortContacts = sortContactsKeys.length ?
        sortContactsKeys
            .map(key => {
                return <li key={`contacts-${key}`}>{contacts[key]}</li>
            }) : "Не заполнено"

    return (
        <div className={'user-box'}>
            <div className={'user-box-avatar'}>
                <img src={photos.large ? photos.large : photos.default} className={'avatar'}/>
            </div>
            <div className={'user-box-information'}>
                <div className="user-name">
                    <em>{fullName}</em>
                </div>
                <div className={'user-status'}>
                        <span>
                            <b>Статус:</b> <em>{status ? status : "не указан"}</em>
                        </span>
                </div>
                <div>
                    <b>Ищет ли работу:</b> <em>{lookingForAJob ? "Да" : "Нет"}</em>
                </div>
                <div>
                    <b>Описание поиска работы:</b>
                    <em> {lookingForAJobDescription ? lookingForAJobDescription : " Не заполнено"}</em>
                </div>
                <div>
                    <b>Обо мне:</b> <em>{aboutMe ? aboutMe : "Не заполнено"}</em>
                </div>
                <div>
                    <b>Контакты:</b><em> {sortContacts == "Не заполнено" ? sortContacts : <ul>{sortContacts}</ul>}
                </em>
                </div>
            </div>
        </div>
    )
}

export default OneFriends;