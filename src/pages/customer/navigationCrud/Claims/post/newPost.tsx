import { FormControl, NativeSelect, TextField } from "@mui/material";
import { BootstrapModal } from "../../../../../components/bootstrapModal";
import JoditEditor from "jodit-react";
import { useState } from "react";
import { LostPersonHavingAccount } from "../../../../../typedefs/lostPerson";
import { ClaimUserHasNoAccount } from "./userHasNoAccount";

export default function NewPost() {
    const [lostPerson, setLostPerson] = useState<LostPersonHavingAccount>({ case: '', description: '', email: '' });
    const [hasAccount,setHasAccount]=useState('');
    const userHasAccount = <>
        <TextField className="col-12 mb-3" value={lostPerson.email} onChange={(e) => setLostPerson({ ...lostPerson, email: e.target.value })} variant="standard" label='Enter lost Person Email Address' />
        <FormControl fullWidth className="mb-3">
            <NativeSelect value={lostPerson.case} onChange={(e) => setLostPerson({ ...lostPerson, case: e.target.value })}>
                <option value="">Select case</option>
            </NativeSelect>
        </FormControl>
        <JoditEditor value={lostPerson.description} onChange={(e) => setLostPerson({ ...lostPerson, description: e })}>
        </JoditEditor>
    </>

    return (
        <BootstrapModal size="modal-lg" modalTitle={<>Add new Post</>} id="newPost">
            <div>
                <div style={{ cursor: 'pointer' }}>does a person you want to claim as a lost has an account?
                    <small className="bg-success p-1 rounded fw-bold mx-1" onClick={()=>setHasAccount('yes')}>Yes</small> 
                    <small className="bg-dark p-1 rounded text-white fw-bold mx-1" onClick={()=>setHasAccount('no')}>No</small></div>
            </div>
            {hasAccount=='yes'?<>{userHasAccount}</>:hasAccount=='no'?<><ClaimUserHasNoAccount/></>:<></>}
        </BootstrapModal>
    )
}
