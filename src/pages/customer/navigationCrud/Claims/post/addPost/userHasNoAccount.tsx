/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar, InputLabel, ListSubheader, NativeSelect, TextField } from '@mui/material';
import JoditEditor from 'jodit-react';
import { useEffect, useState } from 'react';
import { Gender } from '../../../../../../enum/gender';
import { ClaimLostPersonHavingNoAccount } from '../../../../../../typedefs/claimLostPerson';
import { useCaseList } from '../../../../../../controller/cases/queries';
import { Close } from '@material-ui/icons';
import { ProgressBar } from '../../../../../../components/ProgressBar';
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
    const {response}=useCaseList();
    const [files,setFiles]=useState<any>([]);
    useEffect(() => {
      }, [files]);
    const handleFileChange = (event:any) => {
        const fileList = event.target.files;
        const filesArray = Array.from(fileList);
        Promise.all(filesArray.map(file => readFileData(file)))
          .then(base64Array =>{setFiles(base64Array)});
      };
    
  const readFileData = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      const fileName = file.name;
      const fileExtension = fileName.split('.').pop();

      reader.onload = () => {
        const base64Data = reader.result;
        resolve({ fileName, fileExtension, base64Data });
      };

      reader.onerror = (error) => reject(error);
    });
  };
  const displayFile=<ImageList className="container-md m-auto border p-1 rounded-0">
  <ImageListItem key="Subheader" cols={2}>
    <ListSubheader component="div">User Documents </ListSubheader>
  </ImageListItem>
  {files.map((item:any,index:number) => (
    <ImageListItem key={index}>
      <img
        srcSet={item}
        src={item.base64Data}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.fileName}
        subtitle={item.fileExtension}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            onClick={()=>{delete files[index]}}
          >
              <Close/>
          </IconButton>
        }
      />
    </ImageListItem>
  ))}
  </ImageList>
    return (
        <>
        {!response.responseReady&&<div className='text-center'>
          <ProgressBar/>
          </div>}
           {response.responseReady&&<><div className="d-flex d-flex m-auto card justify-content-center align-items-center rounded-0 mt-3" style={{ backgroundColor: 'rgb(255,255,255,.9)' }}>
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
              <label htmlFor="">Add user Profiles</label>
              <input type="file" onChange={handleFileChange} multiple className="w-100 border-bottom border-0 border-white border-3 mb-4" />
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
        </div><div>
            {files.length != 0 && displayFile}
            <FormControl fullWidth className="mt-3">
              <InputLabel variant='standard'>Select case</InputLabel>
              <NativeSelect className='w-100 border-bottom border-3'>
              <option value={'Case1'}>Case</option>
              {response.responseContent.map((data:any,index:number)=>{
                return <option value={data.id} key={index}>{data.title}</option>
              })}
              </NativeSelect>
            </FormControl>
          </div><div className='mb-1 mt-3'>Description</div><JoditEditor value=''>
          </JoditEditor></>}
        </>
    )
}