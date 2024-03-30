/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
export type ResponseData={
    data:any,
    updateData:()=>void
}
export const OrganizationContext=createContext<ResponseData|undefined>(undefined);

export const useOrganizationContext=()=>{
    const organization=useContext(OrganizationContext);
    if(organization==undefined)throw Error('No data found')
    return organization
}