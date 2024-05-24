/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowForwardRounded, LocationOn, MessageTwoTone, Person } from "@material-ui/icons"
import { Box, Button, Grid, Paper, styled } from "@mui/material"
import { useLost } from "../../../../../controller/lost/query"

export const AllPost = () => {
    const { response } = useLost();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
    }));
    console.log(response)
    return (
        <>
            <Grid container spacing={2} direction={'row'} p={0}>
                {response.responseReady && response.responseContent != undefined && response.responseContent.length != 0
                    && response.responseContent.map((data: any) => {
                        return <Grid key={data.id} textAlign={'left'} item xs={3} style={{ height: '100%' }}>
                            <Item sx={{ p: 0 }} className="card ">
                                <img style={{ borderBottomRightRadius: '50%', objectFit: 'cover', borderBottomLeftRadius: '50%', overflow: 'hidden', height: '30dvh' }} className="col-12" src={data.profile} />
                                <div className="card-img-overlay p-0">
                                    <small>Country:{data.currentCountry}</small>
                                </div>
                                <p><Person />{data.name}</p>
                                <p><LocationOn />{data.address}</p>
                                <Box className="d-flex justify-content-between">
                                    <Button>
                                        <MessageTwoTone />
                                    </Button>
                                    <Button>
                                        <ArrowForwardRounded />
                                    </Button>
                                </Box>
                            </Item>
                        </Grid>
                    })}
            </Grid>
        </>
    )
}