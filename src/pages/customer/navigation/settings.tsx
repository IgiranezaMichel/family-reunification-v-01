import { Email, ModeComment, Phone, VisibilityOff } from "@material-ui/icons"
import { Avatar, Box, Button, Card, IconButton, InputAdornment, TextField } from "@mui/material"
export const AdminSettings=()=>{
return(
   <section style={{height:'80dvh'}} className="d-flex justify-content-center mb-5">
     <Card elevation={5} className="border col-md-6 p-3 m-auto">
        <Card  className=" p-3 mb-3">
            <section className="d-flex">
            <Avatar/> <Box className="card d-flex justify-content-center border-0 bg-transparent mx-2" sx={{color:'text.primary'}}>
            User names
            </Box>
            </section>
            <section className="d-flex " style={{justifyContent: 'space-between'}}>
                <div className="mx-2 d-flex mt-2">
                    <div><small><Email/>example@gmail.com</small></div>
                    <div className="mx-2"><small><Phone/>+250788747380</small></div>
                </div>
                <div className="float-end"><ModeComment/></div>
            </section>
        </Card>
        <Card  className="p-2">
            <b><small>Change password</small></b>
            <TextField type="password" label='Old Password' fullWidth className="mb-3 mt-3"
             InputProps={{
                endAdornment: (
                    <InputAdornment position='start'>
                        <IconButton>
                            <VisibilityOff />
                        </IconButton>
                    </InputAdornment>
                ),
            }}/>
            <TextField  type="password" label='New Password' fullWidth className="mb-3"
             InputProps={{
                endAdornment: (
                    <InputAdornment position='start'>
                        <IconButton>
                        <VisibilityOff />
                        </IconButton>
                    </InputAdornment>
                ),
            }}/>
            <TextField type="password" label='Retype Password' fullWidth className="mb-3"
             InputProps={{
                endAdornment: (
                    <InputAdornment position='start'>
                        <IconButton>
                        <VisibilityOff />
                        </IconButton>
                    </InputAdornment>
                ),
            }}/>
            <div className="modal-footer">
            <Button >Update</Button>
            </div>
        </Card>
    </Card>
   </section>
)
}