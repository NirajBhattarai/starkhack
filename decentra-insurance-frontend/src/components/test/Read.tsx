import { useAccount, useContractRead } from "@starknet-react/core";
import React from "react";

const testAddress = "0x0440c10196d5ee15f4e4c30166fe764d89af6d882400d442a8d8f2d1b5d59f58";

const abi = [
  {
    name: "Balance",
    type: "impl",
    interface_name: "balance::balance::IBalance"
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
            type: "core::integer::u128"
          }
        ],
        state_mutability: "view"
      },
      {
        name: "increase",
        type: "function",
        inputs: [
          {
            name: "a",
            type: "core::integer::u128"
          }
        ],
        outputs: [],
        state_mutability: "external"
      }
    ]
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "value_",
        type: "core::integer::u128"
      }
    ]
  },
  {
    kind: "enum",
    name: "balance::balance::Balance::Event",
    type: "event",
    variants: []
  }
];

const Read: React.FC = () => {
  const { address } = useAccount();

  console.log(address)

  const { data, isError, isLoading, error } = useContractRead({
    functionName: "get",
    args: [],
    abi,
    address: testAddress,
    watch: true,
  });

  console.log("---------------------->")
  console.log(data)

  if (isLoading) return <div>Loading ...</div>;
  if (isError || !data) return <div>{error?.message}</div>;

  const balance = data // Safely extract the balance value

  return <div>{balance.toString()}n</div>;
};

export default Read;
