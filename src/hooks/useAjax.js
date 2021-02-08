import { useState, useEffect } from 'react';
import axios from 'axios';
const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';

const useAjax = (callback) => {
  const [method, setMethod] = useState('get');
  const [body, setBody] = useState({});
  const [headers, setHeader] = useState({ 'Content-Type': 'application/json' });
  //const [mode, setMode] = useState('cors');
  //if (userMode) setMode(userMode);

  const setRequestParams = (userMethod, userHeaders, userBody, _id) => {
    if (userMethod) setMethod(userMethod);
    if (userBody) setBody(userBody);
    if (userHeaders) setHeader(userHeaders);
    let req = { method, headers };
    _id
      ? (req = { ...req, url: `${todoAPI}/${_id}` })
      : (req = { ...req, url: todoAPI });
    if (method === /^post$||^put$/i) req = { ...req, body: body };
    return req;
  };

  const useAxios = async (userMethod, userHeaders, userBody, _id) => {
    let results = await axios(
      setRequestParams(userMethod, userHeaders, userBody, _id)
    );
    console.log(results);
    return results.data.result;
  };

  const InitialCall = async () => {
    let result = await useAxios();
    callback(result);
  };

  useEffect(InitialCall,);

  return [useAxios, InitialCall];
};

export default useAjax;
