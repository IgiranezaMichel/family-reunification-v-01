/* eslint-disable @typescript-eslint/no-explicit-any */
import {FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, NativeSelect, TextField } from "@mui/material";
import JoditEditor from "jodit-react";import { useEffect, useState } from "react";
import { LostPersonHavingAccount } from "../../../../../../typedefs/lostPerson";
import { Close } from "@material-ui/icons";
import { useCaseList } from "../../../../../../controller/cases/queries";
import { ProgressBar } from "../../../../../../components/ProgressBar";
export default function UserHasAccount() {
    const [lostPerson, setLostPerson] = useState<LostPersonHavingAccount>({ case: '', description: '', email: '' });
    const [files,setFiles]=useState<any>([]);
    const {response}=useCaseList();
    console.log(response)
    useEffect(() => {
        console.log('add file')
        console.log(files);
      }, [files]);
    const handleFileChange = (event:any) => {
        const fileList = event.target.files;
        const filesArray = Array.from(fileList);
        Promise.all(filesArray.map(file => readFileData(file)))
          .then(base64Array =>{setFiles(base64Array);console.log(files)});
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
    {!response.responseReady&&<div>
        <ProgressBar/>
        </div>} 
   {response.responseReady&&<>
   <TextField className="col-12 mb-3" value={lostPerson.email} onChange={(e) => setLostPerson({ ...lostPerson, email: e.target.value })} variant="standard" label='Enter lost Person Email Address' />
    <FormControl fullWidth className="mb-3">
        <NativeSelect value={lostPerson.case} onChange={(e) => setLostPerson({ ...lostPerson, case: e.target.value })}>
            <option value="">Select case</option>
            {response.responseContent.map((data:any,index:number)=>{
                return <option value={data.id} key={index}>{data.title}</option>
            })}
        </NativeSelect>
    </FormControl>
    {files.length!=0&&displayFile}
    <FormControl fullWidth>
        <label>Select documents/photos</label>
        <input type="file" onChange={handleFileChange} multiple/>
    </FormControl>
    <div>Add Description</div>
    <JoditEditor value={lostPerson.description} onChange={(e) => setLostPerson({ ...lostPerson, description: e })}>
    </JoditEditor>
   </>}
</>
  )
}
