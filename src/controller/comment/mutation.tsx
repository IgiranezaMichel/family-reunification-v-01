import { useMutation } from "@apollo/client";
import { CREATE_COMMENT, DELETE_COMMENT } from "../../graphql/mutation/comment";
import { CommentInput } from "../../typedefs/CommentInput";

export const useSaveComment=(comment:CommentInput)=>{
    const [saveComment]=useMutation(CREATE_COMMENT);
    const saveHandler=async()=>{
       return await saveComment({variables:{input:comment}});
    }
    return {saveHandler};
}
export const useDeleteComment=(id:string)=>{
    const [deleteComment]=useMutation(DELETE_COMMENT);
    const deleteHandler=async()=>{
       return await deleteComment({variables:{comment:id}});
    }
    return {deleteHandler};
}