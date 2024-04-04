import { Sort } from "@material-ui/icons"
import { NativeSelect, Pagination, TextField } from "@mui/material"
import { CasesCrud } from "../components/navigationCrud/cases"
import { useCaseList } from "../../../controller/cases/queries"
import { CaseContext } from "../../../context.tsx/caseContext"
export const Cases = () => {
    const cases=useCaseList();
    return (
        <CaseContext.Provider value={{data:cases.response,updateData:cases.result.refetch}}>
            <main className="container-lg">
            <section className="bg-primary rounded p-2">
                <div className="fs-4 fw-bold">
                    Manage Cases
                </div>
                <div className="mb-4 fw-bold text-white">
                    Total Cases
                </div>
                <div>
                    <TextField type="search" placeholder="search ..." variant="standard" className="float-end text-white border-0 border-bottom border-2 border-dark col-sm-4" style={{ color: 'white !important' }} />
                </div>
                <div className="d-flex">
                    <Pagination />
                    <div className="mx-3">
                        <Sort /><NativeSelect className="rounded-2 px-1">
                            <option value="">sort by</option>
                            <option value="">Name</option>
                            <option value="">sort by</option>
                        </NativeSelect>
                    </div>
                </div>
            </section>
            <CasesCrud search="" />
        </main>
        </CaseContext.Provider>
    )
}