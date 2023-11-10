import React from 'react';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage';
import ContactPage from '../pages/ContactPage';

const PUBLIC_ROUTES = [
    {id: 1, link: '/', element: <HomePage />},
    {id: 2, link: '/contact', element: <ContactPage />},
    {id: 3, link: '/add', element: <AddPage />},
    {id: 4, link: '/products', element: <CatalogPage />},
]



const MainRoutes = () => {
    return (
        <div>
            <Routes>
                {PUBLIC_ROUTES.map((route)=>
                <Route key={route.id} path={route.link} element={route.element} />
                 )}
            </Routes>
        </div>
    );
};

export default MainRoutes;