import { Sort } from "@material-ui/icons"
import { Pagination } from "@mui/material"

export const Users=()=>{
    return(
        <>
        <div className="fs-3 fw-bold">
            Manage User
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
        </>
    )
}