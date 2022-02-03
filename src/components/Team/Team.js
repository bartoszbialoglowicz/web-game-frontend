import React, { Fragment } from 'react';
import { useContext, useState } from 'react/cjs/react.development';

import ResourcesContext from '../../store/resources-context'
import TeamContext from '../../store/team-context';
import ItemList from '../Collection/ItemList';
import classes from './Team.module.css';
import TeamRoster from './TeamRoster';

const Team = () => {
    const resContext = useContext(ResourcesContext);
    const teamCtx = useContext(TeamContext);
    const initialTraits = teamCtx.traits;
    const initialChars = teamCtx.characters;

    const [traits, setTraits] = useState(initialTraits);
    
    const [characters, setCharacters] = useState(initialChars);

    const addTrait = el => {
        const tmpTraits = traits.slice();
        const newTraits = el.map(trait => trait);
        const names = tmpTraits.map(trait => trait.name);
        let isInArr = false;
        newTraits.forEach(trait => {
            if (names.includes(trait.name)){
                const index = names.indexOf(trait.name);
                tmpTraits[index].quantity++;
                isInArr = true;
            }
            if (!isInArr) {
                tmpTraits.push({
                    name: trait.name,
                    description: trait.description,
                    quantity: 1
                });
            }
        });
        setTraits(tmpTraits);
    }

    const removeItemHandler = (el) => {
        const tmpState = characters.slice();
        const tmpTraits = traits.map(trait => trait);
        const tmpNames = traits.map(trait => trait.name);
        const index = tmpState.indexOf(el);
        tmpState[index] = null;
        el.traits.forEach(t => {
            const traitIndex = tmpNames.indexOf(t.name);
            if (tmpTraits[traitIndex].quantity > 1) {
                tmpTraits[traitIndex].quantity = tmpTraits[traitIndex].quantity-1;
            } else {
                tmpTraits.splice(traitIndex, 1);
            }
        });
        setCharacters(tmpState);
        setTraits(tmpTraits);
    }

    const addCharacterHandler = (el) => {
        const tmpState = characters.slice();
        const emptySlot = tmpState.indexOf(null);
        const isInArr = tmpState.includes(el);
        // If there are no empty slots do nothing
        if (isInArr) {
            removeItemHandler(el);
            return;
        }
        if (emptySlot === -1) {
            return;
        } 
        tmpState[emptySlot] = el;
        setCharacters(tmpState);
        addTrait(el.traits);
    }

    return (
        <Fragment>
            <TeamRoster traits={traits} characters={characters} />
            <div className={classes.smallItemList}>
                <ItemList flexSmall='small-item' list={resContext.characters} onLock={true} title="Available champions" onClick={addCharacterHandler}/>
            </div>
        </Fragment>
        
    );
};

export default Team;
