import { gql } from "@apollo/client";

export const REGISTER_USER=gql`
mutation($userInput:UserInput){
    saveUser(userInput:$userInput)
}
`
export const DELETE_USER=gql`
mutation($id:Long){
    deleteUser(id:$id)
}
`