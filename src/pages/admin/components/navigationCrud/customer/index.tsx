/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarTodaySharp, Delete, Email, LocationOn, PersonAdd, Phone, PostAddOutlined, Update, Wc } from "@material-ui/icons"
import { Avatar, Button, Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
import { useCustomerContext } from "../../../../../context.tsx/customerContext"
import { AddUser } from "./createOrUpdate"
import { DeleteUser } from "./delete"
import { CustomerDetail } from "./detail"

export const CustomerCrud = () => {
    const [arrIndex, setArrIndex] = useState(0)
    const [action, setAction] = useState('');
    const { data } = useCustomerContext();
    console.log(data)
    const display = <TableBody>
        {data != undefined && data.map(
            (result: any, index: number) => {
                return <TableRow key={index} className="border border-4 border-white">
                    <TableCell className="col-2 rounded-0">
                        <section className="d-flex">
                            <Avatar src={'data:image/png;base64,' + result.profilePicture} />
                            <div className="text-center card d-flex justify-content-center bg-transparent border-0">
                                <b className="m-auto">{result.firstName} {result.lastName}</b>
                            </div>
                        </section>
                        <p className="mt-1"><Wc /> {result.gender}</p>
                    </TableCell>
                    <TableCell>
                        <p><Phone className="rounded-circle p-1 mx-1 border border-dark" />{result.phoneNumber}</p>
                        <p><Email className="rounded-circle p-1 mx-1 border border-dark" />{result.email}</p>
                    </TableCell>
                    <TableCell>
                        <p><LocationOn className="rounded-circle p-1 mx-1 border border-dark" /> {result.address}</p>
                        <p><CalendarTodaySharp className="rounded-circle p-1 mx-1 border border-dark" /> {result.userDob} </p>
                    </TableCell>
                    <TableCell className="text-center">
                        <PostAddOutlined data-bs-toggle="modal" onClick={() => setArrIndex(index)}
                            data-bs-target="#user-details"
                            className="bg-dark text-white fs-2 rounded p-1 mx-2" />
                        <Delete data-bs-toggle="modal" className="bg-danger text-white fs-2 rounded p-1 mx-2"
                            data-bs-target="#delete" />
                        <Update className="bg-primary text-white fs-2 rounded p-1 mx-2"
                            data-bs-toggle="modal" onClick={() => { setAction('Update User Information'); setArrIndex(index) }}
                            data-bs-target="#add-newUser" />
                    </TableCell>
                </TableRow>
            }
        )}
        <TableRow>
            <TableCell colSpan={4}>{data != undefined && data.length == 0 && <div className="bg-body-secondary text-center p-5">
                -- No data found --
            </div>}</TableCell>
        </TableRow>
    </TableBody>

    return (
        <>
            <Button className="mt-3" data-bs-toggle="modal"
                data-bs-target="#add-newUser" onClick={() => setAction('addUser')} variant="contained"><PersonAdd /></Button>
            <Card elevation={4} className="p-0 mt-2">
                <Table className="border table-responsive">
                    <TableHead>
                        <TableRow className="bg-body-secondary ">
                            <TableCell className="fw-bold">Profile</TableCell>
                            <TableCell className="fw-bold">Contacts</TableCell>
                            <TableCell className="fw-bold">Others</TableCell>
                            <TableCell className="fw-bold text-center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {display}
                </Table>
                {data != undefined && data.length != 0 && <div className="modal-footer">
                    {data.pageNumber} page out of {data.pageSize}

                    size
                </div>}
            </Card>
            <DeleteUser arrIndex={arrIndex} />
            <CustomerDetail arrIndex={arrIndex} />
            <AddUser action={action} arrIndex={arrIndex} />
        </>
    )
}