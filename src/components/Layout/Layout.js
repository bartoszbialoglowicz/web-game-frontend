import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import Collection from "../../pages/Home/Collection";
import Quests from '../../pages/Home/Quests';
import Packs from "../../pages/Home/Packs";
import Board from '../../pages/Home/Board';

const Layout = () => {
    return (
        <header>
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