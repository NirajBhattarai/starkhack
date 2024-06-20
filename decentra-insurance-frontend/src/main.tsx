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
import Dashboard from "./dashboard/Sidebar/Dashboard/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import Products from "./dashboard/Sidebar/Products/Products";

const infuraKey = import.meta.env.VITE_INFURA_API_KEY;

console.log(infuraKey);

function Root({ children }: { children: React.ReactNode }) {
  const chains = [sepolia];
  const provider = infuraProvider({ apiKey: infuraKey });
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Randomize the order of the connectors.
    order: "random",
  });

  return (
    <StarknetConfig
      autoConnect
      chains={chains}
      provider={provider}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DashboardHome />}>
      <Route index element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/signIn' element={<Login />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/products' element={<Products />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root>
      <RouterProvider router={router} />
    </Root>
  </React.StrictMode>
);
