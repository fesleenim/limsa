import { createBrowserRouter } from "react-router-dom";
import Team from "../pages/team";
import HomePages from "../pages/Home";
import App from "../App";
import Project from "../pages/project";
import PricingCards from "../pages/Prices";

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