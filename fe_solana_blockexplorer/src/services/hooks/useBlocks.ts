import { useEffect, useState } from "react";
import * as web3 from "@solana/web3.js";



const useBlocks = () => {
  const [blocks, setBlocks] = useState<number[]>();

  useEffect(() => {
    async function fetchBlocks() {
      const conn = new web3.Connection(web3.clusterApiUrl("devnet"));
      const slot = await conn.getSlot();
      const b = await conn.getBlocks(slot - 4);
      setBlocks(b);
    }
    fetchBlocks();
  }, []);
  
    return blocks;
};

export default useBlocks;
