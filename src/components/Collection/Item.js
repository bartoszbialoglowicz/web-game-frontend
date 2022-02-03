import React from 'react';

import './Item.css';
import armor from '../../assets/icons/armor.png';
import resist from '../../assets/icons/resist.png';
import damage from '../../assets/icons/damage.png';
import health from '../../assets/icons/health.png';
import crit from '../../assets/icons/crit.png';
import percent from '../../assets/icons/percent.png';
import { useState } from 'react/cjs/react.development';

const Item = props => {
    const classes = ['common', 'rare', 'epic', 'mythic', 'legendary'];
    const [lock, setLock] = useState(false);
    const tier = classes[parseInt(props.item.tier)-1]
    const image = props.item.image ? <img src={props.item.image} alt="icon" /> : null;
    const flexClasses = props.flexSmall === undefined ? 'item' : props.flexSmall;

    const addTraitHandler = () => {
        if (props.onClick !== undefined) {
            props.onClick(props.item);
        }
        if (props.onLock === true) {
            setLock(!lock);
        }
    }

    const cssLock = lock ? 'locked' : "";

    return <div className={tier + ' ' + flexClasses + ' ' + cssLock} onClick={addTraitHandler}>
        <div className='stats'>
            <h3>{props.item.name}</h3>
            <p>{props.item.power}</p>
            <div><img src={damage} alt='stats' /><p>{props.item.base_stats.damage}</p></div>
            <div><img src={health} alt='health' /><p>{props.item.base_stats.health}</p></div>
            <div><img src={armor} alt='armor' /><p>{props.item.base_stats.armor}</p></div>
            <div><img src={resist} alt='resist' /><p>{props.item.base_stats.resists}</p></div>
            <div><img src={crit} alt='crit' /><p>{props.item.base_stats.critical_percent}</p></div>
            <div><img src={percent} alt='percent' /><p>{props.item.base_stats.critical_damge}</p></div>
        </div>
        <div className='item-img'>{image}</div>
        <div className='gradient'></div>
    </div>;
};

export default Item;
