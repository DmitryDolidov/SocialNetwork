import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/HeaderContainer";
import Profile from "../Profile/Profile";
import {connect} from 'react-redux';
import Footer from "../Footer/Footer";

const ProfilePage = (props) => {

    return (
        <div className={'page-box'}>
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'content-wrapper'}>
                <div className={'sidebar-block'}>
                    <Sidebar/>
                </div>
                <div className={'content'}>
                    <Profile/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        LogInState: state.auth.LogInState
    }
};

const ConnectedProfilePage = connect(mapStateToProps, null)(ProfilePage);

export default ConnectedProfilePage;