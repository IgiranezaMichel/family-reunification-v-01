import { useEffect } from "react";
import { LostDTO } from "../../typedefs/visitorInput/lost"
import { useMutation } from "@apollo/client";
import { SAVE_LOST,DELETE_LOST } from "../../graphql/mutation/lost";

export const useSaveLost=(lost:LostDTO)=>{
    const [saveLost]=useMutation(SAVE_LOST);
    useEffect(
       ()=>{},[lost]
    )
    const saveHandler=async()=>{
       return await saveLost({variables:{lost:lost}});
    }
    return {saveHandler};
}
export const useDeleteLost=(id:string)=>{
    const [deleteLost]=useMutation(DELETE_LOST);
    const deleteHandler=async()=>{
       return await deleteLost({variables:{id:id}});
    }
    return {deleteHandler};
}