import React, {useState} from "react";

const ResourcesContext = React.createContext({
    characters: [],
    items: [],
    gold: 0,
    experience: 0,
    lvl: 1,
    setCharacters: (data) => {},
    addCharacters: (data) => {},
    setItems: (data) => {}
});

export const ResourcesContextProvider = (props) => {
    const tmpItems = localStorage.getItem('items') === null ? [] : JSON.parse(localStorage.getItem('items'));
    const tmpCharacters = localStorage.getItem('characters') === null ? [] : JSON.parse(localStorage.getItem('characters'));
    const tmpGold = localStorage.getItem('gold') === null ? 0 : JSON.parse(localStorage.getItem('gold'));
    const tmpExp = localStorage.getItem('experience') === null ? 0 : JSON.parse(localStorage.getItem('experience'));
    const tmpLvl = localStorage.getItem('lvl') === null ? 0 : JSON.parse(localStorage.getItem('lvl'));

    const [items, setItems] = useState(tmpItems);
    const [characters, setCharacters] = useState(tmpCharacters);
    const [gold, setGold] = useState(tmpGold);
    const [experience, setExperience] = useState(tmpExp);
    const [lvl, setLvl] = useState(tmpLvl);

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
    };

    const addGoldHandler = data => {
        const goldToset = parseInt(gold) + parseInt(data);
        localStorage.setItem('gold', goldToset);
        setGold(goldToset);
    };

    const setGoldHandler = data => {
        setGold(data);
        localStorage.setItem('gold', data);
    }

    const addLvlHandler = data => {
        const lvlToSet = parseInt(data) + parseInt(lvl);
        localStorage.setItem('lvl', lvlToSet);
        setLvl(lvlToSet);
    }

    const setLvlHandler = data => {
        setLvl(data);
        localStorage.setItem('lvl', data);
    }

    const addExperienceHandler = data => {
        const expToSet = parseInt(experience) + parseInt(data);
        localStorage.setItem('experience', expToSet);
        setExperience(expToSet);
    }

    const setExperienceHandler = data => {
        setExperience(data);
        localStorage.setItem('experience', data);
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
        gold: gold,
        experience: experience,
        lvl: lvl,
        setLvl: setLvlHandler,
        setGold: setGoldHandler,
        setExperience: setExperienceHandler,
        setCharacters: setCharactersHandler,
        addGold: addGoldHandler,
        addExperience: addExperienceHandler,
        addLvl: addLvlHandler,
        addCharacters: addCharactersHandler,
        setItems: setItemsHandler
    };

    return <ResourcesContext.Provider value={contextValue}>{props.children}</ResourcesContext.Provider>
};

export default ResourcesContext;