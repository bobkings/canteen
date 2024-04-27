import React, { createContext, useState, useEffect } from 'react';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [tokenSt, setToken] = useState();

  useEffect(() => {
    authUser();
  }, [])

  const authUser = async () => {
    //sacar datos del usuario identificado del localstorage
    const token = localStorage.getItem("token");
    setToken(token);
    const user = localStorage.getItem("user");

    //comprobar si tengo token y el user
    if (!token || !user) {
      setLoading(false);
      return false;
    }

    //transformar datos a objeto javascript
    const userObj = JSON.parse(user);
    const userId = userObj.id;

    //peticion ajax al backend que compruebe el token

    //devolver datos del usuario
    const request = await fetch(Global.url + "user/list-one/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })

    const data = await request.json();

    //setear el estado de auth
    setAuth(data.user);
    setLoading(false);
  }

  return (<AuthContext.Provider
    value={
      {
        auth,
        setAuth,
        tokenSt,
        loading
      }
    }
  >
    {children}
  </AuthContext.Provider>)
}

export default AuthContext;
