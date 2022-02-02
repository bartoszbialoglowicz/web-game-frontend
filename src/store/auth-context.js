import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    data: {
        token: '',
        name: '',
        email: '',
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
        id: null
    } : JSON.parse(localStorage.getItem('data'));
    const [data, setData] = useState(tmp);

    const userIsLoggedIn = !!data.token;

    const loginHandler = (data) => {
        const tmpObj = {
            token: data.token,
            name: data.user,
            email: data.email,
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