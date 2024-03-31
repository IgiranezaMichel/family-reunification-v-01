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
    console.log(data)
    const displayView = <main>
        <><div className="mt-3">
            <Button variant="contained"type="button" data-bs-toggle="modal" onClick={()=>setAction('Add new Partner')}
                                    data-bs-target="#addPartner"><Add /> new </Button>
        </div>
            <div className="row m-auto g-2 col-12 mb-4" >
                {data.responseContent != undefined && data.responseContent.content.map((data: any, index: number) => {
                    return <section className="col-sm-3" key={index}>
                        <div className="card text-white">
                            <img className="card-img" src="/Visitor/baby-sitting.png" alt="Title" />
                            <div className="card-img-overlay">
                                <h5 className="card-title text-dark">{data.name}</h5>
                            </div>
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