import { Sort } from "@material-ui/icons"
import { Pagination } from "@mui/material"
import { UsersCrud } from "./navigationCrudComponents/users"

export const Users=()=>{
    return(
        <main className="container-lg">
        <section className="p-2 bg-primary rounded">
        <div className="fs-3 fw-bold text-white mb-4">
            Manage User
        </div>
        <div>
            <input type="search" placeholder="search ..." className="float-end border-0 border-bottom border-2 bg-primary text-white border-white col-sm-4"/>
        </div>
        <div className="d-flex">
            <Pagination className="text-white"/> 
            <div className="mx-3">
            <Sort className="text-white"/><select className="rounded-2 px-1 bg-primary text-white border-white">
                <option value="">sort by</option>
                <option value="">Name</option>
                <option value="">sort by</option>
            </select>
            </div>
        </div>
        </section>
        <UsersCrud/>
        </main>
    )
}