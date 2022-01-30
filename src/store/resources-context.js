import React, {useState} from "react";

const ResourcesContext = React.createContext({
    characters: [],
    items: [],
    setCharacters: (data) => {},
    addCharacters: (data) => {},
    setItems: (data) => {}
});

export const ResourcesContextProvider = (props) => {
    const tmpItems = localStorage.getItem('items') === null ? [] : JSON.parse(localStorage.getItem('items'));
    const tmpCharacters = localStorage.getItem('characters') === null ? [] : JSON.parse(localStorage.getItem('characters'));

    const [items, setItems] = useState(tmpItems);
    const [characters, setCharacters] = useState(tmpCharacters);

    const getUniqueValues = (arr) => {
        const tmp = arr.concat();
        for (let i = 0; i < tmp.length; ++i) {
            for (let j = i+1; j < tmp.length; ++j) {
                if (tmp[i].id === tmp[j].id) {
                    tmp.splice(j--, 1);
                }
            }
        }
        return tmp;
    }

    const setCharactersHandler = (data) => {
        const tmpChars = [];
        data.forEach(element => {
            tmpChars.push(element);
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

    const addCharactersHandler = (data) => {
        const tmpNewChars = data.concat(characters);
        const dataToSet = getUniqueValues(tmpNewChars);
        setCharacters(dataToSet);
    }

    const contextValue = {
        characters: characters,
        items: items,
        setCharacters: setCharactersHandler,
        addCharacters: addCharactersHandler,
        setItems: setItemsHandler
    };

    return <ResourcesContext.Provider value={contextValue}>{props.children}</ResourcesContext.Provider>
};

export default ResourcesContext;