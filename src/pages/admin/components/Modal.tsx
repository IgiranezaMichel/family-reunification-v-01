import { Box,Modal } from "@mui/material";
import { FC, ReactNode } from "react";
type ModalItem={
    width:'540px'|'720px'|'960px'|'1140px',
    bg:string,
    openModal:boolean,
    children:ReactNode
}
export const CardModal:FC<ModalItem>=(props)=>{
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: props.width,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return(
        <div className="bg-info">
      <Modal
        keepMounted
        open={props.openModal}
        style={{backgroundColor:'transparent'}}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            {props.children}
        </Box>
      </Modal>
    </div>
    )
}