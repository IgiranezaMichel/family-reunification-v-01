import { Delete, Description, List, LocationOn, Person, PersonAdd, SortOutlined, Update, VisibilityOff } from "@material-ui/icons"
import { Button, Card, Pagination, Tooltip } from "@mui/material"

export const AdminHome=()=>{
    return (
        <main className="container">
        
        <div >
       <div className="fs-4 text-center fw-bold mb-4">
       Recent post cases
       </div>
       <div>
        <input type="search" className="float-end border-0 border-bottom border-dark border-2 col-sm-4"  placeholder='search ...' style={{clear:'both'}}/>
       </div>
        <div className="d-flex">

       Page 1 out of 6 <Pagination></Pagination>

        <span className="mx-2"><SortOutlined/><select className="">
                <option selected>Sort by</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
            </select></span>
        </div>
        <Button  variant="contained"><PersonAdd/>New</Button>
        </div>
        <div style={{clear:'both'}} className="mt-5">
        <Card elevation={3} className="row p-0 rounded-0 mb-3">
            <div className="col-sm-2 d-flex justify-content-center align-items-center">
            <img src="/public/Visitor/Login.png" className="card-img p-0 rounded-0"/>
            </div>
           <section className="col-sm-8 row m-auto">
           <section className="col-sm-6">
                <div><Person/> Michael</div>
                <div><LocationOn/> Michael</div>
            </section>
            <section className="col-sm-6">
                <div>
                <Tooltip title='date of birth' placement="top">
                <b>Dob</b>
                </Tooltip>
                    </div>
                <div><b>Lost date</b></div>
            </section>
            <section className="col-sm-12 border-top border-2 m-auto">
                <Description/>
            </section>
           </section>
            <div className="col-sm-1 border-2 border-start">
                <Button><Update/></Button>
                <Button><Delete/> </Button>
                <Button><VisibilityOff/> </Button>
                <Button><List/> </Button>
            </div>
        </Card>
        </div>
        </main>
    )
}