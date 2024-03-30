/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, Close, Delete, List, PersonAdd, Update } from "@material-ui/icons";
import { Avatar, Button, TextField, TextareaAutosize, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { CardModal } from "../../../../../components/Modal";
import { ModalSwitch } from "../../../../../typedefs/default/ModalSwitch";
import { useOrganizationContext } from "../../../../../context.tsx/OrganizationContext";
import { OrganizationInput } from "../../../../../typedefs/organization";
import { useRegisterOrganization } from "../../../../../controller/organization/mutation";

export const PartnerCrud = (props: { search: string}) => {
    const [modal, setModal] = useState<ModalSwitch>({openAdd:false,openDelete:false,openUpdate:false});
    const [organization,setOrganization]=useState<OrganizationInput>({address:'',description:'',logo:'',name:''});
    const {data,updateData}= useOrganizationContext();
    const {response,saveOrganizationHandler}=useRegisterOrganization(organization);
    const updateHandler=()=>{
        updateData();
    }
    const saveOrUpdateOrganization=()=>{
        saveOrganizationHandler();
    if(response.responseReady){
        console.log(response.responseContent);
        updateData();
    }
    }
    console.log(data)
    const updateView = <>
        <CardModal bg="white" openModal={modal.openAdd} width="540px" key={1}>
            <Typography className="border-bottom border-2 fw-bold">
                <div className="py-4">
                <PersonAdd /> New Partner <Close className="float-end" onClick={() => setModal({...modal,openAdd:false})} />
                </div>
            </Typography>
            <div className="p-2">
                <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto' }}>N</Avatar>
            </div>
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" onChange={(e)=>setOrganization({...organization,name:e.target.value})} label='Name' variant="standard" />
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" onChange={(e)=>setOrganization({...organization,address:e.target.value})}  label='Location' variant="standard" />
            <div className="mb-3 mt-3">
                <label className="form-label">Choose Organization logo</label>
                <input type="file" className="form-control" aria-describedby="fileHelpId" />
            </div>
            <TextareaAutosize minRows={3} onChange={(e)=>setOrganization({...organization,description:e.target.value})}  placeholder="Organization description ..." className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" />
            <div className="modal-footer">
                <Button className="" variant='contained' onClick={()=>saveOrUpdateOrganization()}>Submit</Button>
            </div>
        </CardModal>
    </>

    const deleteView =<>
     <CardModal bg="transparent" openModal={modal.openDelete} width="30%">
        <Typography className="fw-bold mb-3">
            Remove organization <Close onClick={()=>setModal({...modal,openDelete:false})} className="float-end"/>
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
    const displayView = <main>
         <><div className="mt-3">
            <Button variant="contained" onClick={() => setModal({ ...modal, openAdd: true })}><Add /> new </Button>
        </div>
        <div className="row m-auto g-2 col-12 mb-4" >
        {data.responseContent!=undefined&&data.responseContent.content.map((data:any,index:number)=>{
            return <section className="col-sm-3" key={index}>
                <div className="card text-white">
                    <img className="card-img" src="/Visitor/baby-sitting.png" alt="Title" />
                    <div className="card-img-overlay">
                        <h5 className="card-title text-dark">{data.name}</h5>
                    </div>
                    <div className="modal-footer text-dark border-top py-1">
                        <Button>
                            <List className="bg-info p-1 text-dark rounded-circle" onClick={()=>updateHandler()} />
                        </Button>
                        <Button onClick={() => { setModal({ ...modal, openDelete: true }); } } variant="text">
                            <Delete className="bg-info p-1 text-dark rounded-circle" />
                        </Button>
                        <Button>
                            <Update onClick={() => { setModal({ ...modal, openUpdate: true }); } } className="bg-info p-1 text-dark rounded-circle m-1" />
                        </Button>
                    </div>
                </div>
            </section>
        })
    }
    </div>
            
        {updateView}
        {deleteView}
        </>
    </main>

    return (
        <>
            {displayView}
        </>
    )
}