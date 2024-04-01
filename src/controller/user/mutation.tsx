import { gql } from "@apollo/client";

export const REGISTER_USER=gql`
mutation($userInput:UserInput){
    saveUser(userInput:$userInput)
}
`