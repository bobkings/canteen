import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export const PrivateLayout = () => {
  const loading = false;
  const { auth } = useAuth();

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <>
        {/* layout */}

        {/* cabecera y navegacion */}
        <Header />

        {/* contenido principal */}
        {auth.userId ?
            <Outlet />
            :
            <Navigate to="/login" />
          }

        {/* footer */}
        <Footer/>
      </>
    )
  }
}
