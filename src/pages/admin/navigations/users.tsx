import { Sort } from "@material-ui/icons"
import { NativeSelect, Pagination, TextField } from "@mui/material"
import { UsersCrud } from "../components/navigationCrud/users"
import { useUserPage } from "../../../controller/user/queries"
import { useState } from "react"
import { PaginationInput } from "../../../typedefs/default/paginationInput"
import { UserContext } from "../../../context.tsx/UserContext"
export const Users = () => {
    const [page, setPage] = useState<PaginationInput>({ pageNumber: 0, pageSize: 10, sort: "firstName" })
    const { response,refetch } = useUserPage(page);
    const updateData=()=>{
        refetch();
    }
    return (
        <>
        {!response.responseContent&&<>
        loading ...
        </>}
        {response.responseContent&&<UserContext.Provider value={{data:response.responseContent.content,updateData}}>
            <main className="container-lg">
                <section className="p-2 bg-primary rounded">
                    <div >
                        <div className="fs-3 fw-bold">Manage User</div>
                        <div className="mb-4 text-white fw-bold">Total user <span
                            className="badge bg-info">{response.responseContent.size}</span>
                        </div>
                    </div>
                    <div>
                        <TextField variant="standard" type="search" placeholder="search ..." className="float-end border-0 border-bottom border-2 text-white border-white col-sm-4" />
                    </div>
                    <div className="d-flex">
                        <Pagination className="text-white" />
                        <div className="mx-3">
                            <Sort className="text-white" />
                            <NativeSelect onChange={(e)=>setPage({...page,sort:e.target.value})} inputProps={{ name: 'select Gender', id: 'uncontrolled' }}
                                variant="standard" className="fw-bold text-white border-1 border-white  mb-3">
                                <option className="text-black" value={'firstName'}>Sort by</option>
                                <option className="text-black" value={'lastName'}>Female</option>
                                <option className="text-black" value={'phoneNumber'}>Phone number</option>
                                <option className="text-black" value={'dob'}>Date of Birth</option>
                            </NativeSelect>
                        </div>
                    </div>
                </section>
                <UsersCrud />
            </main>
        </UserContext.Provider>}
        </>
    )
}