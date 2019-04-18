import React from 'react';
import {friendsService} from "../Dall/friends-service";
import {createSelector} from "reselect";
import {takeEvery, put} from 'redux-saga/effects'

let initialStateForFriends = {
    friendsInfo: [],
    currentPage: 1,
    friendsCount: null,
    returnCount: 4,
    error: null,
    searchText: "",
    filter: ""
};

const SAVE_FRIENDS_INFO = 'NETWORK/FRIENDS/SAVE_FRIENDS_INFO';
const ADD_NEXT_FRIENDS = 'NETWORK/FRIENDS/ADD_NEXT_FRIENDS';
const SET_ERROR = 'NETWORK/FRIENDS/SET_ERROR';
const CLEAR_AFTER_LEAVE = 'NETWORK/FRIENDS/CLEAR_AFTER_LEAVE';
const CHANGE_SEARCH_TEXT = 'NETWORK/FRIENDS/NETWORK/FRIENDS/CLEAR_AFTER_LEAVE'
const SET_FILTER = 'NETWORK/FRIENDS/NETWORK/FRIENDS/SET_FILTER'


const friendsReducer = (state = initialStateForFriends, action) => {
    let stateCopy = {...state}
    stateCopy.friendsInfo = [...state.friendsInfo]
    switch (action.type) {
        case SAVE_FRIENDS_INFO:
            action.newFriendsInfo.map(el => {
                stateCopy.friendsInfo.push(el)
            })
            return stateCopy
        case ADD_NEXT_FRIENDS:
            stateCopy.currentPage = stateCopy.currentPage + 1
            return stateCopy
        case SET_ERROR:
            stateCopy.error = "Пользователи закончились"
            return stateCopy
        case CLEAR_AFTER_LEAVE:
            stateCopy.friendsInfo = []
            stateCopy.currentPage = 1
            stateCopy.friendsCount = null
            stateCopy.error = null
            return stateCopy
        case CHANGE_SEARCH_TEXT:
            stateCopy.searchText = action.searchText
            return stateCopy
        case SET_FILTER:
            stateCopy.filter = action.filter
            return stateCopy
        default:
            return state;
    }
};

export const friendsReturnThunk = () => {
    return async (dispatch, getState) => {
        let state = getState();
        let result = await friendsService.getUsers(state.friends.returnCount, state.friends.currentPage);
        if (result.totalCount === state.friends.friendsInfo.length) {
            dispatch(setErrorCreator())
        } else {
            dispatch(newFriendsInfoCreator(result.items))
        }
    }
}

//Saga
export function* getAddNextFriendsSaga() {
    yield put(addNextFriendsCreator())//аналогия dispatch(addNextFriendsCreator())
    yield put(friendsReturnThunk())
    //let result = асинхронный запрос
}
//Saga Watcher - слушатель саг
export function* addNextFriendsSaga() {
    yield takeEvery("ADD_NEXT_FRIENDS_SAGA", getAddNextFriendsSaga) //связывает сагу getAddNextFriendsSaga с
    //action creator addNextFriendsSagaCreator, который диспатчится при клике на кнопку "Показать еще"
}
//action creators for Saga
export const addNextFriendsSagaCreator = () => {
    return {
        type: "ADD_NEXT_FRIENDS_SAGA"
    }
}

//action creators
export const setFilterCreator = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }
}

export const changeSearchCreator = (searchText) => {
    return {
        type: CHANGE_SEARCH_TEXT,
        searchText
    }
}

const newFriendsInfoCreator = (newFriendsArray) => {
    return {
        type: SAVE_FRIENDS_INFO,
        newFriendsInfo: newFriendsArray
    }
}

const addNextFriendsCreator = () => {
    return {
        type: ADD_NEXT_FRIENDS
    }
}

const setErrorCreator = () => {
    return {
        type: SET_ERROR
    }
}

export const clearAfterLeaveCreation = () => {
    return {
        type: CLEAR_AFTER_LEAVE
    }
}

//Selectors
export const friendsInfoSelector = (state) => {
    return state.friends.friendsInfo
}

export const filterSelector = (state) => {
    return state.friends.filter
}

export const getFilteredUsersReselector = createSelector(
    friendsInfoSelector,//первый селектор от которого зависит перериросвка компонента
    filterSelector,//второй селектор от которого зависит перерисовка компонента
    (users, filterText) => {
        return users.filter(el =>
            el.name.toUpperCase().indexOf(filterText.toUpperCase()) > -1)
    })//третьим параметром передается колбэк функция, где users и filterText это результаты работы
//селекторов. В этом колбэке возвращается наша фильтровка массива. Это будет выполнятся только
//когда будут происходит изменения в users и filterText

export default friendsReducer;
