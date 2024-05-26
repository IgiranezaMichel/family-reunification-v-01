import { Person, PlusOne } from "@material-ui/icons"
import { Box } from "@mui/material"
import { useFindLostPerson } from "../../../../../controller/lost/query"
import { ReactNode } from "react";

export const LostDetail=(props:{customerId:string,children:ReactNode})=>{
    const{response}=useFindLostPerson(props.customerId);
    return<>
    {props.children}
        {response.responseReady&&response.responseContent!=undefined&&
        <Box sx={{p:1}}>
            <main className="row col-12">
            <section className="col-md-3 card rounded-0 border-0">
                <img src={response.responseContent.profile} alt="" />
            </section>
            <section className="col-md-9 card d-flex justify-content-center rounded-0 align-content-center border-0">
                <section>
                <Box sx={{mb:2}}><Person/> {response.responseContent.name}</Box>
                 <Box sx={{mb:2}}><Person/> {response.responseContent.gender}</Box>
                 <Box sx={{mb:2}}><b>Native Country </b> {response.responseContent.nativeCountry}</Box>
                 <Box sx={{mb:2}}><b>Current Country </b> {response.responseContent.currentCountry}</Box>
                 <Box sx={{mb:2}}><b>Date of birth </b> {response.responseContent.dob}</Box>
                 <Box sx={{mb:2}}><b>Expected lost address </b> {response.responseContent.expectedAddress}</Box>
                 <Box sx={{mb:2}}><b>Relationship </b> {response.responseContent.relationShip}</Box>
                 <Box sx={{mb:2}}><b>Status </b> {response.responseContent.hasFound?<span className="fw-bold fw-bold text-success">Found</span>:<span className="text-danger fw-bold">Not Found</span>}</Box>
                 <Box sx={{mb:2}}><b>Case </b> {response.responseContent.cases.title}</Box>
                 <Box sx={{mb:2}}>{response.responseContent.cases.description}</Box>
                </section>
            </section>
            </main>
            <small>Recent added documents</small>
            <Box sx={{border:'solid black'}}>
                <section className="d-flex justify-content-center col-md-3 border border-2 align-items-center rounded-0"  style={{height:'10dvh'}}>
                   <div className="text-center">
                   <PlusOne/>
                    <div>
                        <small>Add new document</small>
                    </div>
                   </div>
                </section>
            </Box>
            <Box>
                <section className="text-center mt-3">
                    <b className="border-0 border-bottom border-primary border-2">All comments</b>
                </section>
            </Box>
        </Box>}
    </>
}