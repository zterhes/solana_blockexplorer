import { Container, Typography } from "@mui/material"
import { useParams } from "react-router"

export default () => {
    let { id } = useParams();
    return (
        <Container>
            <Typography variant='h1'>Search for wallet {id}</Typography>
        </Container>
    )
}