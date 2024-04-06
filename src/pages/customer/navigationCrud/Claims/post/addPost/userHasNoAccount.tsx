import { FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import JoditEditor from 'jodit-react';
import { useState } from 'react';
import { Gender } from '../../../../../../enum/gender';
import { ClaimLostPersonHavingNoAccount } from '../../../../../../typedefs/claimLostPerson';
export const ClaimUserHasNoAccount = () => {
    const [user, setUser] = useState<ClaimLostPersonHavingNoAccount>({
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

    return (
        <>
            <div className="d-flex d-flex m-auto card justify-content-center align-items-center rounded-0 mt-3" style={{ backgroundColor: 'rgb(255,255,255,.9)' }}>
                <div className="col-12 row">
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

                    </div>
                    {/*  */}
                    <div className="col-sm-4">
                        <TextField type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' label='Address' />
                        <TextField type="text" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} className="w-100 border-bottom border-0 border-white border-3 mb-3" variant='standard' label='Phone Number' />
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
                        <FormControl fullWidth className="mb-2">
                            <InputLabel variant='standard'>Native Country</InputLabel>
                            <NativeSelect onChange={(e) => setUser({ ...user, nativeCountry: e.target.value })} className='w-100 border-bottom border-3'>
                                <option value={'Rwanda'}>Rwanda</option>
                                <option value={'Uganda'}>Uganda</option>
                                <option value={'Burundi'}>Burundi</option>
                            </NativeSelect>
                        </FormControl>
                        <span className="fw-bolder">Date of birth</span>
                        <TextField type="date" value={user.dob} onChange={(e) => setUser({ ...user, dob: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' />
                    </div>
                </div>
            </div>
            <div>
            <FormControl fullWidth className="mt-3">
                            <InputLabel variant='standard'>Select case</InputLabel>
                            <NativeSelect  className='w-100 border-bottom border-3'>
                                <option value={'Case1'}>Case</option>
                            </NativeSelect>
                        </FormControl>
            </div>
            <div className='mb-1 mt-3'>Description</div>
            <JoditEditor value=''>
        </JoditEditor>
        </>
    )
}