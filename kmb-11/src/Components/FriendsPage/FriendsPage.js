import React from 'react';
import './FriendsPage.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/HeaderContainer";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import FriendsContainer from "./FriendsContainer";
import Footer from "../Footer/Footer";

const FriendsPage = () => {

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
                    <FriendsContainer />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        LogInState: state.auth.LogInState,

    }
};

const ConnectedDialogsPage = withRouter(connect(mapStateToProps, null)(FriendsPage));

export default ConnectedDialogsPage;