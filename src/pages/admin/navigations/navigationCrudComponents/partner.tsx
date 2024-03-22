import { Add, Close, Delete, List, PersonAdd, Update } from "@material-ui/icons"
import { Avatar, Button,Card,TextField, TextareaAutosize, Typography } from "@mui/material"
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
            <Typography className="border-bottom border-2 fw-bold">
                <div className="py-4">
                <PersonAdd /> New Partner <Close className="float-end" onClick={() => setOpenAdd(false)} />
                </div>
            </Typography>
            <div className="p-2">
                <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto' }}>N</Avatar>
            </div>
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" label='Name' variant="standard" />
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" label='Location' variant="standard" />
            <div className="mb-3 mt-3">
                <label className="form-label">Choose Organization logo</label>
                <input type="file" className="form-control" aria-describedby="fileHelpId" />
            </div>
            <TextareaAutosize minRows={3} placeholder="Organization description ..." className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" />
            <div className="modal-footer">
                <Button className="" variant='contained'>Submit</Button>
            </div>
        </CardModal>
    </>

    const deleteView =<>
     <CardModal bg="transparent" openModal={openDel} width="30%">
        <Typography className="fw-bold mb-3">
            Remove organization <Close onClick={()=>setOpenDel(false)} className="float-end"/>
        </Typography>
        <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto' }}>N</Avatar>
        <div className="mt-2">
            Are you sure you want to remove Organization?
        </div>
        <div className="modal-footer border-top border-2 mt-2 pt-2 border-dark">
            <Button className="bg-danger" variant="contained" >
                <Delete/> Remove
            </Button>
        </div>
    </CardModal>
    </>
    const displayView = <main className="container-lg">
        <div className="mt-3">
            <Button variant="contained" onClick={() => setOpenAdd(true)}><Add /> new </Button>
        </div>
        <div className="row m-auto g-2 col-12 mb-4">
        <section className="col-sm-3">
            <div className="card text-white">
                <img className="card-img" src="/Visitor/baby-sitting.png" alt="Title" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-dark">Title</h5>
                </div>
                <div className="modal-footer text-dark border-top py-1">
                    <Button onClick={()=>{setOpenDel(true)}}>
                    <List className="bg-info p-1 text-dark rounded-circle"/>
                    </Button>
                    <Button onClick={()=>{setOpenDel(true)}} variant="text">
                    <Delete  className="bg-info p-1 text-dark rounded-circle"/> 
                    </Button>
                    <Button><Update className="bg-info p-1 text-dark rounded-circle m-1"/></Button>
                </div>
            </div>
        </section>
        </div>
        {updateView}
        {deleteView}
    </main>

    return (
        <>
            {displayView}
        </>
    )
}