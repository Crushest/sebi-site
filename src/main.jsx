import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts from "./routes/Posts";
import "./index.css";
import NewPost from "./routes/NewPost";
import RootLayouts from "./routes/RootLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      { name: "Home", path: "/", element: <Posts /> },
      { name: "Create Post", path: "/create-post", element: <NewPost /> },
    ],
  },

  { name: "Post", path: "/Post", component: Posts },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
