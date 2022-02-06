import { Container, Typography } from "@mui/material";
import { useParams } from "react-router";

const SearchWallet: React.FC = () => {
  let { id } = useParams();
  return (
    <Container>
      <Typography variant="h1">Search for wallet {id}</Typography>
    </Container>
  );
};

export default SearchWallet;
