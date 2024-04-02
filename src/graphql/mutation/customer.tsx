import { gql } from "@apollo/client";

export const REGISTER_CUSTOMER=gql`
mutation($customerInput:CustomerInput){
    saveCustomer(customerInput:$customerInput)
}
`
export const DELETE_CUSTOMER=gql`
mutation($id:Long){
    deleteCustomer(id:$id)
}
`