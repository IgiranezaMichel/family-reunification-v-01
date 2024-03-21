import { Home } from "@material-ui/icons"
import { Card } from "@mui/material"

export const AdminBody=()=>{
    return(
        <>
        <div className="row m-auto col-sm-9 d-flex justify-content-center align-items-center">
            <div className="col-sm-1">
            <Card className="bg-info d-flex justify-content-center align-items-center" style={{rotate:'45deg',width:'50px',height:'50px'}} >
                <div style={{rotate:'-45deg'}}>
                <Home className="fs-1" />
                </div>
            </Card>
            </div>
            <Card className="col-sm-10">
                <div className="display-6 fw-bold">
                    Family Reunification and tracking
                </div>
                <div className="mt-4 fs-5 fw-bold">
                    /home
                </div>
            </Card>
            <div className="col-sm-1">
            <Card className="bg-info d-flex justify-content-center align-items-center" style={{rotate:'45deg',width:'50px',height:'50px'}} >
                <div style={{rotate:'-45deg'}} className="p-1">
                <img src="Visitor/baby-sitting.png" className="card-img"/>
                </div>
            </Card>
            </div>
        </div>
        </>
    )
}