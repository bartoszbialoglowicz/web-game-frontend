import React from 'react';

import Item from './Item';
import './ItemList.css';

const ItemList = props => {
    const list = props.list.map(el => <Item item={el} key={el.id} />)
    return <div className='list-item'>
        <h1>{props.title}</h1>
        {list}
    </div>;
};

export default ItemList;
