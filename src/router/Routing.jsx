import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { Login } from '../components/layout/public/Login';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { MainMenu } from '../components/content/MainMenu';
import { Employees } from '../components/content/Employees';
import { NewOrder } from '../components/content/NewOrder';
import { OrderOptions } from '../components/content/OrderOptions';
import { Orders } from '../components/content/Orders';
import { Users } from '../components/content/Users';
import { SeeQr } from '../components/content/SeeQr';

import { AuthProvider } from '../context/AuthProvider';


export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>

                    <Route path='/' element={<Login />}/>
                    <Route path='login' element={<Login />}/>                    

                    <Route path="/user/" element={<PrivateLayout />}>
                        <Route index element={ <MainMenu/> } />
                        <Route path="employees" element={<Employees />} />
                        <Route path="new-order" element={<NewOrder />} />
                        <Route path="order-options" element={<OrderOptions />} />       
                        <Route path="orders" element={<Orders />} />
                        <Route path="users" element={<Users />} />
                        <Route path="qr-code" element={<SeeQr />} />                        
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
            </AuthProvider>
        </BrowserRouter>
    )
}
