import { gql } from "@apollo/client";

export const REGISTER_CASE=gql`
mutation($caseInput:CaseInput,$customerId:Long){
    saveCases(caseInput:$caseInput,customerId:$customerId)
}
`
export const DELETE_CASE=gql`
mutation($id:Long){
    deleteCases(id:$id)
}
`