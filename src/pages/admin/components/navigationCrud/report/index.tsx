import { Ballot, Delete, Remove } from "@material-ui/icons"
import { Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

export const DisplayReport=()=>{
    return(
        <Card className="p-0 rounded-0">
          <div ></div>
          <Table> 
            <TableHead className="border-1 bg-info">
              <TableRow >
                <TableCell>#</TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Lost Date</b></TableCell>
                <TableCell><b>Found Date</b></TableCell>
                <TableCell className="text-center"><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow className="border-1">
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell className="text-center">
                  <Ballot/> <Delete/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
    )
}