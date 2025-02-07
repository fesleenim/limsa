import { createBrowserRouter } from "react-router-dom";
import Team from "../pages/Team";
import HomePages from "../pages/Home";
import App from "../App";
import PricingCards from "../pages/Prices";
import Project from "../pages/Project";

export const Router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePages />,
            },
            {
                path: "/service",
                element: <Team />,
            },
            {
                path: "/project",
                element: <Project />
            },
            {
                path: "/prices",
                element: <PricingCards />
            }
        ]
    }
])