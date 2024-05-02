import { useMutation } from "@apollo/client";
import {DELETE_CUSTOMER, REGISTER_CUSTOMER } from "../../graphql/mutation/customer";
import { CustomerInput } from "../../typedefs/visitorInput/customer";
import { useEffect } from "react";

export const useSaveCustomer=(customerInput:CustomerInput)=>{
const [saveCustomer]=useMutation(REGISTER_CUSTOMER);
useEffect(
   ()=>{},[customerInput]
)
const saveHandler=async()=>{
   return await saveCustomer({variables:{customerInput:customerInput}});
}
return {saveHandler}
}
export const useDeleteCustomer=(id:number)=>{
    const [deleteCustomer]=useMutation(DELETE_CUSTOMER);
    useEffect(
      ()=>{

      },[id]
    )
    const deleteHandler=async()=>{
       return await deleteCustomer({variables:{id:id}});
    }
    return {deleteHandler}
    }