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

const infuraKey = import.meta.env.VITE_INFURA_API_KEY;

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
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<App />} />
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
