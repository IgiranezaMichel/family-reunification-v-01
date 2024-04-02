import { Comment, Description, List } from "@material-ui/icons"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab"
import { Typography } from "@mui/material"

export const ClaimCrud = () => {
    return (
        <>
            <div className="overflow-auto">
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
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                            <Typography>
                                <small>on 23/07/2023</small>
                            </Typography>
                            <div className="modal-footer border-0">
                                <Description /> <Comment /> <List />
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                            <Typography>
                                <small>on 23/07/2023</small>
                            </Typography>
                            <div className="modal-footer border-0">
                                <Description /> <Comment /> <List />
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                            <Typography>
                                <small>on 23/07/2023</small>
                            </Typography>
                            <div className="modal-footer border-0">
                                <Description /> <Comment /> <List />
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>
        </>
    )
}