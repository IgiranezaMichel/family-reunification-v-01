/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarToday, Delete, Email, LocationOn, Person, PersonAdd, Phone, PostAddOutlined, Update, Wc } from "@material-ui/icons"
import { Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"
import { useState } from "react"
import { UserDetail } from "./detail"
import { useUserContext } from "../../../../../context.tsx/UserContext"
import { DeleteUser } from "./delete"
import { AddUser } from "./createOrUpdate"

export const UsersCrud = () => {
    const [arrIndex, setArrIndex] = useState(0)
    const [action,setAction]=useState('');
    const { data } = useUserContext();
    const display = <TableBody>
        {data != undefined && data.map(
            (result: any, index: number) => {
                return <TableRow key={index} className="border border-4 border-white">
                    <TableCell className="col-2 rounded-0 card bg-info">
                        <img src={'data:image/png;base64,' + result.profilePicture} alt="" className="card-img rounded-0" />
                        <div className="text-center">
                            <b className="m-auto"><Person />{result.firstName} {result.lastName}</b>
                        </div>
                    </TableCell>
                    <TableCell>
                        <p><Phone />{result.phoneNumber}</p>
                        <p><Email />{result.email}</p>
                    </TableCell>
                    <TableCell>
                        <p><Wc /> {result.gender}</p>
                        <p><LocationOn /> {result.address}</p>
                        <p><CalendarToday /> {result.dob} </p>
                    </TableCell>
                    <TableCell className="text-center">
                        <PostAddOutlined data-bs-toggle="modal" onClick={() => setArrIndex(index)}
                            data-bs-target="#user-details" 
                            className="bg-dark text-white fs-2 rounded p-1 mx-2" />
                        <Delete data-bs-toggle="modal" className="bg-danger text-white fs-2 rounded p-1 mx-2"
                            data-bs-target="#delete" />
                            <Update className="bg-primary text-white fs-2 rounded p-1 mx-2" 
                            data-bs-toggle="modal" onClick={()=>{setAction('Update User Information');setArrIndex(index)}}
                            data-bs-target="#add-newUser"/>
                    </TableCell>
                </TableRow>
            }
        )}
    </TableBody>

    return (
        <>
            <Button className="mt-3" data-bs-toggle="modal"
                data-bs-target="#add-newUser" onClick={()=>setAction('addUser')} variant="contained"><PersonAdd /></Button>
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
             <DeleteUser arrIndex={arrIndex}/>
            <UserDetail arrIndex={arrIndex} />
            <AddUser action={action} arrIndex={arrIndex}/>
        </>
    )
}