import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Books from "../api/Gundetex";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Books />,
      },
    ],
  },
]);
