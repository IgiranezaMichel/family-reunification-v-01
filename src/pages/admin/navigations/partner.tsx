/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sort } from "@material-ui/icons"
import { Pagination } from "@mui/material"
import { useState } from "react"
import { PaginationInput } from "../../../typedefs/default/paginationInput"
import { PartnerCrud } from "../components/navigationCrud/partner"
import { OrganizationContext } from "../../../context.tsx/OrganizationContext"
import { useOrganization } from "../../../controller/organization/query"

export const Partner = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState<PaginationInput>({ pageNumber: 0, pageSize: 10, sort: 'id' });
    const organizationResult = useOrganization(page);
    const updateData = () => {
        organizationResult.refetch();
    }
    return (
        <>
            
            {organizationResult.response.responseReady && <OrganizationContext.Provider value={{ data:organizationResult.response, updateData }}>
                <main className="container-lg m-auto">
                    <section className="bg-primary p-2 rounded">
                        <div className="fs-4 fw-bold mb-4 text-white">
                            Recent Partners
                        </div>
                        <div>
                            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="search ..."
                                className="float-end border-0 border-bottom border-2 border-white bg-primary col-sm-4" />
                        </div>
                        <div className="d-flex">
                            <Pagination />
                            <div className="mx-3">
                                <Sort /><select className="rounded-2 px-1">
                                    <option value="">sort by</option>
                                    <option value="">Name</option>
                                    <option value="">sort by</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <PartnerCrud page={page} search={search} key={1} />
                </main>
            </OrganizationContext.Provider>}
        </>
    )
}