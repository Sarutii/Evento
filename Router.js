import { Navigate, createBrowserRouter } from "react-router-dom";
import ProductList from "./Pages/PhotographyAndVideography/PhotographyPage.js";
import App from "./App";
import Decoration from "./Pages/DecorationPage/Decoration";
import Home from "./Pages/HomePage/HomePage.js";
import Catering from "./Pages/CateringPage/CateringPage";
import Place from "./Pages/PlacePage/PlacePage";
import Login from "./Pages/Auth/Login.js";
import Signup from "./Pages/Auth/Signup";
import Basket from "./Pages/BasketPage/BasketPage";
import WorkshopPage from "./Pages/WorkshopPage/WorkshopPage.js";
import TravelingPage from "./Pages/TravelingPage/TravelingPage.js";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/photography",
        element: <ProductList />,
      },
      {
        path: "/Decoration",
        element: <Decoration />,
      },
      {
        path: "/Catering",
        element: <Catering />,
      },
      {
        path: "/Place",
        element: <Place />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Basket",
        element: <Basket />,
      },
      {
        path: "/Workshop",
        element: <WorkshopPage />,
      },
      {
        path: "/Traveling",
        element: <TravelingPage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
