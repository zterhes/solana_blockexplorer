import React, { ChangeEvent, useState } from 'react'
import {
    Grid,
    Typography,
    ButtonGroup,
    IconButton,
    TextField,
    Box,
    Button
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export default () => {
    const [input, setInput] = useState<string>();
    const route = `/searchVallet:${input}`

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleClick = () => {

    }

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" minHeight="100vh">
            <Grid>
                <Typography mt={2} variant="h1">Solana BlockExplorer</Typography>
            </Grid>
            <Box display="flex" justifyContent="center" alignItems="center">
                {/* <TextField margin="normal" id="wallet_search" label="Find a wallet" variant="outlined"></TextField> */}
                <TextField
                    margin="normal"
                    id="wallet_search"
                    label="Search for a wallet"
                    variant="outlined"
                    onChange={handleChange} />
                <IconButton sx={{ height: "100%" }} href={route}><SearchIcon /></IconButton>
            </Box>
            <Grid>
                <ButtonGroup variant="outlined" size="large">
                    <Button href="/tokens">List Tokens</Button>
                    <Button href="/blocks">Last Blocks</Button>
                </ButtonGroup>
            </Grid>
        </Grid>

    )
}