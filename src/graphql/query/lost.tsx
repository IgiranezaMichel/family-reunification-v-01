import { gql } from "@apollo/client";

export const ALL_LOST=gql`
query{lostList{
  id
  name
  profile
  gender
  address
  phoneNumber
  currentCountry
  nativeCountry
  postedBy{
    firstName
    lastName
    profilePicture
  }
  cases{
    title
    description
  }
  dob
  
}}
`