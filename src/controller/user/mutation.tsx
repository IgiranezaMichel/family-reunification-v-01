import { useMutation } from "@apollo/client";
import { UserInput } from "../../typedefs/visitorInput/user";
import { REGISTER_USER } from "../../graphql/mutation/user";
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