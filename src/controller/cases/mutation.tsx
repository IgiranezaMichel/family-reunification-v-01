import { useMutation } from "@apollo/client"
import { CaseInput } from "../../typedefs/cases"
import { DELETE_CASE, REGISTER_CASE } from "../../graphql/mutation/cases"
import { useState } from "react";
import { Response } from "../../typedefs/response";

export const useSaveCases=(caseInput:CaseInput,customerId:number)=>{
    const [save]=useMutation(REGISTER_CASE);
    const saveHandler=async()=>{
      return  await save({variables:{caseInput:caseInput,customerId:customerId}})
    }
    return {saveHandler}
}
export const useDeleteCases=(caseId:number)=>{
    const [deleteCase]=useMutation(DELETE_CASE);
    const [response,setResponse]=useState<Response>({
        code:0,responseContent:'',responseReady:false
    })
    const deleteHandler=async()=>{
        deleteCase({variables:{caseId:caseId}})
        .then((data)=>{
        const result=data.data.deleteCases.split[''];
        setResponse({code:Number(result[0]),responseContent:result[1],responseReady:true});
        })
    }
    return {deleteHandler,response}
}