import { CheckCircle, Warning } from "@material-ui/icons";
import { Button, Dialog, Slide, Zoom } from "@mui/material";
import { FC } from "react";

export interface IToast{
    responseCode:number;
    message:string,
    open:boolean
}
export const Toast:FC<IToast>=(props)=>{
return(
    <Dialog TransitionComponent={Slide} open={props.open}>
        {props.responseCode!=200?<>
        <Warning/></>:
        <><CheckCircle className='text-success'/>{props.message}</>}
        <Button className="">Close</Button>
    </Dialog>
)
}