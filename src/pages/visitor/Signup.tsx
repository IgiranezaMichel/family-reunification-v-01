import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserInput } from '../../typedefs/visitorInput/user';
import { Gender } from '../../enum/gender';
import { Button, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import { useSaveUser } from '../../controller/user/mutation';
export const Signup = () => {
    const [user, setUser] = useState<UserInput>({
        country: '',
        dob: '',
        email: '',
        firstName: '',
        lastName: '',
        nativeCountry: '',
        phoneNumber: '',
        password: '',
        base64ProfilePicture: '',
        username: '',
        address: '',
        gender: Gender.MALE
    });
    const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setUser({ ...user, base64ProfilePicture: reader.result as string })
            };
            reader.readAsDataURL(file);
        }
    }
    const { saveHandler,response } = useSaveUser(user);
    const saveUserHandler = () => {
        saveHandler().then(
        ()=>{if(response.responseReady)alert(response.responseContent)}
        );
    }
    return (
        <>
            <div className="card p-0 rounded-0 border-0 text-white  overflow-auto w-100" style={{
                width: '100%', height: '100vh',
                backgroundImage: 'url(/Visitor/signup.png)', backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'
            }}>
                <nav
                    className="navbar navbar-expand-md navbar-dark bg-info sticky-top" style={{ zIndex: 1 }}>
                    <Link className="navbar-brand" to={'/'}>
                        <img src="/Visitor/unhcr.jpeg" alt="" className="rounded-circle" />
                    </Link>
                    <div>
                        <span className="display-5 d-block fw-bolder text-light">
                            UNHCR
                        </span>
                        <span className="text-light fw-bold">
                            The Refugee Agency
                        </span>
                    </div>
                </nav>
                <div className="d-flex d-flex m-auto card justify-content-center align-items-center col-md-8" style={{ backgroundColor: 'rgb(255,255,255,.9)' }}>
                    <div className="col-9 row">
                        <span className="fw-bolder display-5 d-block text-center pb-5 mt-3" style={{ fontFamily: "cursive" }}>Signup</span>
                        {user.base64ProfilePicture != '' && <div className="col-12">
                            <div className="card col-4 m-auto">
                                <img src={user.base64ProfilePicture} className='card-img' />
                            </div>
                        </div>}
                        <div className="col-sm-4">
                            <TextField type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} variant='standard' className='w-100 border-bottom border-3 mb-3' label='first Name' />
                            <TextField type="text" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} variant='standard' className='w-100 border-bottom border-3 mb-3' label='Last name' />
                            <FormControl fullWidth className="mb-3">
                                <InputLabel variant='standard'>Gender</InputLabel>
                                <NativeSelect className='w-100 border-bottom border-3'>
                                    <option value={Gender.MALE}>Male</option>
                                    <option value={Gender.MALE}>Female</option>
                                </NativeSelect>
                            </FormControl>
                            <span className="fw-bolder">Date of birth</span>
                            <TextField type="date" value={user.dob} onChange={(e) => setUser({ ...user, dob: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' />
                        </div>
                        {/*  */}
                        <div className="col-sm-4">
                            <TextField type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' label='Address' />
                            <TextField type="text" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} className="w-100 border-bottom border-0 border-white border-3 mb-3" variant='standard' label='Phone Number' />
                            <TextField type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-100 border-bottom border-0 border-white border-3 mb-4" variant='standard' label='Email' />
                            <TextField type="file" onChange={imgHandler} className="w-100 border-bottom border-0 border-white border-3 mb-4" variant='standard' label='Profile Picture' />
                        </div>
                        {/*  */}
                        <div className="col-sm-4">
                            <FormControl fullWidth className="mb-3">
                                <InputLabel variant='standard'>Country</InputLabel>
                                <NativeSelect className='w-100 border-bottom border-3'>
                                    <option value={'Rwanda'}>Rwanda</option>
                                    <option value={'Uganda'}>Uganda</option>
                                    <option value={'Burundi'}>Burundi</option>
                                </NativeSelect>
                            </FormControl>
                            <FormControl fullWidth className="mb-4">
                                <InputLabel variant='standard'>Native Country</InputLabel>
                                <NativeSelect onChange={(e) => setUser({ ...user, nativeCountry: e.target.value })} className='w-100 border-bottom border-3'>
                                    <option value={'Rwanda'}>Rwanda</option>
                                    <option value={'Uganda'}>Uganda</option>
                                    <option value={'Burundi'}>Burundi</option>
                                </NativeSelect>
                            </FormControl>
                            <div className="mb-3">
                                <TextField type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="w-100 border-bottom border-0 border-white border-3" variant='standard' label='Username' />
                            </div>
                            <TextField type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-100 border-bottom border-0 border-white border-3 bg-transparent" variant='standard' label='Password' />
                            <div className="modal-footer mb-3 mt-2">
                                <Button variant='contained' onClick={() => saveUserHandler()}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}