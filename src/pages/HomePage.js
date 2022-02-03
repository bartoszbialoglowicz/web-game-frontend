import { useContext } from "react"
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AuthContext from "../store/auth-context"
import { ResourcesContextProvider } from "../store/resources-context";
import { TeamContextProvider }from "../store/team-context";

const HomePage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    if (!isLoggedIn) {
        return <Navigate to='/auth' />
    }
    
    return <ResourcesContextProvider>
            <TeamContextProvider>
                <Layout />
            </TeamContextProvider>
        </ResourcesContextProvider>
}

export default HomePage;