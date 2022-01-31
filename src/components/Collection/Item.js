import React from 'react';

import './Item.css';
import armor from '../../assets/icons/armor.png';
import resist from '../../assets/icons/resist.png';
import damage from '../../assets/icons/damage.png';
import health from '../../assets/icons/health.png';
import crit from '../../assets/icons/crit.png';
import percent from '../../assets/icons/percent.png';

const Item = props => {
    const classes = ['common', 'rare', 'epic', 'mythic', 'legendary'];
    const tier = classes[parseInt(props.item.tier)-1]
    const image = props.item.image ? <img src={props.item.image} alt="icon" /> : null;
    return <div className={tier + ' item'}>
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
