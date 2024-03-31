import { Avatar, Button,TextField, TextareaAutosize, Typography } from "@mui/material"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { PersonAdd } from "@material-ui/icons"
import { deepOrange } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { OrganizationInput } from "../../../../../typedefs/organization"
import { useRegisterOrganization } from "../../../../../controller/organization/mutation"
import { useOrganizationContext } from "../../../../../context.tsx/OrganizationContext"

export const SavePartner=(props:{arrIndex:number,action:string})=>{
    const [organization, setOrganization] = useState<OrganizationInput>({ address: '', description: '', logo: '', name: '' });
    const [isLoading,setIsLoading]=useState(true);
    const { data, updateData } = useOrganizationContext();
    const { response, saveOrganizationHandler } = useRegisterOrganization(organization);
    useEffect(
        ()=>{
            if(props.action.trim()=='Update Organization'&&data.responseContent){
                 const result=data.responseContent.content[props.arrIndex];
                 setOrganization({address:result.address,description:result.description,logo:result.logo,name:result.name,id:Number(result.id)});
                 setIsLoading(false);
             }else {
                setOrganization({ address: '', description: '', logo: '', name: '' });
                setIsLoading(false)
            }
        },[data.responseContent, isLoading, props.action, props.arrIndex]
    )
    const updateHandler = () => {
        updateData();
    }
    const saveOrUpdateOrganization = () => {
        saveOrganizationHandler();
        if (response.responseReady) {
            console.log(response.responseContent);
            updateHandler();
        }
    }
    return(
        <>
        <BootstrapModal id="addPartner" modalTitle={<Typography className="fw-bold">
                <div className="py-4">
                    <PersonAdd /> {props.action}
                </div>
            </Typography>}  bg="" size="modal-md">
            {!isLoading&&<>
            <div className="p-2">
                <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto' }}>N</Avatar>
            </div>
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" value={organization.name} onChange={(e) => setOrganization({ ...organization, name: e.target.value })} label='Name' variant="standard" />
            <TextField className="col-12 mb-2 mt-2 border-bottom border-2 border-dark"value={organization.address} onChange={(e) => setOrganization({ ...organization, address: e.target.value })} label='Address' variant="standard" />
            <div className="mb-3 mt-3">
                <label className="form-label">Choose Organization logo</label>
                <input type="file" className="form-control" aria-describedby="fileHelpId" />
            </div>
            <TextareaAutosize minRows={3} value={organization.description} onChange={(e) => setOrganization({ ...organization, description: e.target.value })} placeholder="Organization description ..." className="col-12 mb-2 mt-2 border-bottom border-2 border-dark" />
            <div className="modal-footer">
                <Button className="" variant='contained' onClick={() => saveOrUpdateOrganization()}>Submit</Button>
            </div>
            </>}
        </BootstrapModal></>
    )
}