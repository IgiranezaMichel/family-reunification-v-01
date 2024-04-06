import { gql } from "@apollo/client";

export const LIST_OF_CASE = gql`
query{
  caseList{
    id
    title
    description
    timeStamp
    customer{
      firstName
      lastName
      profilePicture
      email
      phoneNumber
      dob
      address
      country 
      role
    }
  }
}
`