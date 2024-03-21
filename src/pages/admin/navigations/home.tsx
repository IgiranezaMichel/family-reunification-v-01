import { Delete, LocationOn, Person, SortOutlined, Update, VisibilityOff } from "@material-ui/icons"
import { Button, Card, Pagination, Tooltip } from "@mui/material"

export const AdminHome=()=>{
    return (
        <main className="container">
        <div className="fs-4 text-center fw-bold">
        Recent post cases
        <div className="d-flex">
        <Pagination></Pagination>
        <div className="">
        <SortOutlined/><select className="">
                <option selected>Select one</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
            </select>
        </div>

        </div>
        </div>
        <Card elevation={3} className="row p-0 rounded-0 mb-3">
            <div className="col-sm-2">
            <img src="/public/Visitor/Login.png" className="card-img p-0 rounded-0"/>
            </div>
            <section className="col-sm-4">
                <div><Person/> Michael</div>
                <div><LocationOn/> Michael</div>
            </section>
            <section className="col-sm-5">
                <div>
                <Tooltip title='date of birth' placement="top">
                <b>Dob</b>
                </Tooltip>
                    </div>
                <div><b>Lost date</b></div>
            </section>
            <div className="col-sm-1 border-2 border-start">
                <Button><Update/></Button>
                <Button><Delete/> </Button>
                <Button><VisibilityOff/> </Button>
            </div>
        </Card>
        </main>
    )
}