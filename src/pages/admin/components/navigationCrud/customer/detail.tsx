/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarToday, Comment, Description, Email, List, LocationOn, Map, Person, Phone, Wc } from "@material-ui/icons";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab";
import { Avatar, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../../components/bootstrapModal";
import { useCustomerContext } from "../../../../../context.tsx/customerContext";

export const CustomerDetail = (props: { arrIndex: number }) => {
    const { data } = useCustomerContext();
    const [customer, setCustomer] = useState<any>({});
    useEffect(
        () => {
            const fetch = async () => {
                if (data != undefined) {
                    const result = data[props.arrIndex];
                    setCustomer(result);
                }
            }
            fetch();
        }
    )
    return (
        <BootstrapModal modalTitle={
            <>
                {customer && <div className="d-flex">
                    <Avatar />
                    <div className="card justify-content-center border-0"> {customer.firstName} {customer.lastName} Details</div>
                </div>}
            </>
        } id="user-details" size="modal-fullscreen" bg="transparent">
            {customer && <Typography className="row m-auto col-12">
                <section className="col-md-3">
                    <div className="card rounded-0">
                        <img src={customer.profilePicture} className="card-img" />
                    </div>
                </section>
                <section className="col-md-4 justify-content-center card border-0">
                    <p><Person />{customer.firstName} {customer.lastName}</p>
                    <p><Wc />{customer.gender}</p>
                    <p><Map />{customer.country}</p>
                    <p><Map />{customer.nativeCountry}</p>
                    <p><CalendarToday />{customer.dob}</p>
                </section>
                <section className="col-md-4 justify-content-center card border-0">
                    <p><Email />{customer.email} {customer.lastName}</p>
                    <p><Phone />{customer.phoneNumber}</p>
                    <p><LocationOn />{customer.address}</p>
                    <p><CalendarToday />{customer.country}</p>
                    <p><CalendarToday />{customer.country}</p>
                </section>
            </Typography>}
            <Divider className="border border-2" />
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
                                <Description /> <Comment /> <List />
                            </div>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </div>
        </BootstrapModal>
    )
}