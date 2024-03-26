import { Button, Card, Divider, FormControl, InputLabel, NativeSelect, Pagination, TextField } from "@mui/material"
import { useState } from "react"
import { Gender } from "../../../enum/gender";
import { FeedbackOutlined, HourglassEmptyRounded,ThumbsUpDown } from "@material-ui/icons";
import { ClaimCrud } from "../component/navigationCrud/claims";

export const Claim=()=>{
    const [search,setSearch]=useState('');
    return(
        <>
        <div className="bg-info px-4 py-3">
        <div className="display-6 fw-bold mb-3 pt-2">
            Recent Post
        </div>
        <div className="row g-5">
    <div className="col">
     <Card className="p-3 rounded-0 border bg-light">
        <div className="fw-bold">Total Posts</div>
        <div className="float-end">
            <ThumbsUpDown className="fs-1"/>
        </div>
        <div className="display-5 fw-bold">
            2
        </div>
     </Card>
    </div>
    <div className="col">
     <Card className="p-3 rounded-0 border bg-light">
        <div className="fw-bold">Total Appending</div>
        <div className="float-end">
            <HourglassEmptyRounded className="fs-1"/>
        </div>
        <div className="display-5 fw-bold">
            2
        </div>
     </Card>
    </div>
    <div className="col">
     <Card className="p-3 border rounded-0 bg-light">
        <div className="fw-bold">Total Critical claims</div>
        <div className="float-end">
            <FeedbackOutlined className="fs-1"/>
        </div>
        <div className="display-5 fw-bold">
            2
        </div>
     </Card>
    </div>
  </div>
        </div>
        <div className="mt-3">
        <TextField variant="standard" className="col-3" label='Search'/>
        <span>
        <FormControl  className="mb-2 col-2 mx-3">
                    <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Order by</InputLabel>
                    <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                        variant="standard" className="f text-black mb-3">
                        <option value={Gender.MALE}>Rwanda</option>
                        <option value={Gender.FEMALE}>Burundi</option>
                    </NativeSelect>
                </FormControl>
        </span>
        <span>
        <Pagination className="float-end" style={{display:'inline-flex'}}/><span className="float-end"> 1 page/10</span>  
        </span>
        </div>
        <ClaimCrud/>
        </>
    )
}