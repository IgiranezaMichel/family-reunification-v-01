/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sort } from "@material-ui/icons"
import { NativeSelect, Pagination, Skeleton } from "@mui/material"
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
            {!organizationResult.response.responseReady&&<>
            <Skeleton width={'100%'} height={29} className="bg-primary"/>
            <Skeleton width={'10%'} height={10} className="bg-primary"/>
            <div className="row">
                <Skeleton width={'50%'} height={100} className="bg-primary"/>
                <Skeleton width={'50%'} height={100} className="bg-primary"/>
            </div>
            </>}
            {organizationResult.response.responseReady && <OrganizationContext.Provider value={{ data:organizationResult.response, updateData }}>
                <main className="container-lg m-auto">
                    <section className="bg-primary p-2 rounded">
                        <div className="fs-4 fw-bold  text-white">
                            <div>
                                Recent Partners
                            </div>
                        </div>
                        <div className="mb-4 text-white fw-bold">Total Partners <span className="badge bg-black">{organizationResult.response.responseContent&&<>{organizationResult.response.responseContent.size}</>}</span></div>
                        <div>
                            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="search ..."
                                className="float-end border-0 border-bottom border-2 border-white bg-primary col-sm-4" />
                        </div>
                        <div className="d-flex">
                            <Pagination />
                            <div className="mx-3">
                                <Sort /><NativeSelect onChange={(e)=>setPage({...page,sort:e.target.value})} className="rounded-2 px-1">
                                    <option value="id">sort by</option>
                                    <option value="name">Name</option>
                                    <option value="address">Address</option>
                                </NativeSelect>
                            </div>
                        </div>
                    </section>
                    <PartnerCrud search={search} key={1} />
                </main>
            </OrganizationContext.Provider>}
        </>
    )
}