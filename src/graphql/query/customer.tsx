import { gql } from "@apollo/client";

export const CUSTOMER_PAGE = gql`
query($customerPage:PaginationInput){
    userPage(customerPage:$customerPage){
    pageNumber
    pageSize
    size
    content{
      firstName
      lastName
      profilePicture
      email
      phoneNumber
      gender
      dob
      address
      country
      nativeCountry
    }
    }
}
`