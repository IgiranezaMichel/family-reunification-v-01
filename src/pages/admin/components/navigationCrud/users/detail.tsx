/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, Divider, Typography } from "@mui/material";
import { CalendarToday, Comment, Description, Email, List, LocationOn, Map, Person, Phone, Wc } from "@material-ui/icons";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab";
import { BootstrapModal } from "../../../../../components/bootstrapModal";
import { useUserContext } from "../../../../../context.tsx/UserContext";
import { useEffect, useState } from "react";

export const UserDetail=(props:{arrIndex:number})=>{
    const {data}=useUserContext();
    const [user,setUser]=useState<any>({});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(data!=undefined){
                    const result=data[props.arrIndex];
                    setUser(result);
                }
            }
            fetch();
        }
    )
return(
    <BootstrapModal modalTitle={
       <>
       {user&&<div className="d-flex">
            <Avatar/>
            <div className="card justify-content-center border-0"> {user.firstName} {user.lastName} Details</div>
        </div>}
       </>
    } id="user-details" size="modal-fullscreen" bg="transparent">
        {user&&<Typography className="row m-auto col-12">
            <section className="col-md-3">
                <div className="card rounded-0">
                    <img src={"data:image/png;base64,"+user.profilePicture}className="card-img" />
                </div>
            </section>
            <section className="col-md-4 justify-content-center card border-0">
                <p><Person/>{user.firstName} {user.lastName}</p>
                <p><Wc/>{user.gender}</p>
                <p><Map/>{user.country}</p>
                <p><Map/>{user.nativeCountry}</p>
                <p><CalendarToday/>{user.dob}</p>
            </section>
            <section className="col-md-4 justify-content-center card border-0">
                <p><Email/>{user.email} {user.lastName}</p>
                <p><Phone/>{user.phoneNumber}</p>
                <p><LocationOn/>{user.address}</p>
                <p><CalendarToday/>{user.country}</p>
                <p><CalendarToday/>{user.country}</p>
            </section>
        </Typography>}
        <Divider className="border border-2"/>
        <div className="overflow-auto container">
        <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
                <div className="h4 fw-bold mt-4">
                    Recent Posts
                </div>
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