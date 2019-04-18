import React from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
        return (
            <div className={'menu'}>
                <div><Link to={'/profile'}>Профиль</Link></div>
                <div><Link to={`/friends`}>Друзья</Link></div>
                <div><Link to={`/dialogs`}>Сообщения</Link></div>
                <div><Link to={'/news'}>Новости</Link></div>
                <div><Link to={'/music'}>Музыка</Link></div>
                <div><Link to={'/setting'}>Настройки</Link></div>
            </div>
        );
}

export default Sidebar;
