import { useState } from "react";
import { BootstrapModal } from "../../../../../components/bootstrapModal";
import { ClaimUserHasNoAccount } from "./addPost/userHasNoAccount";
import UserHasAccount from "./addPost/userHasAccount";

export default function NewPost() {
    const [hasAccount,setHasAccount]=useState('');
   
    return (
        <BootstrapModal size="modal-lg" modalTitle={<>Add new Post</>} id="newPost">
            <div>
                <div style={{ cursor: 'pointer' }}>does a person you want to claim as a lost has an account?
                    <small className="bg-success p-1 rounded fw-bold mx-1" onClick={()=>setHasAccount('yes')}>Yes</small> 
                    <small className="bg-dark p-1 rounded text-white fw-bold mx-1" onClick={()=>setHasAccount('no')}>No</small></div>
            </div>
            {hasAccount=='yes'?<><UserHasAccount/></>:hasAccount=='no'?<><ClaimUserHasNoAccount/></>:<></>}
        </BootstrapModal>
    )
}
