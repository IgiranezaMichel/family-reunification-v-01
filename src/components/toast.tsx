import { CheckCircle, Warning } from "@material-ui/icons";
import {Dialog, Slide } from "@mui/material";
import { FC, ReactNode } from "react";

export interface IToast{
    responseCode:number;
    message:string,
    open:boolean,
}
 interface ToastItem{
item:IToast,
children:ReactNode
}
export const Toast:FC<ToastItem>=(props)=>{
return(
    <Dialog maxWidth='xs' PaperProps={{className:'col-12 p-4'}} TransitionComponent={Slide} open={props.item.open}>
        {props.item.responseCode!=200?<>
        <Warning/></>:
        <div className="py-2"><CheckCircle className='text-success fs-1'/>{props.item.message}</div>}
        <div className="text-center">
        {props.children}
        </div>
    </Dialog>
)
}