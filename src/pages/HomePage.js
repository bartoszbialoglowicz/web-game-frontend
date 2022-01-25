import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Layout from "../components/Layout/Layout";
import useHttp from "../hooks/use-http";
import AuthContext from "../store/auth-context"
import { ResourcesContextProvider } from "../store/resources-context";

const HomePage = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    useEffect(() => {
        //sendRequest('http://localhost:8000/api/resources/userresources/', 'GET', authCtx.data.token, setResources)
    })

    if (!isLoggedIn) {
        return <Navigate to='/auth' />
    }
    
    return <ResourcesContextProvider>
            <Layout />
        </ResourcesContextProvider>
}

export default HomePage;