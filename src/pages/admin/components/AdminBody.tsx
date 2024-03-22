import { FileCopyRounded, Home, Message, People, ReportRounded, SettingsApplications } from "@material-ui/icons"
import { Card } from "@mui/material"

export const AdminBody=(props:{active:string})=>{
    return(
        <>
        <div className="row m-auto col-sm-9 d-flex m-auto justify-content-center align-items-center">
            <div className="col-sm-1">
            <Card className="bg-info d-flex justify-content-center align-items-center" style={{rotate:'45deg',width:'100px',height:'100px'}} >
                <div style={{rotate:'-45deg'}}>
                {props.active=='home'?<Home className="fs-1" />
                :props.active=='partner'?<People className="fs-1"/>
                :props.active=='users'?<People className="fs-1"/>
                :props.active=='cases'?<FileCopyRounded className="fs-1"/>
                :props.active=='report'?<ReportRounded className="fs-1"/>
                :props.active=='chat'?<Message className="fs-1"/>
                :props.active=='settings'?<SettingsApplications className="fs-1"/>:
                ''}
                </div>
            </Card>
            </div>
            
            <div className="card border-0 col-sm-10" style={{zIndex:-1}}>
                <img src="/Visitor/mayperson.png" className="card-img"/>
               <div className="card-img-overlay p-5">
               <div className="display-6 fw-bold text-white">
                    Family Reunification and tracking
                </div>
                <div className="mt-5 text-white fs-5 fw-bold">
                    /{props.active}
                </div>
               </div>
            </div>
            <div className="col-sm-1">
            <Card className="bg-info d-flex justify-content-center align-items-center" style={{rotate:'45deg',width:'100px',height:'100px'}} >
                <div style={{rotate:'-45deg'}} className="p-1">
                <img src="Visitor/baby-sitting.png" className="card-img"/>
                </div>
            </Card>
            </div>
        </div>
        </>
    )
}