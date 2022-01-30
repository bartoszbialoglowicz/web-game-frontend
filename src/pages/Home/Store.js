import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import Button from '../../components/UI/Button';

import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import useRandomResource from '../../hooks/use-random-resource';
import ResourcesContext from '../../store/resources-context';
import Chest from '../../components/Store/Chest';

const Packs = () => {
  const {error, sendRequest} = useHttp();
  const authCtx = useContext(AuthContext);
  const resourceCtx = useContext(ResourcesContext);
  const [store, setStore] = useState([]); 
  const [champs, setChamps] = useState([]);
  const [errors, setErrors] = useState(null);

  const getItems = useRandomResource();

  useEffect(() => {
    const url = 'http://localhost:8000/api/resources/store/';
    const url2 = 'http://localhost:8000/api/resources/characters/'
    const payload = {
      type: 'GET',
      token: authCtx.data.token
    }
    sendRequest(url, null, payload, setStore, setErrors);
    sendRequest(url2, null, payload, setChamps, setErrors);
  }, [sendRequest, authCtx.data.token]);

  const sendRequestHandler = async (chances, quantity) => {
    const url = `http://localhost:8000/api/resources/resourcesupdate/${authCtx.data.id}/`;
    const payload = {
      type: 'PATCH',
      token: authCtx.data.token
    }
    
    const ctxChars = resourceCtx.characters;
    const chestChars = getItems(chances, champs, quantity);

    resourceCtx.addCharacters(chestChars);

    const body = {
      characters: resourceCtx.characters,
      user: authCtx.data.id
    };
    
    const er = (data) => {
      resourceCtx.setCharacters(ctxChars);
    }

    const setChars = data => {
      console.log('ok');
    }
    sendRequest(url, body, payload, setChars, er);
  }

  const storeItems = store.length > 0 ? 
    store.map(element => {
      const chances = {
        common: element.common_chance,
        rare: element.rare_chance,
        epic: element.epic_chance,
        mythic: element.mythic_chance,
        legendary: element.legendary_chance
      };
      return <Chest key={element.id} element={element} chances={chances} onSubmit={sendRequestHandler} />
  }) : 
    <p>Chests are not available</p>; 

  return <div>
    <p>Chests</p>
    <div>
      {error && errors}
      {!error && storeItems}
    </div>
  </div>;
};

export default Packs;
