import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import FinancialHealth from "./pages/FinancialHealth/FinancialHealth";
import Investments from "./pages/Investments/Investments";
import AskBOB from "./pages/AskBOB/AskBOB";
import Branches from "./pages/Branches/Branches";
import MobileApp from "./pages/MobileApp/MobileApp";
import Cards from "./pages/Cards/Cards";
import Loans from "./pages/Loans/Loans";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/financial-health",
        element: <FinancialHealth />,
    },
    {
        path: "/investments",
        element: <Investments />,
    },
    {
        path: "/ask-bob",
        element: <AskBOB />,
    },
    {
        path: "/branches",
        element: <Branches />,
    },
    {
        path: "/mobile-app",
        element: <MobileApp />,
    },
    {
        path: "/cards",
        element: <Cards />,
    },
    {
        path: "/loans",
        element: <Loans />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;