import React from "react";
import {
    createBrowserRouter, 
    RouterProvider, 
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import RacesPage from "./pages/RacesPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage"; 

//creating BrowserRouter
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {// να σημειωθεί ότι μια σελίδα για να προστεθεί σε Link πρέπρει πρώτα να προστεθεί εδώ το path της 
      path: "/contact", 
      element: <ContactPage /> 
    },
    {// να σημειωθεί ότι μια σελίδα για να προστεθεί σε Link πρέπρει πρώτα να προστεθεί εδώ το path της 
      path: "/races", 
      element: <RacesPage /> 
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
  