import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Books from "../api/Gutendex";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Books />,
        },
        {
          path: "search/:category/:query?",
          element: <Books />,
        },
      ],
    },
  ],
  {
    basename: "/React-Oppgave-4-Gutendex",
  },
);
