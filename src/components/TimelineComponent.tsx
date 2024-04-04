import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab"
import { Typography } from "@mui/material"
import { FC, ReactNode } from "react"
type TimelineItem={
    title:string,
    children:ReactNode
}
export const TimelineComponent:FC<TimelineItem> = (props) => {
    return (
        <div>
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
                        <Typography variant="h6" className="fw-bold" component="span">
                            {props.title}
                        </Typography>
                        <Typography>
                            {props.children}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            
        </div>
    )
}
