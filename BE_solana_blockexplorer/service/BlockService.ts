import * as web3 from "@solana/web3.js";
import { response } from "express";

export const getBlocks = async () => {
  let getBlocks = await new web3.Connection(
    web3.clusterApiUrl("devnet")
  ).getBlocks(104199250);
  console.log(`getBlocks`, getBlocks);
};

export const getBlock = async () => {
  await new web3.Connection(web3.clusterApiUrl("devnet"))
    .getBlock(104199258)
    .then((response) => console.log(`response`, response))
    .catch((error) => console.log(`error`, error));
};
