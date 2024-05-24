import { useQuery } from "@apollo/client"
import { ALL_LOST } from "../../graphql/query/lost"
import { useEffect, useState } from "react";
import { Response } from "../../typedefs/response";

export const useLost=()=>{
    const [response,setResponse]=useState<Response>({code:0,responseContent:{},responseReady:false});
    const {refetch,data}=useQuery(ALL_LOST);
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(data){
                    return data.lostList}
            }
            fetch().then(data=>{
                setResponse({code:200,responseContent:data,responseReady:true});
            })
            .catch(err=>err)
        },[data]
    )
    return {response,refetch}

}