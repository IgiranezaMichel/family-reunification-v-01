import { Comment, List, LocationOn, MapOutlined, Person } from "@material-ui/icons"
import { Avatar, Button} from "@mui/material"

export const AllPost=()=>{
    const color=['yellow','blue','green','grey']
    console.log(Math.floor(Math.random()*5))
    return(
        <>
        <div className="col-sm-6 border rounded-0 rounded-0 m-auto">
            <div className="d-flex col-12 p-1 col-12" style={{background:color[Math.floor(Math.random()*5)]}}>
                <Avatar></Avatar> <div className="card bg-transparent fw-bold d-flex justify-content-center rounded-0 border-0">Poster name </div>
            </div>
            <div className="card text-white rounded-0 p-0">
                <img className="card-img rounded-0 p-0"  src="/public/Visitor/baby-sitting.png" />
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
        </div>
        </>
    )
}