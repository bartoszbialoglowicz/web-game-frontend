import React, { useState } from "react";

const TeamContext = React.createContext({
    characters: [],
    traits: [],
    isEmpty: true,
    isIncomplete: true,
    setCharacters: (data) => {},
    setTraits: (data) => {}
});

export const TeamContextProvider = props => {
    const [characters, setCharacters] = useState([null, null, null, null, null]);
    const [traits, setTraits] = useState([]);
    
    const setTeamHandler = (data) => {
        console.log(data);
        setCharacters(data);
    }
    const setTraitsHandler = (data) => {
        setTraits(data);
        console.log(data);
    }

    const isEmpty = characters.filter(el => el === null).length === 0;
    const isIncomplete = characters.filter(el => el === null).length < 5;

    const contextValue = {
        characters: characters,
        traits: traits,
        setCharacters: setTeamHandler,
        setTraits: setTraitsHandler,
        isEmpty: isEmpty,
        isIncomplete: isIncomplete
    };

    return <TeamContext.Provider value={contextValue}>{props.children}</TeamContext.Provider>
};

export default TeamContext;