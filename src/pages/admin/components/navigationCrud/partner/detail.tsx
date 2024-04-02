/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../../components/bootstrapModal"
import { useOrganizationContext } from "../../../../../context.tsx/OrganizationContext"
import { CropOriginalOutlined } from "@material-ui/icons";

export const PartnerDetail=(props:{arrIndex:number})=>{
    const [organization,setOrganization]=useState<any>({});
    const {data}=useOrganizationContext();
    useEffect(
        ()=>{
            if(data.responseContent){
               setOrganization(data.responseContent.content[props.arrIndex]);
               console.log(organization)
            }
        }, [data.responseContent, organization, props.arrIndex]
    )
    return(
        <>
        {data!=undefined&&data.responseContent&&data.responseContent.content.length!=0&&
            <BootstrapModal size="modal-lg" modalTitle={<div>
                <CropOriginalOutlined/>{organization.name} Detail
            </div>} id="detail">
                <div className="card">
                    <img src="/public/Visitor/Login.png" className="card-img rounded-0"/>
                </div>
                    <div className="mb-2">
                        <b>Name </b>{organization.name}
                    </div>
                    <div className="mb-2"><b>Address </b>{organization.address}</div>
                    <div><b>Description </b>{organization.description}</div>
                    <div><i className="float-end"><b>recoded at  </b>{String(organization.timeStamp).split('T')[0]} {String(organization.timeStamp).split('T')[1]}</i></div>
            </BootstrapModal>
        }
        </>
    )
}