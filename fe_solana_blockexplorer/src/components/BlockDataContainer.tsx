import { Card, CardHeader, Avatar } from "@mui/material";
import { Box, minHeight } from "@mui/system";

interface Props {
  blockNumber: number;
}

const BlockDataContainer: React.FC<Props> = ({ blockNumber }) => {
  return (
      <Card variant="outlined">
        <CardHeader title={blockNumber}/>
      </Card>
  );
};

export default BlockDataContainer;
