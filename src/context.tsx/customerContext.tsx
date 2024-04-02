/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ResponseData } from "./OrganizationContext";

export const CustomerContext=createContext<ResponseData|undefined>(undefined);
export const useCustomerContext=()=>{
    const customer=useContext(CustomerContext);
    if(customer==null){
        throw new Error('');
    }
    return customer;
}