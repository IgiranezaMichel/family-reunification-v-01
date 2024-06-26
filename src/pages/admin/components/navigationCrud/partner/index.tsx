/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, Delete, List,Update } from "@material-ui/icons";
import {  Button} from "@mui/material";
import { useEffect, useState } from "react";
import { useOrganizationContext } from "../../../../../context.tsx/OrganizationContext";
import { DeletePartner } from "./delete";
import { SavePartner } from "./save";
import { PartnerDetail } from "./detail";

export const PartnerCrud = (props:{ search: string }) => {
    const {data} = useOrganizationContext();
    const [selectedDataIndex,setSelectedDataIndex]=useState(0);
    const [action,setAction]=useState('display');
    useEffect(
        ()=>{

        },[action,props.search]
    )
    const displayView = <main>
        <><div className="mt-3">
            <Button variant="contained"type="button" data-bs-toggle="modal" onClick={()=>setAction('Add new Partner')}
                                    data-bs-target="#addPartner"><Add /> new </Button>
        </div>
            <div className="row m-auto g-2 col-12 mb-4" >
                {data.responseContent != undefined &&data.responseContent.content.length!=0&& data.responseContent.content.map((data: any, index: number) => {
                    return <section className="col-md-4" key={index}>
                        <div className="card text-white rounded-0 border border-primary">
                            <img className="rounded-0 m-auto"  height={100} src={data.logo} alt="Title" />
                            <span className="card-title text-dark h6">{data.name}</span>
                            <div className="modal-footer text-dark border-top py-1">
                                <Button type="button" data-bs-toggle="modal"
                                    data-bs-target="#detail" onClick={()=>setAction('detail')}>
                                    <List className="bg-info p-1 text-dark rounded-circle" onClick={() => setSelectedDataIndex(index)} />
                                </Button>
                                <Button variant="text" type="button" data-bs-toggle="modal"
                                    data-bs-target="#removePartner" onClick={() => setSelectedDataIndex(index)}>
                                    <Delete className="bg-info p-1 text-dark rounded-circle" />
                                </Button>
                                <Button type="button" data-bs-toggle="modal"
                                    data-bs-target="#addPartner" onClick={()=>{setSelectedDataIndex(index);setAction('Update Organization')}}>
                                    <Update  className="bg-info p-1 text-dark rounded-circle m-1" />
                                </Button>
                            </div>
                        </div>
                    </section>
                })
                }
                {
                    data.responseContent != undefined &&data.responseContent.content.length==0&&<div className="bg-body-secondary p-4 text-center">
                        -- No data found --
                    </div>
                }
            </div>
        </>
    </main>

    return (
        <>
            {displayView}
             <SavePartner arrIndex={selectedDataIndex} action={action}/>
             <DeletePartner arrIndex={selectedDataIndex} show="delete"/>
             <PartnerDetail arrIndex={selectedDataIndex}/>
        </>
    )
}