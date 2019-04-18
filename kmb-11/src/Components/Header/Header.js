import React from 'react';
import './Header.css';
import logo from './img/mylogo.jpg';

const Header = ({logInState, userInfo, ...props}) => {

    return (
        <div className={'logo'}>
            <div><img src={logo}/></div>
            <div className={'titulBox'}>
                <h3 className={'firstTitulWord'}>
                    Social
                </h3>
                <h2 className={'secondTitulWord'}>
                    Network
                </h2>
            </div>
            {logInState && <div className={'login-titul-box'}>
                <div className={'item-1'}>Приветствуем, <i>{userInfo.userName}</i>!</div>
                <span className={'item-2'} onClick={props.logOut}>Выйти</span></div>}
        </div>
    )

}

export default Header;

