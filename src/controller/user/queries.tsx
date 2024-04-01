import { useEffect, useState } from "react";
import { PaginationInput } from "../../typedefs/default/paginationInput";
import { Response } from "../../typedefs/response";
import { useQuery } from "@apollo/client";
import { USER_PAGE } from "../../graphql/query/user";

export const useUserPage=(paginationInput:PaginationInput)=>{
const [response,setResponse]=useState<Response>({code:0,responseContent:{},responseReady:false});
const {refetch,data}=useQuery(USER_PAGE,{variables:{userPage:paginationInput}});
useEffect(
    ()=>{
        const fetch=async()=>{
            if(data)return data.userPage
        }
        fetch().then(data=>{
            setResponse({code:200,responseContent:data,responseReady:true})
        })
        .catch(err=>err)
    },[data,paginationInput]
)
return {response,refetch}
}