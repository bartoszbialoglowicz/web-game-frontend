import React, { useContext, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import { SERVER_URL } from '../../utils/Constant';
import LocationItem from './LocationItem';

const Location = () => {
    const {error, sendRequest} = useHttp();
    const authCtx = useContext(AuthContext);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const url = SERVER_URL + 'api/resources/locations/';
        
        const payload = {
            type: 'GET',
            token: authCtx.data.token
        };

        const fn = data => console.log(data);

        sendRequest(url, null, payload, setLocations, fn);
    }, []);

    const locationsList = locations.map(el => <LocationItem location={el} key={el.id}/>);

    return <div>{locationsList}</div>
};

export default Location;
