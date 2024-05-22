import { BootstrapModal } from "../../../../../components/bootstrapModal";
import { ClaimUserHasNoAccount } from "./addPost/userHasNoAccount";

export default function NewPost() {
   
    return (
        <BootstrapModal size="modal-lg" modalTitle={<>Add new Post</>} id="newPost">
              <ClaimUserHasNoAccount/>  
        </BootstrapModal>
    )
}
