import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./routes/search.jsx";
import Home from "./routes/home.jsx";
import Category from "./routes/category.jsx";
import Categories from "./routes/categories.jsx";
import Products from "./routes/products.jsx";
import Product from "./components/Product.jsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./routes/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error!</h1>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      {
        path: "featured",
        element: <h1>Featured</h1>,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: ":id",
            element: <Product />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
