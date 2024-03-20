import { Home } from "@material-ui/icons"
import { Card } from "@mui/material"

export const AdminBody=()=>{
    return(
        <>
        <div className="row m-auto col-sm-9">
            <div className="col-sm-3">
            <Card className="bg-info d-flex justify-content-center align-items-center" style={{rotate:'45deg',width:'50px',height:'50px'}} >
                <div style={{rotate:'-45deg'}}>
                <Home className="fs-1" />
                </div>
            </Card>
            <Card>
                <div className="display-6">
                    
                </div>
            </Card>
            </div>
        </div>
        </>
    )
}