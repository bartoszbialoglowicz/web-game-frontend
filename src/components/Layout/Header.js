import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Header = () => {
    const authCtx = useContext(AuthContext);
    
    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
      <header>
          <div><p>{authCtx.data.name}</p></div>
          <div><p onClick={logoutHandler}>Sign Out</p></div>
          <div>Gold: {authCtx.data.gold}</div>
          <div>LVL: {authCtx.data.lvl}</div>
          <div>XP: {authCtx.data.experience}</div>
          <Link to={'/'}><div><p>Home</p></div></Link>
          <Link to={'quests'}><div><p>Quests</p></div></Link>
          <Link to={'store'}><div><p>Store</p></div></Link>
          <Link to={'collection'}><div><p>Collection</p></div></Link>
      </header>
  );
};

export default Header;