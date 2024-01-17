import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1 - Configurando router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Routes/Home.jsx";
import SignUp from "./Routes/SignUp.jsx";
import Calendar from "./Routes/Calendar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      { path: "/calendar",
        element: <Calendar /> 
      },
      //  Nested Routes (Geralmente é usado pra acessar páginas de algo que foi carregado no banco de dados)
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
