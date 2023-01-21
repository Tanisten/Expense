import Modal from "./Modal"

export const ConfirmDeleteModal = ({onClose, onConfirm}) =>{
   return(
    
<Modal onClose={onClose}>
            <h4>Are you sure you want to delete?</h4>
            <button onClick={onClose}>No</button>
            <button onClick={onConfirm}>Yes</button>
        </Modal>
         ) 
}
  