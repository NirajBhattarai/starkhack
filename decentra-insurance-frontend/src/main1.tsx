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
import DashboardHome from "./dashboard/components/DashboardHome";
import Home from "./dashboard/components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DashboardHome />}>
      <Route index={true} path='/dashboard' element={<DashboardHome />} />
      <Route path='/home' element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
