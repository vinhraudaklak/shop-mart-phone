import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/Products",
		element: <ProductsPage/>,
	},
]);
