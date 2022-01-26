import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";

import Collection from "../../pages/Home/Collection";
import Quests from '../../pages/Home/Quests';
import Packs from "../../pages/Home/Packs";
import Board from '../../pages/Home/Board';
import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import ResourcesContext from '../../store/resources-context';
import { useState } from "react/cjs/react.development";

const Layout = () => {
    const [errors, setErrors] = useState(null);
    const authCtx = useContext(AuthContext);
    const resourcesCtx = useContext(ResourcesContext);
    const {error, sendRequest} = useHttp();

    const setResources = (data) => {
        resourcesCtx.setCharacters(data[0].characters);
        resourcesCtx.setItems(data[0].items);
    }

    useEffect(() => {
        const payload = {
            type: 'GET',
            token: authCtx.data.token
        }
        
        const errors = (data) => {
            setErrors(data);
        }
        sendRequest('http://localhost:8000/api/resources/userresources/', null, payload, setResources, errors);
    }, []);

    return (
        <header>
            {errors && <p>Server error</p>}
            <Header />
            <Routes>
                <Route index element={<Board />}/>
                <Route path='collection' element={<Collection />}/>
                <Route path='packs' element={<Packs />}/>
                <Route path='quests' element={<Quests />}/>
            </Routes>
            <Footer />    
        </header>
    )
}

export default Layout;