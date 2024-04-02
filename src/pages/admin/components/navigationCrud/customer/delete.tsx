/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delete } from "@material-ui/icons"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { useCustomerContext } from "../../../../../context.tsx/customerContext"

export const DeleteUser=(props:{arrIndex:number})=>{
    const {data}=useCustomerContext();
    const [customer,setCustomer]=useState<any>({});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(data!=undefined){
                    const result=data[props.arrIndex];
                    setCustomer(result);
                }
            }
            fetch();
        }
    )
    return <>
    <BootstrapModal id="delete" size="modal-sm" >
        {customer&&<div>Are you sure you want to remove <b>{customer.firstName} {customer.lastName}</b>?</div>}
        <div className="modal-footer">
            <Button><Delete /></Button>
        </div>
    </BootstrapModal>
    </>
}