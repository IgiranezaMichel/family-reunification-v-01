import { useQuery } from "@apollo/client";
import { PaginationInput } from "../../typedefs/default/paginationInput";
import { ORGANIZATION_PAGE } from "../../graphql/query/organization";
import { useEffect, useState } from "react";
import { Response } from "../../typedefs/response";

export const useOrganization=(organizationInput:PaginationInput)=>{
const [response,setResponse]=useState<Response>({code:200,responseContent:[],responseReady:false});
const {refetch,data}=useQuery(ORGANIZATION_PAGE,{variables:{organizationInput:organizationInput}});
useEffect(
    ()=>{
        const fetch=async()=>{
            if(data.organizationPage) return data.organizationPage;
        }
        fetch().then(data=>setResponse({code:200,responseContent:data,responseReady:true}))
        .catch(err=>console.log(err));
    }
)
return {refetch,response}
}