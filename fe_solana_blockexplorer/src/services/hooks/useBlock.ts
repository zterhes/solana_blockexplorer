import { useEffect, useState } from "react";
import { Connection, BlockResponse, clusterApiUrl } from "@solana/web3.js";

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
  }, []);
  return blockData;
};

export default useBlock;
