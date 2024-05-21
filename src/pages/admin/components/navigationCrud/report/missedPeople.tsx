import {  FilterBAndW } from "@material-ui/icons";
import { Grid, Paper, styled } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

export const MissedPeople = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <main className="fw-normal">
            <Grid>Recent Missed People</Grid>
            <Grid2 spacing={1}>
                <Grid >
                    <Item><FilterBAndW/></Item>
                </Grid>
            </Grid2>
        </main>
    )
}