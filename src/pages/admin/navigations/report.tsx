import { Grid, Paper, styled } from "@mui/material"
import { LocationOn } from "@material-ui/icons";
import { countries } from "../../../object";
import './index.css'
import { DisplayReport } from "../components/navigationCrud/report";
export const Report=()=>{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return(
        <>
        <div>
        Manage report
        <main className="fw-normal mt-3">
            <Grid container spacing={1} direction={'row'} border={0} className="mb-3" sx={{mx:0.1}} overflow={'auto'}>
                <Grid border={1}>
                    <Item elevation={0}>Filter by</Item>
                </Grid>
                <Grid border={1}>
                    <Item elevation={0}>
                        <small>Type</small>
                        <select style={{ border: 'none' }} className="border-0 ">
                            <option value="">Recent Lost</option>
                            <option value="">Recent found</option>
                            <option value="">Lost Danger zone</option>
                        </select>
                    </Item>
                </Grid>
                <Grid border={1}>
                    <Item elevation={0}>
                        <LocationOn /> <select style={{ border: 'none' }} className="border-0">
                            <option value="">Location</option>
                            {countries.map(data => <option>{data}</option>)}
                        </select>
                    </Item>
                </Grid>
                <Grid  border={1}>
                    <Item elevation={0}>
                        <small>From date</small>
                        <input type="date" className="mx-1 border-0" />
                    </Item>
                </Grid>
                <Grid  border={1}>
                    <Item elevation={0}>
                        <small>To date</small>
                        <input type="date" className="mx-1 border-0" />
                    </Item>
                </Grid>
            </Grid>
            <DisplayReport/>
        </main>
        </div>
        </>
    )
}