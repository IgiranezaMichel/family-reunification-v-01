import { Person } from "@material-ui/icons"

export const AdminNavigation=()=>{
    return(
        <>
            <nav className="bg-primary text-white p-2">
            <div className="fw-bold"><Person className="fs-1 rounded-circle text-dark p-1 bg-white"/> user name</div>
            </nav>
            <div className="modal-footer" style={{transform:'translate(0px,-20px)'}}>
                <Person className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Person className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Person className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Person className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Person className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Person className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
            </div>
        </>
    )
}