import { Avatar, Button, FormControl, InputLabel, NativeSelect, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../../components/bootstrapModal";
import { useCustomerContext } from "../../../../../context.tsx/customerContext";
import { Gender } from "../../../../../enum/gender";
import { CustomerInput } from "../../../../../typedefs/visitorInput/customer";

export const AddUser=(props:{arrIndex:number,action:string})=>{
    const [customer, setCustomer] = useState<CustomerInput>({
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
    const {data}=useCustomerContext();
    useEffect(
        ()=>{
            const fetch=()=>{
                if(props.action=='Update User Information'&&data!=undefined){
                    const result=data.content[props.arrIndex];
                    setCustomer(result);
                }else{
                    setCustomer({
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
    console.log(props.arrIndex)
    return (
        <BootstrapModal id="add-newUser" bg="" size="modal-lg">
        <Typography className="row container m-auto">
            <div className="mt-1 mb-5">
                <Avatar className="m-auto" />
                <h5 className="text-center">{props.action}</h5>
            </div>

            <section className="col-sm-6">
                <TextField value={customer.firstName} onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} variant="standard" className="form-control mb-3" label='First Name' />
                <TextField value={customer.lastName} onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} variant="standard" className="form-control mb-3" label='First Name' />
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select Gender</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select Gender', id: 'uncontrolled' }}
                        onChange={(e) => setCustomer({ ...customer, gender: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                    </NativeSelect>
                </FormControl>
                <label htmlFor="">Date of birth</label>
                <TextField variant="standard" type="date"
                    value={customer.dob} onChange={(e) => setCustomer({ ...customer, dob: e.target.value })}
                    className="form-control mb-3" />
                <label htmlFor="">Profile picture</label>
                <TextField variant="standard" type="file" className="form-control mb-3" />
                <TextField variant="standard"
                    value={customer.phoneNumber} onChange={(e) => setCustomer({ ...customer, phoneNumber: e.target.value })}
                    className="form-control mb-3"
                    label='Phone Number' />
            </section>

            <section className="col-sm-6">
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select use current Country</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        onChange={(e) => setCustomer({ ...customer, country: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
                <FormControl fullWidth className="mb-2">
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Select use Native Country</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        onChange={(e) => setCustomer({ ...customer, nativeCountry: e.target.value as Gender })} variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
                <TextField variant="standard"
                    value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="form-control mb-4" label='Email' />
                <TextField variant="standard"
                    value={customer.email} onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    className="form-control mb-4" label='Address' />
                <TextField variant="standard"
                    value={customer.username} onChange={(e) => setCustomer({ ...customer, username: e.target.value })}
                    className="form-control mb-3" label='User name' />
                <TextField variant="standard" type="password"
                    value={customer.password} onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                    className="form-control mb-3" label='Password' />
            </section>
            <div className="modal-footer">
                <Button variant="outlined" className="fw-bold">save</Button>
            </div>
        </Typography>
    </BootstrapModal>
    )
}