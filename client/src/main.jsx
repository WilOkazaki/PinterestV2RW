import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
//import { Login } from './routes/Login'
//import { Register } from './routes/Register'
import Pinterest from "./componentes/Pinterest";
import Upload from "./componentes/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/Pinterest",
    element: <Pinterest />,
  },
  {
    path: "/Upload",
    element: <Upload />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
