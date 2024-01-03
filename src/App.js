import React, { useState, useEffect } from "react";
import HomePage from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import RootLayout from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HashLoader from "react-spinners/HashLoader";
import classes from './components/All.module.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/1",
        element: <ProjectDetail />,
      },
    ],
  },
]);



const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000);
  }, []);

  return (
    <div>
      {
        loading ?
        <HashLoader
          style={{height : "100vh"}}
          className={classes["loading-position"]}
          color={"red"}
          loading={loading}
          size={50}
        
      />
        :
        <RouterProvider router={router} />
      }
     
    </div>
  );
};

export default App;
