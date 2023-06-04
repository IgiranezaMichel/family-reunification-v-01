/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ResponseData } from "./OrganizationContext";

export const UserContext=createContext<ResponseData|undefined>(undefined);
export const useUserContext=()=>{
    const user=useContext(UserContext);
    if(user==null){
        throw new Error('');
    }
    return user;
}