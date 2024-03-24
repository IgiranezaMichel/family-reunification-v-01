import { Add, Sort } from "@material-ui/icons"
import { Button, Pagination } from "@mui/material"
import { PartnerCrud } from "./navigationCrudComponents/partner"
import { useState } from "react"
import { PaginationInput } from "../../../typedefs/default/paginationInput"

export const Partner=()=>{
    const [search,setSearch]=useState('');
    const [page,setPage]=useState<PaginationInput>({pageNumber:0,pageSize:10,sort:'id'});
    return(
        <>
        <div className="fs-4 fw-bold mb-4">
           Recent Partners
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
       <PartnerCrud page={page} search={search} key={1}/>
        </>
    )
}