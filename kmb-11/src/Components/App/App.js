import React from 'react';
import './App.css';
import ProfilePage from "../ProfilePage/ProfilePage";
import DialogsPage from "../DialogsPage/DialogsPage";
import LoginPage from "../LoginPage/LoginPage";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import FriendsPage from "../FriendsPage/FriendsPage";
import EditProfilePage from "../EditProfilePage/EditProfilePage";
import OneFriendsPage from "../OneFriendsPage/OneFriendsPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/profile' render={() => <ProfilePage/>}/>
                    <Route path={'/dialogs/:userId?'} render={() => <DialogsPage/>}/>
                    <Route exact path='/friends' render={() => <FriendsPage/>}/>
                    <Route path='/friends/:userId?' render={() => <OneFriendsPage/>}/>
                    <Route path={'/login'} render={() => <LoginPage/>}/>
                    <Route path={'/edit-profile'} render={() => <EditProfilePage />}/>
                    <Route exact path={'/'} render={() => <ProfilePage/>}/>
                    <Route path={'/'} render={() => <div>404</div>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
