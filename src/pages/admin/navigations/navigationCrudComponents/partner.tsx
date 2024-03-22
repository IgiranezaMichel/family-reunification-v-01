import { Add, Close, Input, PersonAdd } from "@material-ui/icons"
import { Avatar, Box, Button, Modal, TextField, TextareaAutosize, Typography } from "@mui/material"
import { CardModal } from "../../components/Modal";
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";

export const PartnerCrud = (props: { search: string, page: PaginationInput }) => {
    const [openAdd, setOpenAdd] = useState(false);
    const [openDel, setOpenDel] = useState(false);
    const updateHandler = () => {

    }
    const deleteHandler = () => {

    }
    const updateView = <>
        <CardModal bg="white" openModal={openAdd} width="540px" key={1}>
            <Typography className="border-bottom border-2 fw-bold"><PersonAdd /> New Partner <Close className="float-end" onClick={() => setOpenAdd(false)} /></Typography>
            <div className="p-2">
                <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto' }}>N</Avatar>
            </div>
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" label='Name' variant="standard" />
            <div className="mb-3 mt-3">
                <label className="form-label">Choose Organization logo</label>
                <input type="file" className="form-control" aria-describedby="fileHelpId" />
            </div>
            <TextareaAutosize minRows={3} placeholder="Organization description ..." className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" label='Name' variant="standard" />
        </CardModal>
    </>

    const deleteView = <>
    </>
    const displayView = <>
        <div className="mt-3">
            <Button variant="contained" onClick={() => setOpenAdd(true)}>
                <Add /> new
            </Button>
        </div>
        {updateView}
        {deleteView}
    </>

    return (
        <>
            {displayView}
        </>
    )
}