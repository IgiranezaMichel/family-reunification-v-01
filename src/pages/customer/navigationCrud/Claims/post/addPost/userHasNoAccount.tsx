/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, NativeSelect, TextField, styled } from '@mui/material';
import JoditEditor from 'jodit-react';
import { useEffect, useState } from 'react';
import { useCaseList } from '../../../../../../controller/cases/queries';
import { Close, CloudUpload } from '@material-ui/icons';
import { ProgressBar } from '../../../../../../components/ProgressBar';
import { LostDTO } from '../../../../../../typedefs/visitorInput/lost';
import { Item } from '../../../../../../object/item';
import { countries } from '../../../../../../object';
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
  const { response,result } = useCaseList();
  const [files, setFiles] = useState<any>([]);
  useEffect(() => {
  }, [files]);
  const handleFileChange = (event: any) => {
    const fileList = event.target.files;
    const filesArray = Array.from(fileList);
    Promise.all(filesArray.map(file => readFileData(file)))
      .then(base64Array => { setFiles(base64Array) });
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const readFileData = (file: any) => {
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

  const displayFile = <ImageList className="container-md m-auto border p-1 rounded-0">
    <ImageListItem key="Subheader" cols={2}>
      <ListSubheader component="div">lost Documents </ListSubheader>
    </ImageListItem>
    {files.map((item: any, index: number) => (
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
              onClick={() => { delete files[index] }}
            >
              <Close />
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>
  return (
    <>

      {!response.responseReady && <div className='text-center'>
        <ProgressBar />
      </div>}
      {response.responseReady && <><Grid container mb={2.3} spacing={5} direction={'row'} sx={{ p: 0 }}>

        <Grid item sm={6}>
          <Item elevation={0} sx={{ p: 0 }}>
            <TextField label='Name' className='mb-2' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, name: e.target.value })} value={lost.name} />
            <label htmlFor="">Gender</label>
            <NativeSelect className='mb-3' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, gender: e.target.value })}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </NativeSelect>
            <TextField className='mb-2' label='Tel' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, phoneNumber: e.target.value })} value={lost.phoneNumber} />
            <TextField className='mb-2' label='Address' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, address: e.target.value })} value={lost.address} />
            <label htmlFor="">Current Country</label>
            <NativeSelect className='mb-2' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, currentCountry: e.target.value })}>
              <option value="">select country</option>
              {countries.map(data => <option key={data} value={data}>{data}</option>)}
            </NativeSelect>
            <label htmlFor="" className='mt-2'>Native Country</label>
            <NativeSelect fullWidth variant='standard' onChange={(e) => setLost({ ...lost, currentCountry: e.target.value })}>
              <option value="">select country</option>
              {countries.map(data => <option key={data} value={data}>{data}</option>)}
            </NativeSelect>
          </Item>
        </Grid>

        <Grid item sm={6} className='border-2 border-primary  '>
          <Item sx={{ p: 0 }} elevation={0} className='border-2 border-primary'>
            <Button className='mb-4'
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUpload />}
            >
              Upload picture of lost
              <VisuallyHiddenInput onChange={handleFileChange} type="file" />
            </Button>
            <TextField className='mb-2' InputLabelProps={{ shrink: true }} type='date' label='Date of birth' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, name: e.target.value })} value={lost.name} />
            <section className='mb-2'>
              <label>Country of lost</label>
              <NativeSelect defaultValue={''} fullWidth variant='standard' onChange={(e) => setLost({ ...lost, countryOfLost: e.target.value })} value={lost.countryOfLost} >
                <option value="">Select country</option>
                {countries.map(data => <option key={data} value={data}>{data}</option>)}
              </NativeSelect>
            </section>
            <section>
              <TextField className='mb-2' InputLabelProps={{ shrink: true }} type='text' label='Expected Address of lost' fullWidth variant='standard' onChange={(e) => setLost({ ...lost, expectedAddress: e.target.value })} value={lost.expectedAddress} />
            </section>
            <label htmlFor="" className='mb-2'>Select Case</label>
            <NativeSelect fullWidth variant='standard' onChange={(e) => setLost({ ...lost, currentCountry: e.target.value })}>
              <option value="">select Case</option>
              {result.data!=undefined&&result.data.caseList!=undefined
              &&result.data.caseList.length!=0
              &&result.data.caseList.map((data:any)=><option key={data.id} value={data.id}>{data.title}</option>)}
            </NativeSelect>
            <TextField className='mt-3' fullWidth label='Relationship' variant='standard' InputLabelProps={{ shrink: true }} />
          </Item>
        </Grid>
      </Grid>
        {files.length != 0 && displayFile}
        <div className='mb-1'>Description</div><JoditEditor value=''>
        </JoditEditor></>}
      <div className="modal-footer">
        <Button variant='contained'>
          Add Post
        </Button>
      </div>
    </>
  )
}