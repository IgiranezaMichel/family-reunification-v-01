/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowForward, Close, ContactSupport } from "@material-ui/icons"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab"
import { Avatar, Button, Dialog, Tooltip, Typography } from "@mui/material"
import { useCustomerLostPost } from "../../../../../controller/lost/query"
import { LostDetail } from "./lostDetail"
import { useState } from "react"
export const CustomerPost = () => {
    const user = JSON.parse(String(localStorage.getItem('user')));
    const { response } = useCustomerLostPost(Number(user.id));
    const [customerId, setCustomerId] = useState('');
    const [showLostDetail, setShowLostDetail] = useState(false);
    return (
        <>
            {response.responseReady && response.responseContent != undefined &&
                response.responseContent.length != 0 && response.responseContent.map((data: any) => <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" className="d-flex">
                                <Tooltip arrow placement="top" title={<><img className="col-md-6 card-img" src={data.profile} alt="" /></>}><Avatar src={data.profile} /></Tooltip> <div className="card d-flex justify-content-center align-items-center bg-transparent border-0 mx-2"> {data.name}</div>
                                <section>{data.description}</section>
                            </Typography>
                            <Typography>
                                <b>status </b> {data.hasFound ? <span className="text-success">Has Found</span> : <span>Not Found</span>}
                            </Typography>
                            <Typography>
                                <b>Expected Address </b> {data.expectedAddress}
                            </Typography>
                            <Typography className="float-end">
                                <small >{data.timeStamp}</small>
                            </Typography>
                            <div style={{ clear: 'both' }} className="modal-footer border-0">
                                {!data.hasFound && <Tooltip title={<><b>{data.name}</b> has found?</>} arrow>
                                    <Button><ContactSupport /></Button>
                                </Tooltip>}
                                <Tooltip title={<><b>{data.name}</b> details</>}>
                                <Button onClick={() => { setCustomerId(data.id); setShowLostDetail(true) }}><ArrowForward />  </Button>
                                </Tooltip>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>)}
            {response.responseReady && response.responseContent != undefined &&
                response.responseContent.length == 0 && <div className="text-center p-5 bg-body-secondary">
                    No Post found
                </div>}
            <Dialog open={showLostDetail} maxWidth='md' PaperProps={{ className: 'col-12 rounded-0' }}>
                <LostDetail customerId={customerId}>
                    <div className="p-3 fw-bold sticky-top bg-white">Details <Close onClick={() => setShowLostDetail(false)} className="float-end" /></div>
                </LostDetail>
            </Dialog>
        </>
    )
}