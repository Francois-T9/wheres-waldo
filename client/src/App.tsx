import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";

import Provider from "./context/Provider";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/game",
          element: <Game />,
        },
        {
          path: "/leaderboard",
          element: <Leaderboard />,
        },
      ],
    },
  ]);

  return (
    <Provider>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
