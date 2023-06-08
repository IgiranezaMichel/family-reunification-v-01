import { Button, Typography } from "@mui/material"
import { PaginationInput } from "../../../../../typedefs/default/paginationInput"
import { Add, Delete, List, Update } from "@material-ui/icons"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab"

export const CasesCrud = (props: { search: string, page: PaginationInput }) => {

    return (
        <>

            <div className="mt-3">
                <Button variant="contained" className="">
                    <Add /> New
                </Button>
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
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                        <Typography>
                            <small>on 23/07/2023</small> 
                            <div className="modal-footer">
                                <Update className="bg-success text-white p-1 fs-3 rounded-circle m-1"/> 
                                <Delete className="bg-danger text-white p-1 fs-3 rounded-circle m-1"/> 
                                <List className="bg-info p-1 fs-3 rounded-circle m-1"/>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}