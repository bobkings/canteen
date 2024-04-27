import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

export const Logout = () => {
  
    const navigate = useNavigate();
    const {setAuth} = useAuth();

    useEffect(()=> {
        //vaciar localstorage
        localStorage.clear();

        //setear estados globales a vacio
        setAuth({});

        //navigate al login
        navigate("/login");
    })
  
    return (
    <h1>Cerrando sesión...</h1>
  )
}
