import { Avatar, Button, Typography } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { Delete } from "@material-ui/icons"
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { useOrganizationContext } from "../../../../../context.tsx/OrganizationContext"
import { useEffect, useState } from "react"
import { useDeleteOrganization } from "../../../../../controller/organization/mutation"

export const DeletePartner=(props:{arrIndex:number,show:string})=>{
    const [isFound,setIsFound]=useState(false);
    const [organization,setOrganization]=useState({id:0,name:''})
    const {data}=useOrganizationContext();
    const deleteOrganization=useDeleteOrganization(organization.id);
    useEffect(
        ()=>{
            if(data.responseContent&&data.responseContent.content.length!=0){
                setIsFound(true)
                setOrganization({id:Number(data.responseContent.content[props.arrIndex].id),name:data.responseContent.content[props.arrIndex].name});
            }
        },[data.responseContent, isFound, organization.id, props.arrIndex]
    )
   const deleteHandler=()=>{
    deleteOrganization.removeOrganizationHandler();
   }
    return (
       <>
       { isFound&&data.responseContent.content.length!=0&&<BootstrapModal id="removePartner" modalTitle={ <Typography className="fw-bold mb-3">
        Remove organization
    </Typography>} size="modal-sm">
       
        <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto' }}>
            {organization.name.split(' ').length>1?<>
            {organization.name.split(' ')[0].split('')[0]}{organization.name.split(' ')[1].split('')[0]}
            </>:<>{organization.name.split('')[0]}</>}</Avatar>
        <div className="mt-2">
            Are you sure you want to remove <b>{organization.name}</b> Organization?
        </div>
        <div className="modal-footer border-top border-2 mt-2 pt-2 border-dark">
            <Button onClick={()=>deleteHandler()} className="bg-danger" variant="contained" >
                <Delete/> Remove
            </Button>
        </div>
        </BootstrapModal>}
       </>
    )
}