import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/HeaderContainer";
import EditFormContainer from "./EditFormContainer";
import Footer from "../Footer/Footer";

const EditProfilePage = () => {

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
                    <EditFormContainer />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default EditProfilePage;