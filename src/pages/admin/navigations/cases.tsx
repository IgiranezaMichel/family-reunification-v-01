import { Add, Sort } from "@material-ui/icons"
import { Button, Pagination } from "@mui/material"

export const Cases=()=>{
    return(
        <div>
        <div className="fs-4 fw-bold">
            Manage Cases
        </div>
        <div>
            <input type="search" placeholder="search ..." className="float-end border-0 border-bottom border-2 border-dark col-sm-4"/>
        </div>
        <div className="d-flex">
            <Pagination/> 
            <div className="mx-3">
            <Sort/><select className="rounded-2 px-1">
                <option value="">sort by</option>
                <option value="">Name</option>
                <option value="">sort by</option>
            </select>
            </div>
        </div>
        <div className="mt-3">
            <Button variant="contained" className="">
                <Add/> New
            </Button>
        </div>
        </div>
    )
}