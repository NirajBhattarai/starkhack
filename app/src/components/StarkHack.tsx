import React, { useEffect, useState } from "react";
import Web3 from "web3";

const StarkHack: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    const loadBlockchainData = async () => {
      if ((window as any).ethereum) {
        const web3 = new Web3((window as any).ethereum);
        try {
          await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if ((window as any).web3) {
        const web3 = new Web3((window as any).web3.currentProvider);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    };

    loadBlockchainData();
  }, []);

  return (
    <div>
      <h1>StarkHack</h1>
      <p>Connected account: {account ? account : "Not connected"}</p>
    </div>
  );
};

export default StarkHack;
