import { Routes, Route } from "react-router-dom";
import { useEffect, useContext, Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

import Collection from "../../pages/Home/Collection";
import Quests from '../../pages/Home/Quests';
import StorePage from "../../pages/Home/Store";
import Board from '../../pages/Home/Board';
import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import ResourcesContext from '../../store/resources-context';
import { useState } from "react/cjs/react.development";
import Content from "./Content";
import { SERVER_URL } from "../../utils/Constant";
import TeamPage from "../../pages/Home/Team";

const Layout = () => {
    const [errors, setErrors] = useState(null);
    const authCtx = useContext(AuthContext);
    const resourcesCtx = useContext(ResourcesContext);
    const {error, sendRequest} = useHttp();

    const setResources = (data) => {
        resourcesCtx.setCharacters(data[0].characters);
        resourcesCtx.setItems(data[0].items);
        resourcesCtx.setGold(data[0].gold);
        resourcesCtx.setExperience(data[0].experience);
        resourcesCtx.setLvl(data[0].lvl);
    }

    useEffect(() => {
        const payload = {
            type: 'GET',
            token: authCtx.data.token
        }
        
        const errors = (data) => {
            setErrors(data);
        }
        const url = SERVER_URL + 'api/resources/userresources/';
        sendRequest(url, null, payload, setResources, errors);
    }, []);

    return (
        <Fragment>
            {errors && <p>Server error</p>}
            <Header />
            <Content>
                <Routes>
                    <Route index element={<Board />}/>
                    <Route path='collection' element={<Collection />}/>
                    <Route path='store' element={<StorePage />}/>
                    <Route path='quests' element={<Quests />}/>
                    <Route path='team' element={<TeamPage />}/>
                </Routes>
                <Footer />
            </Content>
        </Fragment>
    )
}

export default Layout;