import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
  open: boolean;
}
type ToastItem={
    vertical: "top" | "bottom",
    horizontal: "left" | "center" | "right",
    message:string,
    open:boolean
}
export const Toast:React.FC<ToastItem>=(props)=>{
  const [state, setState] = React.useState<State>({
    open: props.open,
    vertical:props.vertical,
    horizontal:props.horizontal,
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={props.message}
        key={vertical + horizontal}
        className='bg-info'
      />
    </Box>
  );
}