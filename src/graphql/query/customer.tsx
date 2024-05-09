import { gql } from "@apollo/client";

export const CUSTOMER_PAGE = gql`
query($customerPage:PaginationInput){
    customerPage(customerPage:$customerPage){
    pageNumber
    pageSize
    size
    content{
      id
      firstName
      lastName
      profilePicture
      email
      phoneNumber
      gender
      userDob
      address
      country
      nativeCountry
    }
    }
}
`