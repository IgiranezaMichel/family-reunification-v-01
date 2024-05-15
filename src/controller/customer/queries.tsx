import { useEffect, useState } from "react";
import { PaginationInput } from "../../typedefs/default/paginationInput";
import { Response } from "../../typedefs/response";
import { useQuery } from "@apollo/client";
import { CUSTOMER_PAGE} from "../../graphql/query/customer";

export const useCustomerPage=(paginationInput:PaginationInput)=>{
const [response,setResponse]=useState<Response>({code:0,responseContent:{},responseReady:false});
const {refetch,data}=useQuery(CUSTOMER_PAGE,{variables:{customerPage:paginationInput}});
useEffect(
    ()=>{
        const fetch=async()=>{
            if(data){
                console.log('Running ....')
                console.log(data)
                return data.customerPage}
        }
        fetch().then(data=>{
            setResponse({code:200,responseContent:data,responseReady:true});
        })
        .catch(err=>err)
    },[data,paginationInput]
)
return {response,refetch}
}