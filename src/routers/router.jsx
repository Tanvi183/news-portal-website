import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";

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
