import React from 'react';

const LocationItemInfo = props => {
    const enemiesList = props.enemies.map(el => <li key={el.id}>{el.name}</li>)
    return <div>
        <p>Possible enemies: </p>
        <ul>
            {enemiesList}
        </ul>
    </div>;
};

export default LocationItemInfo;
