import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    data: {
        token: '',
        name: '',
        email: '',
        gold: 0,
        experience: 0,
        lvl: 1,
        id: null
    },
    login: (data) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const tmp = localStorage.getItem('data') === null ? {
        token: '',
        name: '',
        email: '',
        gold: 0,
        experience: 0,
        lvl: 1,
        id: null
    } : JSON.parse(localStorage.getItem('data'));
    const [data, setData] = useState(tmp);

    const userIsLoggedIn = !!data.token;

    const loginHandler = (data) => {
        const tmpObj = {
            token: data.token,
            name: data.user,
            email: data.email,
            gold: data.gold,
            experience: data.experience,
            lvl: data.lvl,
            id: data.id
        };
        setData(tmpObj);
        localStorage.setItem('data', JSON.stringify(tmpObj));
    };

    const logoutHandler = () => {
        setData({
            token: null,
            name: '',
            email: '',
            gold: 0,
            experience: 0,
            lvl: 1,
            id: null
        });
        localStorage.clear('data');
    }

    const contextValue = {
        data: data,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;