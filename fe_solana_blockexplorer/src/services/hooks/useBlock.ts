import { useEffect, useState } from "react";
import { Connection, BlockResponse, clusterApiUrl } from "@solana/web3.js";
import { BlockData } from "../../entities/Interfaces";
import BlockDataContainer from "../../components/BlockDataContainer";

const blockDataConverter = (fetchedData: any) => {};

const useBlock = (blockNumber: number) => {
  const [blockData, setBlockData] = useState<BlockResponse>();
  useEffect(() => {
    async function fetch() {
      const fetchedData = await new Connection(
        clusterApiUrl("devnet")
      ).getBlock(blockNumber);
      if (fetchedData !== null) {
        setBlockData(fetchedData);
      }
    }
    fetch();
    console.log(blockData)
  }, []);
};

export default useBlock;
