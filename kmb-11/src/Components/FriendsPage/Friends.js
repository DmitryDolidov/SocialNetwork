import React from 'react';
import styles from './FriendsPage.module.css';
import {NavLink} from "react-router-dom";


const Friends = (props) => {

    let friendsList = props.filteredUsers
        .map(el => {
            let status = null
            el.status ? status = el.status : status = 'Нет статуса'

            return <NavLink to={`/friends/${el.id}`} className={styles.friendLink}>
                <div className={styles.friendBox} key={el.id}>
                    <div className={styles.friendAvatar}>
                        <img src={el.photos.large ? el.photos.large : "http://onapi.gob.do/images/avatar.png"} alt=""/>
                    </div>
                    <div className="friend-name">
                        {el.name}
                    </div>
                    <div className="friends-status">
                        {status}
                    </div>
                    <hr/>
                </div>
            </NavLink>
        })

    return (
        <div>
            <div className={styles.searchBox}>
                <input type={"text"} placeholder={"Поиск"} value={props.searchText} onChange={props.changeSearch}/>
            </div>
            {friendsList}
            <div className={styles.error}>
                {props.error}
            </div>
            <button className={styles.alsoView} onClick={props.addNextFriends} disabled={props.error ? true : false}>Смотреть еще</button>
        </div>
    );
}

export default Friends;