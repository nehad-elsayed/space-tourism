import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout/Layout";
import Destination from "./Pages/Destination/Destination";
import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
import Home from "./Pages/Home/Home";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/destination", element: <Destination /> },
      { path: "/crew", element: <Crew /> },
      { path: "/technology", element: <Technology /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
