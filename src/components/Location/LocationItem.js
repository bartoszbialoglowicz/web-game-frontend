import React from 'react';
import Card from '../UI/Card';
import LocationItemInfo from './LocationItemInfo';

const LocationItem = props => {
    const roomList = props.location.rooms.map(el => <div key={el.id}>
            <p>{el.name}</p>
            <LocationItemInfo key={el.id} enemies={el.enemies}/>
        </div>)

    return <Card>
        <h2>{props.location.name}</h2>
        {roomList}
    </Card>
};

export default LocationItem;
