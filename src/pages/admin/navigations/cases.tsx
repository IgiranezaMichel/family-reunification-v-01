import { Sort } from "@material-ui/icons"
import { Pagination } from "@mui/material"
import { CasesCrud } from "../components/navigationCrud/cases"

export const Cases=()=>{
    return(
        <main className="container-lg">
     <section className="bg-primary rounded p-2">
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
     </section>
        <CasesCrud />
        </main>
    )
}