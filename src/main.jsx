import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import NewPost from "./components/NewPost";

const router = createBrowserRouter([
  { name: "Home", path: "/", element:<App /> },
  { name: "CreatePost", path: "/create-post", element: <NewPost /> },
  { name: "Post", path: "/Post", component: App },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
