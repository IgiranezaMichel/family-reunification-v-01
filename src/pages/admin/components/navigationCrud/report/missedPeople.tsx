import { Grid, Paper, styled } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { countries } from "../../../../../object";
import './index.css'
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
            <Grid2 container spacing={1} direction={'row'} border={0} overflow={'auto'}>
                <Grid xs={4} border={1}>
                    <Item elevation={0}>Filter by</Item>
                 </Grid>
                 <Grid xs={4} border={1}>
                    <Item elevation={0}>
                        <select name="" id="" style={{border:'none'}} className="border-0">
                            <option value="">Location</option>
                             {countries.map(data=><option>{data}</option>)}
                        </select>
                    </Item>
                 </Grid>
                 <Grid xs={4} border={1}>
                    <Item elevation={0}>
                        <small>From date</small>
                        <input type="date" className="mx-1 border-0" />
                    </Item>
                 </Grid>
                 <Grid xs={4} border={1}>
                    <Item elevation={0}>
                        <small>To date</small>
                        <input type="date" className="mx-1 border-0" />
                    </Item>
                 </Grid>
            </Grid2>
            
        </main>
    )
}