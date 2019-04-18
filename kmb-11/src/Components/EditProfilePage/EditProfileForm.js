import React from 'react'
import {Field} from 'redux-form'
import styles from "./EditProfilePage.module.css";

let EditProfileForm = props => {
    const {handleSubmit} = props  //деструктуризация (берем из объекта Props свойство handleSubmit и присваеваем его переменной handleSubmit
    return (
        <form onSubmit={handleSubmit} className={styles.editInformation}>
            <div className={styles.titul}>
                <h2>
                    Редактирование профиля
                </h2>
            </div>
            <div className={styles.mainInformation}>
                <div>
                    <h3>Основные данные:</h3>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redFullName">Имя</label><br/>
                    <Field name="redFullName" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redAboutMe">Пару слов обо мне</label><br/>
                    <Field name="redAboutMe" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redLookingForAJob">Ищите ли работу?</label><br/>
                    <Field name="redLookingForAJob" component="input" type="checkbox"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redLookingForAJobDescription">Описание работы</label><br/>
                    <Field className={styles.workDescriptionField} name="redLookingForAJobDescription" component="textarea" type="text"/>
                </div>
            </div>
            <div className={styles.photo}>
                <div>
                    <h3>Ваше фото:</h3>
                    <div className={styles.fileField}>
                        <input
                            type='file'
                            accept='.jpg, .png, .jpeg'
                            onChange={props.update.bind(this)}
                        />
                    </div>
                    <div className="editPhotoResult">
                        {props.updatePhotoStatus === 'success' ?
                            <p className={styles.editDataSuccess}>Фотография успешно загружена</p> : null}
                        {props.updatePhotoStatus === 'error' ? props.updatePhotoErrorText.map((error => {
                            return <p className={styles.editDataError}>${error}</p>
                        })) : null}
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <div>
                    <h3>Контакты:</h3>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redFacebook">Facebook</label><br/>
                    <Field name="redFacebook" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redGitHub">GitHub</label><br/>
                    <Field name="redGitHub" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redInstagram">Instagram</label><br/>
                    <Field name="redInstagram" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redMainLink">MainLink</label><br/>
                    <Field name="redMainLink" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redTwitter">Twitter</label><br/>
                    <Field name="redTwitter" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redVk">Vk</label><br/>
                    <Field name="redVk" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redWebSite">WebSite</label><br/>
                    <Field name="redWebSite" component="input" type="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="redYoutube">Youtube</label><br/>
                    <Field name="redYoutube" component="input" type="text"/>
                </div>
                <div className="editDataResult">
                    {props.editDataStatus === 'success' ?
                        <p className={styles.editDataSuccess}>Информация успешно изменена</p> : null}
                    {props.editDataStatus === 'error' ? props.editDataErrorText.map((error => {
                        return <p className={styles.editDataError}>${error}</p>
                    })) : null}
                </div>
            </div>
            <button type="submit">Редактировать</button>

        </form>
    )
}

export default EditProfileForm