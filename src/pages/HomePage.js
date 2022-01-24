import { useContext } from "react"
import { Navigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import AuthContext from "../store/auth-context"

const HomePage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    if (!isLoggedIn) {
        return <Navigate to='/auth' />
    }
    
    return <Header></Header>
}

export default HomePage;