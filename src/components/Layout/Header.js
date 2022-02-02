import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './Header.module.css';
import cancel from '../../assets/icons/cancel.png';
import { useState } from 'react/cjs/react.development';

import list from '../../assets/icons/menu.png';
import signOut from '../../assets/icons/sign-out.png';
import home from '../../assets/icons/tent.png';
import quests from '../../assets/icons/certificate.png';
import store from '../../assets/icons/treasure.png';
import collection from '../../assets/icons/card-game.png';
import ResourcesContext from '../../store/resources-context';

const Header = () => {
    const [isHiden, setIsHiden] = useState(false);
    const authCtx = useContext(AuthContext);
    const resourcesCtx = useContext(ResourcesContext);

    let hideClass = isHiden ? classes.hidden : '';

    const hideElementHandler = () => {
        setIsHiden(!isHiden);
    }
    
    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <Fragment>
            <header className={classes.nav + ' ' + hideClass}>
                <div className={classes.inner + ' ' + hideClass}>
                    <div className={classes.hideIcon} onClick={hideElementHandler}>
                        <img src={cancel} alt="close"></img>
                    </div>
                    <ul>
                        <li><p>Welcome, {authCtx.data.name}</p>
                        <p>Gold: {resourcesCtx.gold}</p>
                        <p>LVL: {resourcesCtx.lvl}</p>
                        <p>XP: {resourcesCtx.experience}</p></li>
                        <li><img src={home} alt='home' /><Link to={'/'}>Home</Link></li>
                        <li><img src={quests} alt='quests' /><Link to={'quests'}>Quests</Link></li>
                        <li><img src={store} alt='store' /><Link to={'store'}>Store</Link></li>
                        <li><img src={collection} alt='collection' /><Link to={'collection'}>Collection</Link></li>
                        <li className={classes.signOut} onClick={logoutHandler}><img src={signOut} alt='signout'/><p>Sign Out</p></li>
                    </ul>
                </div>
            </header>
            <div className={!isHiden ? classes.hidden : classes.showIcon} onClick={hideElementHandler}>
                <img src={list} alt="menu" />
            </div>
        </Fragment>
      
  );
};

export default Header;