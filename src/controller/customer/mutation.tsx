import { useMutation } from "@apollo/client";
import { useState } from "react";
import {DELETE_CUSTOMER, REGISTER_CUSTOMER } from "../../graphql/mutation/customer";
import { Response } from "../../typedefs/response";
import { CustomerInput } from "../../typedefs/visitorInput/customer";

export const useSaveCustomer=(customerInput:CustomerInput)=>{
const [saveCustomer]=useMutation(REGISTER_CUSTOMER);
const saveHandler=async()=>{
   return await saveCustomer({variables:{customerInput:customerInput}});
}
return {saveHandler}
}
export const useDeleteCustomer=(id:number)=>{
    const [deleteCustomer]=useMutation(DELETE_CUSTOMER);
    const [response,setResponse]=useState<Response>({
        code:0,responseContent:'',responseReady:false
    })
    const deleteHandler=()=>{
        deleteCustomer({variables:{id:id}}).then(data=>{
            const result=data.data.saveCustomer.split[''];
            setResponse({code:Number(result[0]),responseContent:result[1],responseReady:true});
        }).catch(err=>console.log(err))
    }
    return {deleteHandler,response}
    }