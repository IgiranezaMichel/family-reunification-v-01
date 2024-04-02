import { Button, TextField, TextareaAutosize } from "@mui/material"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { Save } from "@material-ui/icons"
import { useSaveCases } from "../../../../../controller/cases/mutation"
import { useEffect, useState } from "react"
import { CaseInput } from "../../../../../typedefs/cases"
import { Toast } from "../../../../../components/toast"
import { snack } from "../../../../../typedefs/snack"

export const CreateCase=(props:{action:string})=>{
    const [cases,setCases]=useState<CaseInput>({description:'',title:'',id:0});
    const customerId=1;
    const [snack,setSnack]=useState<snack>({message:'',open:false});
    const [open,setOpen]=useState(false);
    const saveCase=useSaveCases(cases,customerId);
    useEffect(
        ()=>{
            const fetch=async()=>{
                return saveCase;    
            }
            fetch();
        },[saveCase,snack]
    )
    const saveCaseHandler=()=>{
        saveCase.saveHandler()
        .then(()=>alert(saveCase.response.responseContent));
    }
    return <>
    <BootstrapModal size="modal-md"  id="addCase"
    modalTitle={
        <div>{props.action}</div>
    }>
        <div>
            <TextField value={cases.title} onChange={(e)=>setCases({...cases,title:e.target.value})} className="col-12" variant="standard" label='Case Name'/>
            <TextareaAutosize value={cases.description} onChange={(e)=>setCases({...cases,description:e.target.value})} className="col-12 mt-3" minRows={6} placeholder='Case Description'/>
            <div className="modal-footer">
                <Button variant="outlined" onClick={()=>saveCaseHandler()}><Save/></Button>
            </div>
        </div>
    </BootstrapModal>
    <Toast horizontal="left" open={open} vertical="bottom" message={snack.message}/>
    </>
}