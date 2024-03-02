import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { Login } from '../components/layout/public/Login';

//import { AuthProvider } from '../context/AuthProvider';


export const Routing = () => {
    return (
        <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Login />}/>



                    <Route path='*' element={
                        <>
                            <p>
                                <h1>Error 404</h1>
                                <Link to='/'>Volver al inicio</Link>
                            </p>
                        </>
                    } />

                </Routes>
            
        </BrowserRouter>
    )
}
