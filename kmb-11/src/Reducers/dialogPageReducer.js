import React from 'react';
import avatar from "../Components/Profile/img/avatar.jpg";

let initialStateForDialog = {
    dialogCorrespondents: [
        {avatar: avatar, firstName: 'Иван', id: 0},
        {
            avatar: 'https://yt3.ggpht.com/a-/AAuE7mBp_-fLBV3N4wKICQOowwoh8cNMRP3IXx0Xww=s900-mo-c-c0xffffffff-rj-k-no',
            firstName: 'Анджелина',
            id: 1
        },
        {
            avatar: 'https://cdn.fishki.net/upload/post/201503/10/1458852/7d8f4f9762637c447ea6b16f7c7fb88d.jpg',
            firstName: 'Чак Норис',
            id: 2
        },
        {
            avatar: 'https://thefancy-media-ec3.thefancy.com/UserImages/original/pian03_407f7e8f8b8d.jpg',
            firstName: 'Меган',
            id: 3
        }
    ],
    dialogMessages: [
        [],
        [{id: 0, message: 'Привет!'}, {id: 0, message: 'Чего не отвечаешь? Это Иван Стечкин из Олени Булз!'}, {
            id: 1,
            message: 'Аааа, бомжур, Иван! Зови даму в ресторан!'
        }],
        [{id: 0, message: 'Привет!'}, {id: 2, message: 'Привет, чертяка!'}, {id: 2, message: 'Ну как ты?!'}, {
            id: 0,
            message: 'Да в шоколаде: купил корову, козу, коня, строю баню. Летом улетаю на три месяца в Лос-Анджелес кататься на ручных алигаторах!!! А ты там как? Давно тебя не слышно.'
        }],
        [{id: 0, message: 'Привет!'}, {id: 3, message: 'Как ты там, Ванюша?'}, {
            id: 3,
            message: 'фыдвадлаывоа.'
        }, {id: 0, message: 'Что-что???'}, {id: 3, message: 'Ой, это я случайно набрала... Сорян'}],
    ],
    currentCorresspondentId: ''
};

const CHANGE_DIALOG_ON_CLICK = 'NETWORK/DIALOG/SHOW_DIALOG/CHANGE_DIALOG_ONCLICK';
const CHANGE_DIALOG_ON_URL = 'NETWORK/DIALOG/SHOW_DIALOG/CHANGE_DIALOG_ON_URL';

const dialogPageReducer = (state = initialStateForDialog, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case CHANGE_DIALOG_ON_CLICK:
            stateCopy.currentCorresspondentId = action.currentCorresspondentId.currentTarget.id;
            return stateCopy;
        case CHANGE_DIALOG_ON_URL:
            stateCopy.currentCorresspondentId = action.currentCorresspondentId;
            return stateCopy;
        default:
            return state;
    }
};

export const chooseDialogOnClickDispatch = (corresspondentId) => {
    return {
        type: CHANGE_DIALOG_ON_CLICK,
        currentCorresspondentId: corresspondentId
    }
};
export const chooseDialogOnUrlDispatch = (corresspondentId) => {
    return {
        type: CHANGE_DIALOG_ON_URL,
        currentCorresspondentId: corresspondentId
    }
};

export default dialogPageReducer;
