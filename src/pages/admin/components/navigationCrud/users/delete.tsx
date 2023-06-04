/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { Delete } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useUserContext } from "../../../../../context.tsx/UserContext"

export const DeleteUser=(props:{arrIndex:number})=>{
    const {data}=useUserContext();
    const [user,setUser]=useState<any>({});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(data!=undefined){
                    const result=data[props.arrIndex];
                    setUser(result);
                }
            }
            fetch();
        }
    )
    return <>
    <BootstrapModal id="delete" size="modal-sm" >
        {user&&<div>Are you sure you want to remove <b>{user.firstName} {user.lastName}</b>?</div>}
        <div className="modal-footer">
            <Button><Delete /></Button>
        </div>
    </BootstrapModal>
    </>
}