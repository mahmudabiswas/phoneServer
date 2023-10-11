import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main.jsx";
import Phone from "./Components/Phone.jsx";
import Phones from "./Components/Phones.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/phone",
        element: <Phone />,
        loader: () => fetch("http://localhost:300/phone"),
      },
      {
        path: "/phones",
        element: <Phones />,
        loader: ({ params }) =>
          fetch(`http://localhost:300/phones${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
