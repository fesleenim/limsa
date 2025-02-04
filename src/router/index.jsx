import { createBrowserRouter } from "react-router-dom";
import Team from "../pages/Team";
import HomePages from "../pages/Home";
import App from "../App";
import PricingCards from "../pages/Prices";
import Project from "../pages/project";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages />,
    },
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/service",
                element: <Team />,
            },
            {
                path: "/project",
                element: <Project/>
            },
            {
                path:"/prices",
                element: <PricingCards/>
            }
        ]
    }
    


])