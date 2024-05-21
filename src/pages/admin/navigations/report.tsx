import { ReportCrud } from "../components/navigationCrud/report"

export const Report=()=>{
    return(
        <>
        <div className="fs-4 fw-bold">
            Manage Report
            <ReportCrud/>
        </div>
        </>
    )
}