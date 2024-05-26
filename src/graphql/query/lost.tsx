import { gql } from "@apollo/client";

export const ALL_LOST = gql`
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
export const CUSTOMER_POSTS = gql`
query($customerId:ID){
  customerLostPosts(customerId:$customerId){
  id
  name
  profile
  gender
  address
  phoneNumber
  currentCountry
  nativeCountry
  hasFound
  expectedAddress
  timeStamp
  document{
    fileType
    fileName
    encodingName
    file
  }
  cases{
    title
    description
  }
  
}}
`
export const FIND_LOST_BY_ID = gql`
query($customerId:ID){
  findLostById(customerId:$customerId){
  id
  name
  gender
  address
  phoneNumber
  currentCountry
  nativeCountry
  profile
  dob
  countryOfLost
  expectedAddress
  relationShip
  hasFound
  timeStamp
  document{
    id
    fileType
    fileName
    encodingName
    file
  }
  cases{
    title
    description
    timeStamp
  }
  
}}
`
export const LOST_PAGE=gql`
query($lost:LostPageInput){
lostPageable(input:$lost){
 pageNumber
  totalPage
  total
  content{
    name
    gender
  }
}}
`