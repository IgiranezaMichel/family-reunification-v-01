import { FileCopyRounded, Group, Home, Message, People, Person, ReportRounded, Settings } from "@material-ui/icons"

export const AdminNavigation=()=>{
    return(
        <main className="sticky-top">
            <nav className="bg-primary text-white p-2">
            <div className="fw-bold"><Person className="fs-1 rounded-circle text-dark p-1 bg-white"/> user name</div>
            </nav>
            <div className="modal-footer" style={{transform:'translate(0px,-20px)'}}>
                <Home className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Group className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <People className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <FileCopyRounded className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <ReportRounded className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Message className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
                <Settings className="fs-1 m-1 bg-danger rounded-circle p-1 border border-2 border-white"/>
            </div>
            <section className="row col-12 m-auto">
            <section className="col-2 card rounded-0">
                <div className="m-2"><Home/>Home</div>
                <div className="m-2"><Group/> Partner</div>
                <div className="m-2"><People/> Users</div>
                <div className="m-2"><FileCopyRounded/> Manage cases</div>
                <div className="m-2"><ReportRounded/> Report</div>
                <div className="m-2"><Message/> Chart</div>
                <div className="m-2"><Settings/> Settings</div>

            </section>
            <section className="col-9 overflow-auto card border-0">

            </section>
        </section>
        </main>
    )
}