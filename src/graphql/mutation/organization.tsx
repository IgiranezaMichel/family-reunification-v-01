import { gql } from "@apollo/client";

export const REGISTER_ORGANIZATION=gql`
mutation($organizationInput:OrganizationInput){
    saveOrganization(organizationInput:$organizationInput)
}
`