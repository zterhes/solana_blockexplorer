import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { BlockResponse } from "@solana/web3.js";
import React from "react";
import useBlock from "../services/hooks/useBlock";

interface Props {
  blockNumber: number;
}

interface DataForCard {
  blockNumber: number;
  blockHash: string;
  transactionNum: number;
  percentigeOfSuccessTransfers: number;
}

interface CardRowData {
  title: string;
  value: number | string;
  needsTransform: boolean;
}

interface PropsForTransformedValue {
  transformable: boolean;
  value: number | string;
}

const blockDataHandler = (
  blockNumber: number,
  fetchResponse: BlockResponse
): DataForCard => {
  const outputData: DataForCard = {
    blockHash: fetchResponse.blockhash,
    blockNumber: blockNumber,
    transactionNum: fetchResponse.transactions.length,
    percentigeOfSuccessTransfers: 0,
  };
  let transactionSuccesNum: number = 0;
  fetchResponse.transactions.forEach((transaction) => {
    if (transaction.meta?.err === null) transactionSuccesNum++;
  });
  outputData.percentigeOfSuccessTransfers =
    (transactionSuccesNum / outputData.transactionNum) * 100;
  return outputData;
};

const TransformedValue: React.FC<PropsForTransformedValue> = ({
  transformable,
  value,
}) => {
  if (transformable) {
    return <Typography>{value}%</Typography>;
  } else {
    return <Typography>{value}</Typography>;
  }
};

const CardRow: React.FC<CardRowData> = ({ title, value, needsTransform }) => (
  <>
    <Grid container direction="row" rowSpacing={5}>
      <Grid xs={6} item justifyContent={"center"}>
        <Box>
          <Typography>{title}</Typography>
        </Box>
      </Grid>
      <Grid xs={6} item textAlign={"right"}>
        <TransformedValue value={value} transformable={needsTransform} />
      </Grid>
    </Grid>
  </>
);

const BlockDataCard: React.FC<DataForCard> = ({
  blockHash,
  blockNumber,
  transactionNum,
  percentigeOfSuccessTransfers,
}) => (
  <Card variant="outlined">
    <CardActionArea>
      <CardContent>
        <CardRow
          title="BlockHash"
          value={blockHash}
          needsTransform={false}
        ></CardRow>
        <CardRow
          title="BlockNumber"
          value={blockNumber}
          needsTransform={false}
        ></CardRow>
        <CardRow
          title="Number of transactions"
          value={transactionNum}
          needsTransform={false}
        ></CardRow>
        <CardRow
          title="Tranfer success rate"
          value={percentigeOfSuccessTransfers}
          needsTransform={true}
        ></CardRow>
      </CardContent>
    </CardActionArea>
  </Card>
);

const BlockDataContainer: React.FC<Props> = ({ blockNumber }) => {
  const blockData = useBlock(blockNumber);
  if (!blockData) return null; // TODO: add loading / placeholder text
  const dataForCard = blockDataHandler(blockNumber, blockData);
  return <BlockDataCard {...dataForCard} />;
};

export default BlockDataContainer;
