import { useMutation } from "@apollo/client"
import { REGISTER_ORGANIZATION, REMOVE_ORGANIZATION } from "../../../graphql/mutation/organization"
import { OrganizationInput } from "../../../typedefs/organization"
import { Response } from "../../../typedefs/response";
import { useState } from "react";

export const useRegisterOrganization=(organizationInput:OrganizationInput)=>{
    const [saveOrganization]=useMutation(REGISTER_ORGANIZATION);
    const [response,setResponse]=useState<Response>({code:0,message:'',isLoading:true});
    const saveOrganizationHandler=()=>{
       saveOrganization({variables:{organizationInput:organizationInput}})
       .then(data=>{
        const result=data.data.saveOrganization.split[''];
        setResponse({code:Number(result[0]),message:result[1],isLoading:false});
       })
       .catch(err=>console.log(err))
    }
    return {response,saveOrganizationHandler}
}
export const useDeleteOrganization=(id:number)=>{
    const [deleteOrganization]=useMutation(REMOVE_ORGANIZATION);
    const [response,setResponse]=useState<Response>({code:0,message:'',isLoading:true});
    const removeOrganizationHandler=()=>{
       deleteOrganization({variables:{id:id}})
       .then(data=>{
        const result=data.data.saveOrganization.split[''];
        setResponse({code:Number(result[0]),message:result[1],isLoading:false});
       })
       .catch(err=>console.log(err))
    }
    return {response,removeOrganizationHandler}
}