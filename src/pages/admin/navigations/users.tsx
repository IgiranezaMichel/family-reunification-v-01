import { Sort } from "@material-ui/icons"
import { NativeSelect, Pagination, TextField } from "@mui/material"
import { UsersCrud } from "../components/navigationCrud/users"
export const Users = () => {
    return (
        <main className="container-lg">
            <section className="p-2 bg-primary rounded">
                <div className="fs-3 fw-bold text-white mb-4">
                    Manage User
                </div>
                <div>
                    <TextField variant="standard" type="search" placeholder="search ..." className="float-end border-0 border-bottom border-2 text-white border-white col-sm-4" />
                </div>
                <div className="d-flex">
                    <Pagination className="text-white" />
                    <div className="mx-3">
                        <Sort className="text-white" />
                        <NativeSelect inputProps={{ name: 'select Gender', id: 'uncontrolled' }}
                            variant="standard" className="fw-bold border-1 border-white  mb-3">
                            <option>Sort by</option>
                            <option>Female</option>
                        </NativeSelect>
                    </div>
                </div>
            </section>
            <UsersCrud />
        </main>
    )
}