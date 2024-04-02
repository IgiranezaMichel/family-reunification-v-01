import { Button, Typography } from "@mui/material"
import { Add, Delete, List,UpdateOutlined } from "@material-ui/icons"
import { CreateCase } from "./create"
import { useState } from "react"
import { TimelineComponent } from "../../../../../components/TimelineComponent"

export const CasesCrud = (props: { search: string}) => {
    const [action,setAction]=useState('Add Case');
    console.log(props.search)
    return (
        <>
            <div className="mt-3">
                <Button variant="contained"
                data-bs-toggle="modal" data-bs-target='#addCase' className="" onClick={()=>setAction('Create Case')}>
                    <Add /> New
                </Button>
            </div>
             <TimelineComponent title="Title">
             <Typography>
                            <small>on 23/07/2023</small> 
                            <div className="modal-footer">
                                <UpdateOutlined className="bg-success text-white p-1 fs-3 rounded-circle m-1"/> 
                                <Delete className="bg-danger text-white p-1 fs-3 rounded-circle m-1"/> 
                                <List className="bg-info p-1 fs-3 rounded-circle m-1"/>
                            </div>
                        </Typography>
             </TimelineComponent>
            <CreateCase action={action}/>
        </>
    )
}