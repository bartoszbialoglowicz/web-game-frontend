import { useCallback, useState } from "react";

const useHttp = () => {
    const [error, setError] = useState(null);
    
    const sendRequest = useCallback(async (url, requestBody, payload, fnSuccess, fnError) => {
        setError(null);
        const authToken = 'Token ' + payload.token;
        
            const response = await fetch(url, {
                method: payload.type,
                headers: {
                    'Content-Type': payload.contentType ? payload.contentType : 'application/json',
                    'Accept': payload.accept ? payload.accept : 'application/json',
                    'Authorization': payload.token ? authToken : null
                },
                body: requestBody ? JSON.stringify(requestBody) : null
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data);
                fnError(data);
            } else {
                fnSuccess(data);
            }
    }, []);
    
    return {
        error,
        sendRequest
    }
}

export default useHttp;
