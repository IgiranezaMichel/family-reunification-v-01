/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { ModalSwitch } from "../typedefs/default/ModalSwitch";

export const ModalContext=createContext<ModalSwitch|undefined>(undefined)
export const useModalContext=()=>{
    const modal=useContext(ModalContext);
    if(modal==undefined)throw Error('No data found')
    return {modal}
}