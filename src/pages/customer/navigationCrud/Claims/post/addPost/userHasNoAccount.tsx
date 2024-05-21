/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar, InputLabel, ListSubheader, NativeSelect, Stepper, TextField } from '@mui/material';
import JoditEditor from 'jodit-react';
import { useEffect, useState } from 'react';
import { Gender } from '../../../../../../enum/gender';
import { useCaseList } from '../../../../../../controller/cases/queries';
import { Close } from '@material-ui/icons';
import { ProgressBar } from '../../../../../../components/ProgressBar';
import { LostDTO } from '../../../../../../typedefs/visitorInput/lost';
export const ClaimUserHasNoAccount = () => {
    const [lost, setLost] = useState<LostDTO>({
      id: '',
      name: '',
      gender: '',
      address: '',
      phoneNumber: '',
      currentCountry: '',
      nativeCountry: '',
      base64Profile: '',
      dob: '',
      countryOfLost: '',
      expectedAddress: '',
      relationShip: '',
      hasFound: false,
      customerId: 0,
      caseId: 0,
      description: ''
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
    <ListSubheader component="div">lost Documents </ListSubheader>
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
            {lost.base64Profile != '' && <div className="col-12">
              <div className="card col-4 m-auto">
                <img src={lost.base64Profile} className='card-img' />
              </div>
            </div>}
            <div className="col-sm-4">
              <TextField type="text" value={lost.name} onChange={(e) => setLost({ ...lost, name: e.target.value })} variant='standard' className='w-100 border-bottom border-3 mb-3' label='first Name' />
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
              <TextField type="text" value={lost.address} onChange={(e) => setLost({ ...lost, address: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' label='Address' />
              <TextField type="text" value={lost.phoneNumber} onChange={(e) => setLost({ ...lost, phoneNumber: e.target.value })} className="w-100 border-bottom border-0 border-white border-3 mb-3" variant='standard' label='Phone Number' />
              <label htmlFor="">Add lost Profiles</label>
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
                <NativeSelect onChange={(e) => setLost({ ...lost, nativeCountry: e.target.value })} className='w-100 border-bottom border-3'>
                  <option value={'Rwanda'}>Rwanda</option>
                  <option value={'Uganda'}>Uganda</option>
                  <option value={'Burundi'}>Burundi</option>
                </NativeSelect>
              </FormControl>
              <span className="fw-bolder">Date of birth</span>
              <TextField type="date" value={lost.dob} onChange={(e) => setLost({ ...lost, dob: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' />
            </div>
      
            <div className='col-sm-6'>
            <FormControl fullWidth className="mt-3">
              <InputLabel variant='standard'>Select case</InputLabel>
              <NativeSelect className='w-100 border-bottom border-3'>
              <option value={'Case1'}>Case</option>
              {response.responseContent.map((data:any,index:number)=>{
                return <option value={data.id} key={index}>{data.title}</option>
              })}
              </NativeSelect>
            </FormControl>
           </div>
           <div className='col-sm-6'>
           <TextField label='Expected Place of lost' value={lost.dob} onChange={(e) => setLost({ ...lost, dob: e.target.value })} className='w-100 border-bottom border-3 mb-3' variant='standard' />
           </div>
 
          </div>
          {files.length != 0 && displayFile}
          </div><div className='mb-1'>Description</div><JoditEditor value=''>
          </JoditEditor></>}
          <div className="modal-footer">
            <Button variant='contained'> 
              Add Post
            </Button>
          </div>
        </>
    )
}