import { Container, Typography } from "@mui/material";
import useBlocks from "../services/hooks/useBlocks";
import BlockDataContainer from "../components/BlockDataContainer";

export default () => {
  const blocks = useBlocks();

  return (
    <Container>
      <Typography variant="h1">Last five blocks</Typography>
      {blocks
        ? blocks.map((block, i) => (
            <BlockDataContainer
              key={i}
              blockNumber={block}
            ></BlockDataContainer>
          ))
        : console.log("nincs adat")}
    </Container>
  );
};
