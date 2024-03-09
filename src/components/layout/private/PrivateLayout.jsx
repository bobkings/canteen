import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
  const loading = false;

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <>
        {/* layout */}

        {/* cabecera y navegacion */}
        <Header />

        {/* contenido principal */}
        <Outlet/>

        {/* footer */}
        <Footer/>
      </>
    )
  }
}
