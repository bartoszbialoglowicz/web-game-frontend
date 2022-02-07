import React from 'react';

import classes from './Quest.module.css';
import Item from '../Collection/Item';
import Card from '../UI/Card';

const Quest = props => {
    const itemList = props.quest.character_reward.length > 0 ? 
        props.quest.character_reward.map((el, index) => <li key={index}>{el.name}</li>) :
        null;
    
    const rewardInfo = <ul>{itemList}</ul>

    return <Card>
        <div className={classes.quest}>
        <h3>{props.quest.name}</h3>
        <p>{props.quest.description}</p>
        <p>Gold reward: {props.quest.gold_reward}</p>
        <p>XP reward: {props.quest.exp_reward}</p>
        <div>
            <p>Other rewards: </p>
            {itemList === null && <ul><li>None</li></ul>}
            {itemList !== null && rewardInfo}
        </div>
        </div>
    </Card>
    
};

export default Quest;
