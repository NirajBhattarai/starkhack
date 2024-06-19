import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  infuraProvider,
  useInjectedConnectors,
} from "@starknet-react/core";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./globals.css";
import Login from "./components/ui/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login />}>
      <Route index={true} path='/' element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
