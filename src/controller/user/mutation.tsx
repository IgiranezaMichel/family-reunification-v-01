import { useMutation } from "@apollo/client";
import { UserInput } from "../../typedefs/visitorInput/user";
import { DELETE_USER, REGISTER_USER } from "../../graphql/mutation/user";
import { useState } from "react";
import { Response } from "../../typedefs/response";

export const useSaveUser=(userInput:UserInput)=>{
const [saveUser]=useMutation(REGISTER_USER);
const [response,setResponse]=useState<Response>({
    code:0,responseContent:'',responseReady:false
})
const saveHandler=()=>{
    saveUser({variables:{userInput:userInput}}).then(data=>{
        const result=data.data.saveUser.split[''];
        setResponse({code:Number(result[0]),responseContent:result[1],responseReady:true});
    }).catch(err=>console.log(err))
}
return {saveHandler,response}
}
export const useDeleteUser=(id:number)=>{
    const [deleteUser]=useMutation(DELETE_USER);
    const [response,setResponse]=useState<Response>({
        code:0,responseContent:'',responseReady:false
    })
    const deleteHandler=()=>{
        deleteUser({variables:{id:id}}).then(data=>{
            const result=data.data.saveUser.split[''];
            setResponse({code:Number(result[0]),responseContent:result[1],responseReady:true});
        }).catch(err=>console.log(err))
    }
    return {deleteHandler,response}
    }