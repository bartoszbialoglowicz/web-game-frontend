import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';

import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import useRandomResource from '../../hooks/use-random-resource';
import ResourcesContext from '../../store/resources-context';
import Chest from '../../components/Store/Chest';
import { SERVER_URL } from '../../utils/Constant';
import ItemList from '../../components/Collection/ItemList';
import Modal from '../../components/UI/Modal';
import Item from '../../components/Collection/Item';
import Button from '../../components/UI/Button';

const Packs = () => {
  const {error, sendRequest} = useHttp();
  const authCtx = useContext(AuthContext);
  const resourceCtx = useContext(ResourcesContext);
  const [store, setStore] = useState([]); 
  const [champs, setChamps] = useState([]);
  const [errors, setErrors] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [drop, setDrop] = useState([]);
  const getItems = useRandomResource();

  useEffect(() => {
    const url = SERVER_URL + 'api/resources/store/';
    const url2 = SERVER_URL + 'api/resources/characters/'
    const payload = {
      type: 'GET',
      token: authCtx.data.token
    }
    sendRequest(url, null, payload, setStore, setErrors);
    sendRequest(url2, null, payload, setChamps, setErrors);
  }, [sendRequest, authCtx.data]);

  const showOverlayHandler = (event) => {
    if (event !== null) {
      event.preventDefault();
    }
    setShowOverlay(!showOverlay);
  }

  const sendRequestHandler = async (chances, quantity) => {
    const url = SERVER_URL + `api/resources/resourcesupdate/${authCtx.data.id}/`;
    const payload = {
      type: 'PATCH',
      token: authCtx.data.token
    }
    
    const ctxChars = resourceCtx.characters;
    const chestChars = getItems(chances, champs, quantity);
    const dataToSend = resourceCtx.characters.map(item => item.id)
                        .concat(chestChars.map(item => item.id));
    resourceCtx.addCharacters(chestChars);

    const body = {
      characters: dataToSend,
      user: authCtx.data.id
    };

    const er = (data) => {
      resourceCtx.setCharacters(ctxChars);
      console.log(data);
    }

    const setChars = data => {
      setDrop(chestChars);
      showOverlayHandler(null);
    }
    sendRequest(url, body, payload, setChars, er);
  };

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

  const droppedItems = <Modal onClose={showOverlayHandler}>{drop.map(el => <Item item={el} key={el.id}/>)}<form onSubmit={showOverlayHandler}><Button value="CLOSE"/></form></Modal>

  return <div>
    <p>Chests</p>
    <div>
      {error && errors}
      {!error && storeItems}
      {drop.length && showOverlay > 0 && droppedItems}
    </div>
  </div>;
};

export default Packs;
