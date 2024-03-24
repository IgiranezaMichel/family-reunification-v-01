import { Delete, Email, LocationOn, Person, PersonAdd, Phone, PostAddOutlined, Update, Wc } from "@material-ui/icons"
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

export const UsersCrud = () => {
    return (
        <>
            <Button className="mt-3" variant="contained"><PersonAdd /></Button>
            <Table className="border mt-3 mb-5">
                <TableHead>
                    <TableRow className="bg-body-secondary ">
                        <TableCell className="fw-bold">Name</TableCell>
                        <TableCell className="fw-bold">Contact detail</TableCell>
                        <TableCell className="fw-bold">Others</TableCell>
                        <TableCell className="fw-bold text-center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
                            <Button
                                className="btn btn-primary position-relative" variant="contained">
                                <PostAddOutlined />
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                    99+
                                </span>
                            </Button>
                            <Button className="mx-4" variant="contained">
                                <Delete />
                            </Button>
                            <Button className="mx-4" variant="contained">
                                <Update />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}