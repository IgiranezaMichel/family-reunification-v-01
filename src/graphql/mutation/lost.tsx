import { gql } from "@apollo/client";

export const SAVE_LOST=gql`
mutation($lost:LostDTO){
    saveLost(lost:$lost)
}
`
export const DELETE_LOST=gql`
mutation($id:ID){
    deleteLost(id:$id)
}
`