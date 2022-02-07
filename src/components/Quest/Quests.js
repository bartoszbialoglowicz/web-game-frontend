import React, { useContext, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import { SERVER_URL } from '../../utils/Constant';
import Quest from './Quest';

const Quests = () => {

    const authCtx = useContext(AuthContext);
    const {error, sendRequest} = useHttp();

    const [allQuests, setAllQuests] = useState([]);
    const [availableQuests, setAvailableQuests] = useState([]);
    const [completedQuests, setCompletedQuests] = useState([]);

    useEffect(() => {
        const url = SERVER_URL + 'api/resources/quests/';
        const url2 = SERVER_URL + 'api/resources/availablequests/';

        const payload = {
            type: 'GET',
            token: authCtx.data.token
        };
        const er = data => console.log(data);
        const getIds = data => setCompletedQuests(data[0].completed);

        sendRequest(url, null, payload, setAllQuests, er);
        sendRequest(url2, null, payload, getIds, er);
    }, []);

    useEffect(() => {
        const allQuestsIds = allQuests.map(el => el.id);
        const completedQuestsIds = completedQuests.slice();
        const availableQuestsTmp = [];

        allQuestsIds.forEach((el, index) => {
            if (completedQuestsIds.indexOf(el) === -1) {
                availableQuestsTmp.push(allQuests[index]);
            }
        });

        setAvailableQuests(availableQuestsTmp);
    }, [allQuests]);

    const questsList = availableQuests.map(el => <Quest key={el.id} quest={el}/>);

    return <React.Fragment>
        {questsList}
    </React.Fragment>
};

export default Quests;
