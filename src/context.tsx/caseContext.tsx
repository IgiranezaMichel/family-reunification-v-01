/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ResponseData } from "./OrganizationContext";

export const CaseContext=createContext<ResponseData|undefined>(undefined);
export const useCaseContext=()=>{
    const cases=useContext(CaseContext);
    if(cases==undefined)throw new Error('Case cant be undefined');
    return cases;
}