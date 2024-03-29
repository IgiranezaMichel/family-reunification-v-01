import { Comment, Description, List } from "@material-ui/icons"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab"
import { Button, Tooltip, Typography } from "@mui/material"

export const FamilyCrud=()=>{
    return(
        <main >
            <span className="float-end">
            <Button variant="contained" className="rounded-0 m-1">Join my Family</Button>
            <Button variant="contained" className="rounded-0 ">Claim Join Code</Button>
            </span>
            <div style={{clear:'both'}} className="fw-bold">
                Family member
            </div>
            <div className="text-center mt-4">
                <span className="border-bottom border-2 border-primary fw-bold mx-4">All member</span>
                <span className="mx-4">Lost member</span>
                <span>History</span>
            </div>
            <Timeline sx={{
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
                        <TimelineContent  sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                            <Typography>
                                <small>dob 23/07/2023</small>
                            </Typography>
                            <div className="modal-footer border-0">
                                <Tooltip placement="top" title='.. Details'>
                                <List />
                                </Tooltip>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
        </main>
    )
}