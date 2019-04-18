import React from 'react';
import './DialogsPage.css';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/HeaderContainer";
import Dialogs from "../Dialogs/Dialogs";
import {withRouter} from "react-router-dom";
import Footer from "../Footer/Footer";

const DialogsPage = () => {

    return (
        <div className={'page-box'}>
            <div className={'header'}>
                <Header/>
            </div>
            <div className="content-wrapper">
                <div className={'sidebar-block'}>
                    <Sidebar/>
                </div>
                <div className={'content'}>
                    <Dialogs />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const ConnectedDialogsPage = withRouter(DialogsPage);

export default ConnectedDialogsPage;