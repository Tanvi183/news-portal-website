import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path : "/",
        Component: HomeLayout,
        children : [
            {
                path : "",
                Component : Home,
            },
            {
                path : "/category/:id",
                Component : CategoryNews,
                loader : ()=> fetch("/news.json"),
            },
        ]
    },
    {
        path : "/auth",
        Component : AuthLayout,
        children : [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ]
    },  
    {
        path: "/about",
        element: <h2>About Page</h2>,
    },
    {
        path: "/career",
        element: <h2>career pages</h2>,
    },
    {
        path: "/*",
        element: <h3 className="text-center mt-10">Error</h3>,
    },
]);

export default router;
