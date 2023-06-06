import { Avatar, Button, FormControl, InputLabel, NativeSelect, TextField, Typography } from "@mui/material"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { useEffect, useState } from "react";
import { UserInput } from "../../../../../typedefs/visitorInput/user";
import { Gender } from "../../../../../enum/gender";
import { useUserContext } from "../../../../../context.tsx/UserContext";

export const AddUser=(props:{arrIndex:number,action:string})=>{
    const [user, setUser] = useState<UserInput>({
        firstName: '',
        lastName: '',
        gender: Gender.MALE,
        base64ProfilePicture: '',
        dob: '',
        email: '',
        phoneNumber: '',
        country: '',
        nativeCountry: '',
        username: '',
        password: '',
        address: ''
    });
    const {data}=useUserContext();
    useEffect(
        ()=>{
            const fetch=()=>{
                if(props.action=='Update User Information'&&data!=undefined){
                    const result=data[props.arrIndex];
                    setUser(result);
                }else{
                    setUser({
                        firstName: '',
                        lastName: '',
                        gender: Gender.MALE,
                        base64ProfilePicture: '',
                        dob: '',
                        email: '',
                        phoneNumber: '',
                        country: '',
                        nativeCountry: '',
                        username: '',
                        password: '',
                        address: ''
                    });
                }
            }
            fetch();
        },[data, props.action, props.arrIndex]
    )
    return (
        <BootstrapModal id="add-newUser" bg="" size="modal-lg">
        <Typography className="row container m-auto">
            <div className="mt-1 mb-5">
                <Avatar className="m-auto" />
                <h5 className="text-center">{props.action}</h5>
            </div>

            <section className="col-sm-6">
                <TextField value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} variant="standard" className="form-control mb-3" label='First Name' />
                <TextField value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} variant="standard" className="form-control mb-3" label='First Name' />
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select Gender</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select Gender', id: 'uncontrolled' }}
                        onChange={(e) => setUser({ ...user, gender: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                    </NativeSelect>
                </FormControl>
                <label htmlFor="">Date of birth</label>
                <TextField variant="standard" type="date"
                    value={user.dob} onChange={(e) => setUser({ ...user, dob: e.target.value })}
                    className="form-control mb-3" />
                <label htmlFor="">Profile picture</label>
                <TextField variant="standard" type="file" className="form-control mb-3" />
                <TextField variant="standard"
                    value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                    className="form-control mb-3"
                    label='Phone Number' />
            </section>

            <section className="col-sm-6">
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select use current Country</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        onChange={(e) => setUser({ ...user, country: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
                <FormControl fullWidth className="mb-2">
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select use Native Country</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        onChange={(e) => setUser({ ...user, nativeCountry: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
                <TextField variant="standard"
                    value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="form-control mb-4" label='Email' />
                <TextField variant="standard"
                    value={user.email} onChange={(e) => setUser({ ...user, address: e.target.value })}
                    className="form-control mb-4" label='Address' />
                <TextField variant="standard"
                    value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className="form-control mb-3" label='User name' />
                <TextField variant="standard" type="password"
                    value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="form-control mb-3" label='Password' />
            </section>
            <div className="modal-footer">
                <Button variant="outlined" className="fw-bold">save</Button>
            </div>
        </Typography>
    </BootstrapModal>
    )
}