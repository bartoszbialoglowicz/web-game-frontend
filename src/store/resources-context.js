import React, {useState} from "react";

const ResourcesContext = React.createContext({
    characters: [],
    items: [],
    setCharacters: (data) => {},
    setItems: (data) => {}
});

export const ResourcesContextProvider = (props) => {
    const tmpItems = localStorage.getItem('items') === null ? [] : JSON.parse(localStorage.getItem('items'));
    const tmpCharacters = localStorage.getItem('characters') === null ? [] : JSON.parse(localStorage.getItem('characters'));

    const [items, setItems] = useState(tmpItems);
    const [characters, setCharacters] = useState(tmpCharacters);

    const setCharactersHandler = (data) => {
        const tmpChars = [];
        data.forEach(element => {
            tmpChars.push(element);
            console.log(element);
        });
        setCharacters(tmpChars);
        localStorage.setItem('characters', JSON.stringify(tmpChars));
    }

    const setItemsHandler = (data) => {
        const tmpItems = [];
        data.forEach(element => {
            tmpItems.push(element);
        });
        setItems(tmpItems);
        localStorage.setItem('items', JSON.stringify(tmpItems));
    }

    const contextValue = {
        characters: characters,
        items: items,
        setCharacters: setCharactersHandler,
        setItems: setItemsHandler
    };

    return <ResourcesContext.Provider value={contextValue}>{props.children}</ResourcesContext.Provider>
};

export default ResourcesContext;