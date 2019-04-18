import {combineReducers, createStore, applyMiddleware} from "redux";
import addPostReducer from "./Reducers/addPostReducer";
import profilePageReducer from "./Reducers/profilePageReducer";
import dialogPageReducer from "./Reducers/dialogPageReducer";
import loginPageReducer from "./Reducers/loginPageReducer";
import authReducer from "./Reducers/authReducer";
import thunk from "redux-thunk";
import friendsReducer, {addNextFriendsSaga} from "./Reducers/friendsReducer";
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleWare from 'redux-saga';
import {oneFriendReducer} from "./Reducers/oneFriendReducer";

const superReducer = combineReducers({
    message: addPostReducer,
    profileData: profilePageReducer,
    dialogData: dialogPageReducer,
    login: loginPageReducer,
    auth: authReducer,
    friends: friendsReducer,
    oneFriend: oneFriendReducer,
    form: formReducer
});

const sagaMiddleWare = createSagaMiddleWare() //создание сага мидлвар
const store = createStore(superReducer, applyMiddleware(thunk, sagaMiddleWare));//подключение сага мидлвор

sagaMiddleWare.run(addNextFriendsSaga) //запуск слушателя саг

export default store;
