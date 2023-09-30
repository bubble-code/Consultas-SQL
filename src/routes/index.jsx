import { createBrowserRouter } from "react-router-dom";
import { Home, Consultas_Sql } from "../pages";
import App from "../App";

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
        path: "/consultasSQL",
        element: <Consultas_Sql/>
      },
    ],
  },
]);

export { router };
