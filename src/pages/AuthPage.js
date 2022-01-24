import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import AuthContext from "../store/auth-context";

const AuthPage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    if (isLoggedIn) {
        return <Navigate to='/' />
    }
    
    return <Auth />
};

export default AuthPage;