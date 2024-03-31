import { useMutation } from "@apollo/client"
import { REGISTER_ORGANIZATION, REMOVE_ORGANIZATION } from "../../graphql/mutation/organization"
import { OrganizationInput } from "../../typedefs/organization"
import { Response } from "../../typedefs/response";
import { useState } from "react";

export const useRegisterOrganization=(organizationInput:OrganizationInput)=>{
    const [saveOrganization]=useMutation(REGISTER_ORGANIZATION);
    const [response,setResponse]=useState<Response>({code:0,responseContent:'',responseReady:false});
    const saveOrganizationHandler=()=>{
       saveOrganization({variables:{organizationInput:organizationInput}})
       .then(data=>{
        const result=String(data.data.saveOrganization).split(',');
        console.log(result[0].split(' ')[0].split('<')[1])
        setResponse({code:Number(result[0].split(' ')[0].split('<')[1]),responseContent:result[1],responseReady:true})

       })
       .catch(err=>console.log(err))
    }
    return {response,saveOrganizationHandler}
}
export const useDeleteOrganization=(id:number)=>{
    const [deleteOrganization]=useMutation(REMOVE_ORGANIZATION);
    const [response,setResponse]=useState<Response>({code:0,responseContent:'',responseReady:false});
    const removeOrganizationHandler=()=>{
       deleteOrganization({variables:{id:id}})
       .then(data=>{
        const result=data.data.saveOrganization.split[''];
        setResponse({code:Number(result[0]),responseContent:result[1],responseReady:true});
       })
       .catch(err=>console.log(err))
    }
    return {response,removeOrganizationHandler}
}