import React, { useContext, useEffect } from 'react';
import { useState, useCallback } from 'react/cjs/react.development';
import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';

const Collection = () => {
  const authCtx = useContext(AuthContext);
  const {isLoading, error, sendRequest} = useHttp();
  const [resources, setResources] = useState([]);
  /* const sendTaskRequestHandler = async () => {
    sendRequest('http://localhost:8000/api/resources/userresources/', 'GET', authCtx.data.token, setResources);
  }; */
  useEffect(() => {
    sendRequest('http://localhost:8000/api/resources/userresources/', 'GET', authCtx.data.token, setResources);
  }, [authCtx.data.token, sendRequest]);

  const showResources = () => {
    console.log(resources);
  }

  return <div onClick={showResources}>
    {isLoading && <p>Loading</p>}
    {error && !isLoading && <p>Error</p>}
    {!isLoading && !error && resources.length > 0 &&resources[0].characters.map(char => {
      return <p>{char.name}</p>
    })}
  </div>;
};

export default Collection;
