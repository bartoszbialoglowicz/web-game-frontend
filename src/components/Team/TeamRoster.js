import React, { useContext } from 'react';

import classes from './TeamRoster.module.css';
import Item from '../Collection/Item';
import Button from '../UI/Button';
import TeamContext from '../../store/team-context';


const TeamRoster = (props) => {

    const teamCtx = useContext(TeamContext);

    const traitsList = props.traits.map(trait => <p key={trait.name}>{`${trait.name} x${trait.quantity}`}</p>)

    const characterList = props.characters.map((champ, index) => {
        return champ === null ? 
        <div className={classes.teamChamp} key={index}>Empty slot</div> : 
        //<div className={classes.teamChamp} onClick={() => props.onRemove(props.characters[index])} key={index}><Item flexSmall='small-item' item={champ}/></div>
        <Item flexSmall='small-item' item={champ} key={index}/>
    })

    const saveTeamHandler = () => {
        teamCtx.setTraits(props.traits);
        teamCtx.setCharacters(props.characters);
    }

    return (
        <div className={classes.teamComp}>
            <div className={classes.traits}>
                <h3>Active traits</h3>
                { traitsList.length > 0 && traitsList}
                { traitsList.length === 0 && <p>No active traits</p>}
            </div>
            <div className={classes.teamChamps}>
                {characterList}
            </div>
            <div>
                <Button value='SAVE TEAM' type='submit' onClick={saveTeamHandler}/>
            </div>
            <div>
                <ul>
                    <li>Click on character to add him to your team</li>
                    <li>Each character can be added only once</li>
                    <li>Try to customize team with similliar traits to earn bonuses</li>
                    <li>Click on button to save your team</li>
                </ul>
            </div>
        </div>
    )
};

export default TeamRoster;
