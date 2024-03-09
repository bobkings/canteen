import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { Login } from '../components/layout/public/Login';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { MainMenu } from '../components/content/MainMenu';

//import { AuthProvider } from '../context/AuthProvider';


export const Routing = () => {
    return (
        <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Login />}/>
                    <Route path='login' element={<Login />}/>                    

                    <Route path="/user/" element={<PrivateLayout />}>
                        <Route index element={ <MainMenu/> } />
                    </Route>

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
