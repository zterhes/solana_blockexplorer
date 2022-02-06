import { ChangeEvent, useState } from "react";
import {
  Grid,
  Typography,
  ButtonGroup,
  IconButton,
  TextField,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SolanaLogo from "../static/img/solanaLogo.svg";

const Home: React.FC = () => {
  const [input, setInput] = useState<string>();
  const route = `/searchWallet/:${input}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <img src={SolanaLogo} />
      <Grid>
        <Typography mt={2} variant="h1">
          BlockExplorer
        </Typography>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField
          margin="normal"
          id="wallet_search"
          label="Search for a wallet"
          variant="outlined"
          onChange={handleChange}
        />
        <IconButton sx={{ height: "100%" }} href={route}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Grid>
        <ButtonGroup variant="outlined" size="large">
          <Button href="/tokens">List Tokens</Button>
          <Button href="/blocks">Last Blocks</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Home