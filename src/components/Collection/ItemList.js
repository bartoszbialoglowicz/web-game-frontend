import React from 'react';

import Item from './Item';
import './ItemList.css';

const ItemList = props => {
    const classes = props.flexSmall === undefined ? 'item' : props.flexSmall;
    const list = props.list.map(el => <Item item={el} key={el.id} onLock={props.onLock} flexSmall={classes} onClick={props.onClick}/>)
    return <div className='list-item'>
        <h1>{props.title}</h1>
        {list}
    </div>;
};

export default ItemList;
