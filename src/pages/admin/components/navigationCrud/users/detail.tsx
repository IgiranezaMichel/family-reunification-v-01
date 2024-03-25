
import { Typography } from "@mui/material";
import { Comment, Description, List, Person, PersonAdd, Phone, Wc } from "@material-ui/icons";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab";
import { BootstrapModal } from "../../../../../components/bootstrapModal";

export const UserDetail=(props:{userId:number})=>{
return(
    <BootstrapModal modalTitle={<div>User Details</div>} id="user-details" size="modal-fullscreen" bg="transparent">
        <Typography className="row m-auto col-12">
            <section className="col-sm-3">
                <div className="card">
                    <img src="/public/Visitor/baby-sitting.png" className="card-img" />
                </div>
            </section>
            <section className="col-sm-9 justify-content-center card border-0">
                <p><Person/>Mike</p>
                <p><Wc/>Male</p>
                <p><Phone/> +250788 2892 90</p>
                <p><Person/></p>
            </section>
        </Typography>
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
                            <Description/> <Comment/> <List/>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            
            </Timeline>
        </div>
    </BootstrapModal>
)
}