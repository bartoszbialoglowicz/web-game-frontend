import React from 'react';

import Item from './Item';

const ItemList = props => {
    const list = props.list.map(el => <Item item={el} key={el.id} />)
    return <div>
        <h3>{props.title}</h3>
        {list}
    </div>;
};

export default ItemList;
