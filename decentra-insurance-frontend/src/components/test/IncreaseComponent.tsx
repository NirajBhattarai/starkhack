import React, { useState } from "react";
import {
  useContract,
  useContractWrite,
  useWaitForTransaction,
} from "@starknet-react/core";
import { Abi } from "starknet";

const abi: Abi = [
  {
    name: "Balance",
    type: "impl",
    interface_name: "balance::balance::IBalance",
  },
  {
    name: "balance::balance::IBalance",
    type: "interface",
    items: [
      {
        name: "get",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "increase",
        type: "function",
        inputs: [
          {
            name: "a",
            type: "core::integer::u128",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "value_",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "enum",
    name: "balance::balance::Balance::Event",
    type: "event",
    variants: [],
  },
];

const contractAddress = "0x0440c10196d5ee15f4e4c30166fe764d89af6d882400d442a8d8f2d1b5d59f58";

const IncreaseComponent: React.FC = () => {
//   const { address } = useAccount();
  const { contract }:any = useContract({
    abi,
    address: contractAddress,
  });

  const [amount, setAmount] = useState<string>("0");

  const calls:any = [contract.populateTransaction["increase"](110)];
console.log(calls)
  const {
    write,
    // reset,
    data: tx,
    // isError: isSubmitError,
    error: submitError,
  } = useContractWrite({ calls:calls });


  console.log(tx);
  const {
    // data: receipt,
    // isLoading,
    isError,
    // error,
  } = useWaitForTransaction({
    hash: tx?.transaction_hash,
    watch: true,
    retry: true,
    refetchInterval: 2000,
  });

  const handleIncrease = async () => {
    write();
  };

  return (
    <div>
      <h1>Increase Balance</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncrease} >
       Submit
      </button>
      {isError && <p>{submitError?.message}</p>}
    </div>
  );
};

export default IncreaseComponent;
