import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    data: {
        token: '',
        name: '',
        email: ''
    },
    login: (data) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const initialData = JSON.parse(localStorage.getItem('data'));
    const [data, setData] = useState(initialData);

    const userIsLoggedIn = !!data.token;

    const loginHandler = (data) => {
        setData({
            token: data.token,
            name: data.user,
            email: data.email
        });
        localStorage.setItem('data', JSON.stringify({
            token: data.token,
            name: data.user,
            email: data.email
        }));
    };

    const logoutHandler = () => {
        setData({
            token: null,
            name: '',
            email: ''
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