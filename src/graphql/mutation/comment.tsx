import { gql } from "@apollo/client";

export const CREATE_COMMENT=gql`
mutation($input: CommentInput){
    saveComment(input: $input)
}`

export const DELETE_COMMENT=gql`
mutation($comment: ID){
    deleteComment(comment: $comment)
}
`