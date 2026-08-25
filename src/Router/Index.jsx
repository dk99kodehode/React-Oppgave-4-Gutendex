import { createBrowserRouter } from "react-router";
import App from "../App";

// ALLE BOOK CATEGORIENE SKALL HA BROWSER ROUTER SOM //

//Fiction, Romance, Fantasy, Morality, Society, Power, Justice, Adventure, Tragedy, War , Philosophy

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "trending",
        element: <TrendingPage />,
      },
    ],
  },
]);
