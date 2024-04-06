/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, NativeSelect, TextField } from "@mui/material";
import JoditEditor from "jodit-react";import { useState } from "react";
import { LostPersonHavingAccount } from "../../../../../../typedefs/lostPerson";
export default function UserHasAccount() {
    const [lostPerson, setLostPerson] = useState<LostPersonHavingAccount>({ case: '', description: '', email: '' });
    const handleFileChange = (event:any) => {
        const fileList = event.target.files;
        const filesArray = Array.from(fileList);
        // Read files as base64 and update state
        Promise.all(filesArray.map(file => readFileData(file)))
          .then(base64Array => console.log(base64Array));
      };
    
  // Function to read file data
  const readFileData = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      // Extract file name and extension
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop();

      reader.onload = () => {
        const base64Data = reader.result;
        resolve({ fileName, fileExtension, base64Data });
      };

      reader.onerror = (error) => reject(error);
    });
  };

  return (
     <>
    <TextField className="col-12 mb-3" value={lostPerson.email} onChange={(e) => setLostPerson({ ...lostPerson, email: e.target.value })} variant="standard" label='Enter lost Person Email Address' />
    <FormControl fullWidth className="mb-3">
        <NativeSelect value={lostPerson.case} onChange={(e) => setLostPerson({ ...lostPerson, case: e.target.value })}>
            <option value="">Select case</option>
        </NativeSelect>
    </FormControl>

    <FormControl fullWidth>
        <label>Select documents/photos</label>
        <input type="file" onChange={handleFileChange} multiple/>
    </FormControl>
    <div>Add Description</div>
    <JoditEditor value={lostPerson.description} onChange={(e) => setLostPerson({ ...lostPerson, description: e })}>
    </JoditEditor>
</>
  )
}
