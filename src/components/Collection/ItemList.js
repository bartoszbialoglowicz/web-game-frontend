import React from 'react';

import Item from './Item';
import './ItemList.css';

const ItemList = props => {
    const flexCss = props.flexSmall === undefined ? 'list-item' : 'small-list-item';
    const classes = props.flexSmall === undefined ? 'item' : props.flexSmall;
    const list = props.list.map(el => <Item item={el} key={el.id} onLock={props.onLock} flexSmall={classes} onClick={props.onClick}/>)
    return <div className={flexCss}>
        <h1>{props.title}</h1>
        {list}
    </div>;
};

export default ItemList;
