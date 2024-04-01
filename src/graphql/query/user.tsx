import { gql } from "@apollo/client";

export const USER_PAGE=gql`
query($userPage:PaginationInput){
    userPage(userPage:$userPage){
        pageNumber
    }
}
`