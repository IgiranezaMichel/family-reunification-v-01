/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, Dialog, FormControl, InputLabel, NativeSelect, TextField, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useCustomerContext } from "../../../../../context.tsx/customerContext";
import { Gender } from "../../../../../enum/gender";
import { CustomerInput } from "../../../../../typedefs/visitorInput/customer";
import { useSaveCustomer } from "../../../../../controller/customer/mutation";
import { IToast, Toast } from "../../../../../components/toast";

export const AddUser = (props: { arrIndex: number, action: string, open: boolean, children: ReactNode }) => {
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
    const [message, setMessage] = useState('');
    const [toast, setToast] = useState<IToast>({ message: message, open: false, responseCode: 200 });
    useEffect(
        () => {
            setToast({ ...toast, message: message });
        }, [message,customer,props]
    )
    const { saveHandler } = useSaveCustomer(customer);
    const { data, updateData } = useCustomerContext();
    const saveCustomerHandler = () => {
        saveHandler().then(data => {
            const result = data.data.saveCustomer as string;
            const responseCode = Number(result.substring(result.indexOf('<') + 1, result.indexOf(' ')))
            setMessage(result.substring(result.indexOf(',') + 1, result.lastIndexOf(',')));
            setToast({ ...toast, message: message, responseCode: responseCode });
            updateData();
            setToast({ ...toast, open: true });
        })
            .catch(err => console.log(err))
            ;
    }

    useEffect(
        () => {
            const fetch = () => {
                if (props.action == 'Update User Information' && data != undefined) {
                    const result = data.content[props.arrIndex];
                    setCustomer(result);
                } else {
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
        }, [data, props.action, props.arrIndex]
    )
    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setCustomer({ ...customer, base64ProfilePicture: reader.result as string })
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <Dialog open={props.open}>
            <Typography className="row container m-auto">
                <div className="col-12 p-2"> {props.children}</div>
                <div className="mt-1 mb-5">
                    <Avatar className="m-auto" src={customer.base64ProfilePicture.length != 0 ? customer.base64ProfilePicture : ''} />
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
                    <TextField variant="standard" type="file" onChange={imageHandler} className="form-control mb-3" />
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
                        value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="form-control mb-4" label='Address' />
                    <TextField variant="standard"
                        value={customer.username} onChange={(e) => setCustomer({ ...customer, username: e.target.value })}
                        className="form-control mb-3" label='User name' />
                    <TextField variant="standard" type="password"
                        value={customer.password} onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
                        className="form-control mb-3" label='Password' />
                </section>
                <div className="modal-footer">
                    <Button variant="outlined" onClick={() => saveCustomerHandler()} className="fw-bold">save</Button>
                </div>
            </Typography>
            <Toast item={toast}>
                <Button onClick={() => setToast({ ...toast, open: false })}>Close</Button>
            </Toast>
        </Dialog>
    )
}