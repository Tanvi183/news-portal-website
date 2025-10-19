import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path : "/",
        Component: HomeLayout,
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>,
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>,
    },
    {
        path: "/*",
        element: <h3 className="text-center mt-10">Error</h3>,
    },
]);

export default router;
