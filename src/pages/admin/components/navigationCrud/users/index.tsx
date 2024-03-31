import { Delete, Email, LocationOn, Person, PersonAdd, Phone, PostAddOutlined, Update, Wc } from "@material-ui/icons"
import { Avatar, Button, FormControl, InputLabel, NativeSelect, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { UserInput } from "../../../../../typedefs/visitorInput/user"
import { Gender } from "../../../../../enum/gender"
import { UserDetail } from "./detail"
import { BootstrapModal } from "../../../../../components/bootstrapModal"

export const UsersCrud = () => {
    const [user, setUser] = useState<UserInput>({
        firstName: '',
        lastName: '',
        gender: Gender.MALE,
        profilePicture: '',
        dob: '',
        email: '',
        phoneNumber: '',
        country: '',
        nativeCountry: '',
        userName: '',
        password: '',
    })
    // add new user
    const addNewUser = <BootstrapModal id="add-newUser" bg="" size="modal-lg">
        <Typography className="row container m-auto">
            <div className="mt-1 mb-5">
                <Avatar className="m-auto" />
                <h5 className="text-center">Add new user</h5>
            </div>

            <section className="col-sm-6">
                <TextField value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} variant="standard" className="form-control mb-3" label='Name' />
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select Gender</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select Gender', id: 'uncontrolled' }}
                        onChange={(e) => setUser({ ...user, gender: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                    </NativeSelect>
                </FormControl>
                <label htmlFor="">Date of birth</label>
                <TextField variant="standard" type="date"
                value={user.dob} onChange={(e)=>setUser({...user,dob:e.target.value})}
                 className="form-control mb-3" />
                <label htmlFor="">Profile picture</label>
                <TextField variant="standard" type="file" className="form-control mb-3" />
                <TextField variant="standard"
                value={user.phoneNumber} onChange={(e)=>setUser({...user,phoneNumber:e.target.value})}
                 className="form-control mb-3"
                  label='Phone Number' />
            </section>

            <section className="col-sm-6">
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select use current Country</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        onChange={(e) => setUser({ ...user, country: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
                <FormControl fullWidth className="mb-2">
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select use Native Country</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        onChange={(e) => setUser({ ...user, nativeCountry: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
                <TextField variant="standard"
                value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
                className="form-control mb-4" label='Email' />
                <TextField variant="standard"
                value={user.userName} onChange={(e)=>setUser({...user,userName:e.target.value})}
                 className="form-control mb-3" label='User name' />
                <TextField variant="standard" type="password"
                value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
                className="form-control mb-3" label='Password' />
            </section>
            <div className="modal-footer">
                <Button variant="outlined" className="fw-bold">save</Button>
            </div>
        </Typography>
    </BootstrapModal>
    // delete
const remove=<BootstrapModal id="delete" size="modal-sm" >
        <div>Are you sure you want to remove <b>abc</b>?</div>
        <div className="modal-footer">
            <Button><Delete/></Button>
        </div>
    </BootstrapModal>
// display
    const display = <TableBody>
        <TableRow>
            <TableCell className="col-2 rounded-0 card bg-info">
                <img src="Visitor/baby-sitting.png" alt="" className="card-img" />
                <div className="text-center">
                    <b className="m-auto"><Person />Name</b>
                </div>
            </TableCell>
            <TableCell>
                <p><Phone />+ 250 888</p>
                <p><Email />email@gmail.com</p>
            </TableCell>
            <TableCell>
                <p><Wc /> location</p>
                <p><LocationOn /> location</p>
                <p><LocationOn /> location</p>
            </TableCell>
            <TableCell className="text-center">
                
                    <PostAddOutlined data-bs-toggle="modal"
                data-bs-target="#user-details"
                    className="position-relative"/>
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        99+
                    </span>
       
                    <Delete data-bs-toggle="modal"
                data-bs-target="#delete"/>
                <Button className="mx-4" variant="contained">
                    <Update />
                </Button>
            </TableCell>
        </TableRow>
    </TableBody>

    return (
        <>
            <Button className="mt-3"  data-bs-toggle="modal"
                data-bs-target="#add-newUser" variant="contained"><PersonAdd /></Button>
            <Table className="border mt-3 mb-5 table-responsive">
                <TableHead>
                    <TableRow className="bg-body-secondary ">
                        <TableCell className="fw-bold">Name</TableCell>
                        <TableCell className="fw-bold">Contact detail</TableCell>
                        <TableCell className="fw-bold">Others</TableCell>
                        <TableCell className="fw-bold text-center">Action</TableCell>
                    </TableRow>
                </TableHead>
                {display}
            </Table>
            {addNewUser}
            {remove}
            {<UserDetail userId={1}/>}
        </>
    )
}