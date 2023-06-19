import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as postLoader } from "./routes/Posts";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayouts from "./routes/RootLayouts";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        name: "Home Page",
        path: "/",
        element: <Home />,
      },
      {
        name: "Blog Page",
        path: "/blog",
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            name: "Create Post",
            path: "/blog/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            name: "Post",
            path: "/blog/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
      {
        name: "Projects Page",
        path: "/projects",
        element: <Projects />,
      },
      {
        name: "Contact Page",
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
