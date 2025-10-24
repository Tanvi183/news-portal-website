import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
    {
        path : "/",
        element: <HomeLayout></HomeLayout>,
        children : [
            {
                path : "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            },
        ]
    },

    {
        path : "/auth",
        element : <AuthLayout></AuthLayout>,
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
        path: "/news-details/:id",
        element : <NewsDetails></NewsDetails>,
        loader: () => fetch("/news.json"),
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
