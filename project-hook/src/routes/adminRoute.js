import Home from "../components/home/Home";
import Product from "../components/products/product";

export const AdminRoute = [
    {
        path: "/",
        conponent: <Home />
    },
    {
        path: "/products",
        conponent: <Product />
    },
]