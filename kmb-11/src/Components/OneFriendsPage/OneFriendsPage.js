import React from 'react';
import './OneFriendsPage.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/HeaderContainer";
import {withRouter} from "react-router-dom";
import OneFriendsContainer from "./OneFriendsContainer";
import Footer from "../Footer/Footer";

const OneFriendsPage = (props) => {

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
                    <OneFriendsContainer friendId={props.match.params.userId} />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withRouter(OneFriendsPage);