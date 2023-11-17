import React from "react";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import { Navigate, Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import ContactPage from "../pages/ContactPage";
import EditPage from "../pages/EditPage";
import AuthPage from "../pages/AuthPage";
import { ADMIN } from "../helpers/consts";
import { useAuth } from "../contexts/AuthContextProvider";
import CartPage from "../components/product/CartPage";
import AboutUsPage from "../pages/AboutUsPage";
import PaymentForm from "../components/product/PaymentForm";

const PUBLIC_ROUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/contact", element: <ContactPage /> },
  // {id: 3, link: '/add', element: <AddPage />},
  { id: 4, link: "/products", element: <CatalogPage /> },
  { id: 5, link: "/edit/:id", element: <EditPage /> },
  { id: 6, link: "/cart", element: <CartPage /> },
  { id: 7, link: "/auth", element: <AuthPage /> },
  { id: 8, link: "/aboutus", element: <AboutUsPage /> },
  { id: 9, link: "/pay", element: <PaymentForm/> }
];

const PRIVATE_ROUTES = [{ id: 5, link: "/add", element: <AddPage /> }];

const MainRoutes = () => {
  const { user } = useAuth();
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route key={route.id} path={route.link} element={route.element} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((route) => (
              <Route
                key={route.id}
                path={route.link}
                element={
                  user.email === ADMIN ? route.element : <Navigate to="*" />
                }
              />
            ))
          : null}
      </Routes>
    </div>
  );
};

export default MainRoutes;
