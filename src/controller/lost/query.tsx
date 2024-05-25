import { useQuery } from "@apollo/client"
import { ALL_LOST, CUSTOMER_POSTS, FIND_LOST_BY_ID } from "../../graphql/query/lost"
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
export const useCustomerLostPost=(customerId:number)=>{
    const [response,setResponse]=useState<Response>({code:0,responseContent:{},responseReady:false});
    const {refetch,data}=useQuery(CUSTOMER_POSTS,{variables:{customerId:customerId}});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(data){
                    return data.customerLostPosts}
            }
            fetch().then(data=>{
                setResponse({code:200,responseContent:data,responseReady:true});
            })
            .catch(err=>err)
        },[data]
    )
    return {response,refetch}

}

export const useFindLostPerson=(customerId:string)=>{
    const [response,setResponse]=useState<Response>({code:0,responseContent:{},responseReady:false});
    const {refetch,data}=useQuery(FIND_LOST_BY_ID,{variables:{customerId:customerId}});
    useEffect(
        ()=>{
            const fetch=async()=>{
                if(data){
                    return data.findLostById}
            }
            fetch().then(data=>{
                setResponse({code:200,responseContent:data,responseReady:true});
            })
            .catch(err=>err)
        },[data]
    )
    return {response,refetch}

}