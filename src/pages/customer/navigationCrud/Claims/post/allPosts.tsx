/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowForwardRounded, Close, LocationOn, MessageTwoTone, Person } from "@material-ui/icons"
import { Avatar, Box, Button, Dialog, Grid, Paper, styled } from "@mui/material"
import { useLost } from "../../../../../controller/lost/query"
import { useState } from "react";
import { LostSummary } from "./lostSummary";

export const AllPost = () => {
    const { response } = useLost();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
    }));
    const [customerId,setCustomerId]=useState('');
    const [showLostDetail,setShowLostDetail]=useState(false);
    return (
        <>
            <Grid container spacing={2} direction={'row'} p={0}>
                {response.responseReady && response.responseContent != undefined && response.responseContent.length != 0
                    && response.responseContent.map((data: any) => {
                        return <Grid key={data.id} textAlign={'left'} item xs={3} style={{ height: '100%' }}>
                            <Item sx={{ p: 0 }} className="card ">
                                <img style={{ borderBottomRightRadius: '50%', objectFit: 'cover', borderBottomLeftRadius: '50%', overflow: 'hidden', height: '30dvh' }} className="col-12" src={data.profile} />
                                <div className="card-img-overlay p-0">
                                    <section className="d-flex" style={{backgroundColor:'rgb(255,255,255,.8)'}}>
                                    <Avatar src={data.postedBy.profilePicture}/>
                                    <div className="card d-flex justify-content-center fw-bold bg-transparent border-0 align-content-center">
                                        {data.name}
                                    </div>
                                    </section>
                                </div>
                                <p><Person />{data.name}</p>
                                <p><LocationOn />{data.address}</p>
                                <p className="modal-footer mx-2"><small >{data.currentCountry}</small></p>
                                <Box className="d-flex justify-content-between">
                                    <Button>
                                        <MessageTwoTone />
                                    </Button>
                                    <Button onClick={()=>{setCustomerId(data.id);setShowLostDetail(true)}} sx={{':hover':{transition:'all 0.4s ease-out',scale:'1.2'}}}>
                                        <ArrowForwardRounded />
                                    </Button>
                                </Box>
                            </Item>
                        </Grid>
                    })}
            </Grid>
            <Dialog open={showLostDetail} maxWidth='md' PaperProps={{className:'col-12 rounded-0'}}>
                    <LostSummary customerId={customerId}>
                    <div className="p-3 fw-bold sticky-top bg-white">Details <Close onClick={()=>setShowLostDetail(false)} className="float-end"/></div>
                    </LostSummary>
                </Dialog>
        </>
    )
}