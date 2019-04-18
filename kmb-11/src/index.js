import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppComponent from './Components/App/App';
import {Provider} from "react-redux";
import store from './store';
import axios from "./Dall/axios-instance";
import {setLogInState, setMeData} from "./Reducers/authReducer";

ReactDOM.render(
    <div>Loading...</div>, document.getElementById('page')
);

axios.get('auth/me').then(result => {
        if (result.data.resultCode === 0) {
            store.dispatch(setMeData(result.data.data.id))
            store.dispatch(setLogInState(true))
        }

    ReactDOM.render(
        <Provider store={store}>
            <AppComponent />
        </Provider>, document.getElementById('page')
    );
})
serviceWorker.unregister();
