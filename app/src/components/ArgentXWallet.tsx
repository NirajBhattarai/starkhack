import { StarknetWindowObject } from "@argent/get-starknet";
import React, { useState } from "react";

declare global {
  interface Window {
    starknet?: StarknetWindowObject;
  }
}

const ArgentXWallet: React.FC = () => {
  const [wallet, setWallet] = useState<StarknetWindowObject | null>(null);
  const [address, setAddress] = useState<string>("");

  const connectWallet = async () => {
    try {
      // Ensure window.starknet is available
      if (window.starknet) {
        const starknet = window.starknet;

        // Enable the wallet (this will prompt the user to connect the wallet)
        await starknet.enable();

        // Set the wallet instance
        setWallet(starknet);

        // Set the wallet address
        const walletAddress = starknet.selectedAddress || "";
        setAddress(walletAddress);
      } else {
        console.error("StarkNet wallet is not available");
      }
    } catch (error) {
      console.error("Failed to connect to Argent-X wallet", error);
    }
  };

  const logoutWallet = () => {
    setWallet(null);
    setAddress("");
  };

  return (
    <div>
      <h1>Argent-X Wallet Integration</h1>
      {!wallet ? (
        <button onClick={connectWallet}>Connect to Wallet</button>
      ) : (
        <div>
          <p>Wallet Connected</p>
          <p>Address: {address}</p>
          <button onClick={logoutWallet}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ArgentXWallet;
