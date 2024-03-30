import { useQuery } from "@apollo/client";
import { PaginationInput } from "../../typedefs/default/paginationInput";
import { ORGANIZATION_PAGE } from "../../graphql/query/organization";
import { useState } from "react";
import { Response } from "../../typedefs/response";

export const useOrganization=(organizationInput:PaginationInput)=>{
const [response,setResponse]=useState<Response>({code:200,responseContent:[],responseReady:false});
const page=useQuery(ORGANIZATION_PAGE,{variables:{organizationInput:organizationInput}});
}