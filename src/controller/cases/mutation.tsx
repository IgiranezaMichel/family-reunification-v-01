import { useMutation } from "@apollo/client"
import { CaseInput } from "../../typedefs/cases"
import { DELETE_CASE, REGISTER_CASE } from "../../graphql/mutation/cases"
import { useState } from "react";
import { Response } from "../../typedefs/response";

export const useSaveCases=(caseInput:CaseInput,customerId:number)=>{
    const [save]=useMutation(REGISTER_CASE);
    const [response,setResponse]=useState<Response>({
        code:0,responseContent:'',responseReady:false
    })
    const saveHandler=async()=>{
        await save({variables:{caseInput:caseInput,customerId:customerId}})
        .then((data)=>{
            
        const resultString=data.data.saveCases as string;
        const resultCode=resultString.includes('405') as boolean;
        const content=resultString.substring(resultString.indexOf(',')+1,resultString.lastIndexOf(','));
        setResponse({code:Number(resultCode?405:200),responseContent:content,responseReady:true});
        })
    }
    return {saveHandler,response}
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