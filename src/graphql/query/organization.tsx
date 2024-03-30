import { gql } from "@apollo/client";

export const ORGANIZATION_PAGE=gql`
query($input:PaginationInput){
    organizationPage(organizationPageInput:PaginationInput){
        pageNumber
    }
}
`