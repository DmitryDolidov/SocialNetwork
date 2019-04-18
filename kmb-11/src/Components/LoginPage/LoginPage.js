import React from 'react';
import './LoginPage.css';
import Login from "./LoginContainer";

const LoginPage = () => {
    return (
        <div className={'page-box'}>
            <div className={'content-wrapper'}>
                <Login/>
            </div>
        </div>
    );
}

export default LoginPage;