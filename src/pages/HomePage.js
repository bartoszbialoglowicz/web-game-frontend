import { useContext } from "react"
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AuthContext from "../store/auth-context"

const HomePage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    if (!isLoggedIn) {
        return <Navigate to='/auth' />
    }
    
    return <Layout />
}

export default HomePage;