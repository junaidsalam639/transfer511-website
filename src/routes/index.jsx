import React from "react";
import { Routes, Route } from "react-router";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const VehiclePage = React.lazy(() => import("../pages/VehiclePage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));

const routeConfig = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/vehicle", component: VehiclePage },
    { path: "/contact", component: ContactPage },
];

const AppRoutes = () => {
    return (
        <>
            <Routes>
                {routeConfig?.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </>
    );
};

export default AppRoutes;


