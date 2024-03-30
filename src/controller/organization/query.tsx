import { gql } from "@apollo/client";

export const ORGANIZATION_PAGE=gql`
query($organizationPageInput:PaginationInput){
    organizationPage(organizationPageInput:$organizationPageInput){
        pageNumber
    }
}
`