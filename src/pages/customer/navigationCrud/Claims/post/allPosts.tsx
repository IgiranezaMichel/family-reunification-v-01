import { Comment, List, LocationOn, MapOutlined, Person } from "@material-ui/icons"
import { Button} from "@mui/material"

export const AllPost=()=>{
    return(
        <>
        <div className="col-sm-6  m-auto">
            <div className="card text-white rounded-0 p-0">
                <img className="card-img rounded-0 p-0" src="/public/Visitor/Login.png" />
                <div className="card-img-overlay text-center">
                    <Button className="" variant="contained">
                       <MapOutlined/> Country</Button>
                </div>
                <div className="text-dark mt-1 mb-1"><Person/></div>
                <div className="text-dark"><LocationOn/></div>
                <div className="modal-footer">
                    <Comment className="text-primary mx-1" /> <List className="text-primary mx-1" />
                </div>
            </div>
        </div></>
    )
}