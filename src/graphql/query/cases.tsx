import { gql } from "@apollo/client";

export const LIST_OF_CASE=gql`
query{caseList{
  id
  title
  description
  customer{
    id
    firstName
    lastName
  }
  role
}}
`