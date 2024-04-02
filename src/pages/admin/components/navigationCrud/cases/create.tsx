import { Button, TextField, TextareaAutosize } from "@mui/material"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { Save } from "@material-ui/icons"

export const CreateCase=(props:{action:string})=>{
    return <>
    <BootstrapModal size="modal-md"  id="addCase"
    modalTitle={
        <div>{props.action}</div>
    }>
        <div>
            <TextField className="col-12" variant="standard" label='Case Name'/>
            <TextareaAutosize className="col-12 mt-3" minRows={6} placeholder='Case Description'/>
            <div className="modal-footer">
                <Button variant="outlined"><Save/></Button>
            </div>
        </div>
    </BootstrapModal>
    </>
}