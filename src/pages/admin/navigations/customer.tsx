import { Sort } from "@material-ui/icons"
import { NativeSelect, Pagination} from "@mui/material"
import { useEffect, useState } from "react"
import { CustomerContext } from "../../../context.tsx/customerContext"
import { useCustomerPage } from "../../../controller/customer/queries"
import { PaginationInput } from "../../../typedefs/default/paginationInput"
import { CustomerCrud } from "../components/navigationCrud/customer"
export const Customers = () => {
    const [page, setPage] = useState<PaginationInput>({ pageNumber: 0, pageSize: 10, sort: "firstName" });
    const { response, refetch } = useCustomerPage(page);
    const updateData = () => {
        refetch();
    }
    useEffect(
        ()=>{},[page.pageNumber,page.pageSize,page.sort]
    )
    return (
        <>
            {!response.responseContent && <>
                loading ...
            </>}
            {response.responseContent && <CustomerContext.Provider value={{ data: response.responseContent.content, updateData }}>
                <main className="container-lg">
                    <section className="p-2 bg-primary rounded">
                        <div >
                            <div className="fs-3 fw-bold">Manage User</div>
                            <div className="mb-4 text-white fw-bold">Total user <span
                                className="badge bg-info">{response.responseContent.size}</span>
                            </div>
                        </div>
                        <div className="modal-footer d-flex border-top pt-2">
                            {response.responseContent.pageSize!=0&&<div className="text-white d-flex">{response.responseContent.pageNumber + 1} page out of {response.responseContent.pageSize} <Pagination className="text-white" /></div>}
                            <div className="mx-3">
                                <Sort className="text-white" />
                                <NativeSelect onChange={(e) => setPage({ ...page, sort: e.target.value })} inputProps={{ name: 'select Gender', id: 'uncontrolled' }}
                                    variant="standard" className="fw-bold text-white border-1 border-white  mb-3">
                                    <option className="text-black" value={'firstName'}>Sort by</option>
                                    <option className="text-black" value={'lastName'}>Female</option>
                                    <option className="text-black" value={'phoneNumber'}>Phone number</option>
                                    <option className="text-black" value={'dob'}>Date of Birth</option>
                                </NativeSelect>
                            </div>
                        </div>
                    </section>
                    <CustomerCrud />
                </main>
            </CustomerContext.Provider>}
        </>
    )
}