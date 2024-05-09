/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delete } from "@material-ui/icons"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { useCustomerContext } from "../../../../../context.tsx/customerContext"
import { useDeleteCustomer } from "../../../../../controller/customer/mutation"

export const DeleteUser=(props:{arrIndex:number})=>{
    const {data,updateData}=useCustomerContext();
    const [customer,setCustomer]=useState<any>({});
    const {deleteHandler}=useDeleteCustomer(customer.id)
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
    const deleteCustomer=()=>{
        deleteHandler()
        .then(data=>{
            console.log(data);updateData()
        }).catch()
    }
    return <>
    <BootstrapModal id="delete" size="modal-sm" >
        {customer&&<div>Are you sure you want to remove <b>{customer.firstName} {customer.lastName}</b>?</div>}
        <div className="modal-footer">
            <Button onClick={()=>deleteCustomer()}><Delete /></Button>
        </div>
    </BootstrapModal>
    </>
}