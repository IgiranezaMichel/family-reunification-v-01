/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography } from "@mui/material"
import { Add, Delete, Edit, List, LockOutlined, PostAdd, UpdateOutlined } from "@material-ui/icons"
import { CreateCase } from "./create"
import { useState } from "react"
import { TimelineComponent } from "../../../../../components/TimelineComponent"
import { useCaseContext } from "../../../../../context.tsx/caseContext"
import { ProgressBar } from "../../../../../components/ProgressBar"

export const CasesCrud = (props: { search: string }) => {
    const [action, setAction] = useState('Add Case');
    props.search;
    const { data } = useCaseContext();
    console.log(data)
    return (
        <>
            <div className="mt-3">
                <Button variant="contained"
                    data-bs-toggle="modal" data-bs-target='#addCase' className="" onClick={() => setAction('Create Case')}>
                    <Add /> New
                </Button>
                <div className="fs-4 fw-bold mt-4">
                    List of available cases
                </div>
            </div>
            {!data.responseReady&&<div>
                <div className="text-center d-flex align-items-center justify-content-center" style={{height:'30dvh'}}>
                <ProgressBar/>
                </div>
                </div>}
            {
                data.responseReady && data.responseContent && data.responseContent.length != 0 &&
                data.responseContent.map(
                    (data: any, index: number) => {
                        return <TimelineComponent title={data.title} key={index}>
                            <Typography>
                                <div className="mb-2"><Edit/> {data.description}</div>
                                <small className="d-block"><b><PostAdd/> Posted by </b>{data.customer.firstName} {data.customer.lastName}</small>
                                <small className="d-block"><LockOutlined/><b> Role </b> {data.customer.role}</small>
                                <div>
                                    <small className="float-end d-block">{data.timeStamp}</small>
                                </div>
                                <div className="modal-footer" style={{ clear: 'both' }}>
                                    <UpdateOutlined className="bg-success text-white p-1 fs-3 rounded-circle m-1" />
                                    <Delete className="bg-danger text-white p-1 fs-3 rounded-circle m-1" />
                                    <List className="bg-info p-1 fs-3 rounded-circle m-1" />
                                </div>
                            </Typography>
                        </TimelineComponent>
                    }
                )
            }
            {
                data.responseReady && data.responseContent && data.responseContent.length == 0 && <div className="bg-body-tertiary p-5 text-center mt-2">
                    -- No data found --
                </div>
            }
            <CreateCase action={action} />
        </>
    )
}