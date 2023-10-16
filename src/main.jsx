import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error!</h1>,
    children: [
      {
        path: "home",
        element: <h1>Home</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "contact",
        element: <h1>Contact</h1>,
      }
    ]
  },
  {
    path: "/cart",
    element: <h1>Cart</h1>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
